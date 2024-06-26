//const DATA_EXPIRY_DURATION = 1000 * 60 * 60 * 24; // 24 hours
const DATA_EXPIRY_DURATION = 1;
const DEBUG = true;

export const API_BASE_URL = DEBUG ? "http://localhost:3003/api/v1" : "http://localhost:3003/api/v1";

function debug(...args) {
  if (DEBUG) {
    console.log(...args);
  }
}

const fetchData = async (uri, controller, opts = {}) => {
  try {
    const opts1 = {
      credentials: DEBUG ? "include" : "include",
      ...opts,
    };

    if (controller) {
      opts1.signal = controller.signal;
    }

    debug("fetching", `${API_BASE_URL}/${uri}`, opts1);
    const res = await fetch(`${API_BASE_URL}/${uri}`, opts1);

    if (!res.ok) {
      console.error(res);
      let err = await res.text();
      console.log(err);
      throw new Error(err);
    }

    return await res.json();
    // return testDB;
  } catch (error) {
    if (error.name === "AbortError") {
      debug("Aborted fetch");
      return null;
    }
    throw error;
  }
};

const clearMatchingLocalStorage = (subKey, exclude) => {
  const keys = Object.keys(localStorage);
  for (const key of keys) {
    if (key.startsWith(subKey) && key !== exclude) {
      localStorage.removeItem(key);
    }
  }
};

/**
 * Technically feature incomplete as prefetch lookup to check if db changed is necessary for reliably fresh data.
 *
 * @param {string} key
 * @param {string} uri
 * @param {AbortController} controller
 * @param {RequestInit} opts
 * @returns
 */
const fetchPersistentData = async (key, uri, controller, opts = {}) => {
  // check if local storage has the featured list from recently
  const storedFeaturedItems = localStorage.getItem(key);
  const storedFeaturedItemsParsed = storedFeaturedItems ? JSON.parse(storedFeaturedItems) : null;
  const now = new Date();

  if (storedFeaturedItemsParsed && now - new Date(storedFeaturedItemsParsed.timestamp) < DATA_EXPIRY_DURATION) {
    return storedFeaturedItemsParsed.value;
  }

  try {
    const data = await fetchData(uri, controller, opts);

    // store the featured list in local storage
    localStorage.setItem(key, JSON.stringify({ value: data, timestamp: new Date() }));
    return data;
  } catch (error) {
    if (error.name === "AbortError") {
      debug("Aborted fetch");
      return null;
    }
    throw error;
  }
};

const fetchSessionData = async (key, uri, controller, opts = {}) => {
  // check if local storage has the featured list from recently
  const storedFeaturedItems = sessionStorage.getItem(key);
  const storedFeaturedItemsParsed = storedFeaturedItems ? JSON.parse(storedFeaturedItems) : null;
  const now = new Date();

  if (storedFeaturedItemsParsed && now - new Date(storedFeaturedItemsParsed.timestamp) < DATA_EXPIRY_DURATION) {
    return storedFeaturedItemsParsed.value;
  }

  try {
    const data = await fetchData(uri, controller, opts);

    // store the featured list in local storage
    sessionStorage.setItem(key, JSON.stringify({ value: data, timestamp: new Date() }));
    return data;
  } catch (error) {
    if (error.name === "AbortError") {
      debug("Aborted fetch");
      return null;
    }
    throw error;
  }
};

/**
 *
 * @param {AbortController} controller
 * @param {{limit?: number, after?: number}} opts
 * @returns
 */
export const fetchFeaturedListings = async (controller, opts = {}) => {
  let uri = "listings/featured";
  if (opts.limit != null && opts.after != null) {
    uri += `?limit=${opts.limit}&after=${opts.after}`;
  } else if (opts.limit != null) {
    uri += `?limit=${opts.limit}`;
  } else if (opts.after != null) {
    uri += `?after=${opts.after}`;
  }

  const key = `featuredListings:${uri}`;
  clearMatchingLocalStorage("featuredListings", key);
  return fetchData(uri, controller);
};

/**
 * @param {string} query
 * @param {{limit?: number, after?: number, sortBy?: string}} opts
 */
export const searchListings = async (query, controller, opts = {}) => {
  const queryParams = new URLSearchParams();

  Object.entries(opts).forEach(([key, value]) => {
    queryParams.append(key, value);
  });

  let uri = `search/listings?q=${query}`;

  if (queryParams.toString().length > 0) {
    uri += `&${queryParams.toString()}`;
  }

  return fetchSessionData(`searchListings:${queryParams.toString()}`, uri, controller, {});
};

/**
 * @param {number} userid
 * @param {{limit?: number, after?: number}} opts
 * @returns
 */
export const fetchUserListings = async (userid, controller, opts = {}) => {
  const queryParams = new URLSearchParams();

  let uri = `user/${userid}/listings`;
  if (opts.limit != null && opts.after != null) {
    uri += `?limit=${opts.limit}&after=${opts.after}`;
  } else if (opts.limit != null) {
    uri += `?limit=${opts.limit}`;
  } else if (opts.after != null) {
    uri += `?after=${opts.after}`;
  }

  return fetchSessionData(`userListings:${userid}:${queryParams.toString()}`, uri, controller);
};

export const getUser = async (username, controller) => {
  // TODO: prefetch to check if user was updated, if so then fetch full user data

  // then perform full lookup.
  return fetchData(`user/${username}`, controller);
};

/**
 *
 * @param {any} data
 * @param {AbortController} controller
 * @param {RequestInit} opts
 * @returns
 */
export const createListing = async (data, controller, opts = {}) => {
  console.log(JSON.stringify(data));
  const response = await fetchData("listing", controller, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
    ...opts,
  });
  return response; // already in json
};

export const addListingToCart = async (listingId, controller) => {
  const response = await fetchData(`listing/${listingId}/cart`, controller, {
    method: "PUT",
  });
  return response;
};

export const editListing = async (data, controller) => {
  if (!data.id) {
    throw new Error("Missing listing id");
  }

  const response = await fetchData(`listing/${data.id}`, controller, {
    method: "PUT",
    headers: {
      "Content-Type" : "application/json",
    },
    body: JSON.stringify(data)
  });
  return response
};

export const removeListingFromCart = async (listingId, controller) => {
  const response = await fetchData(`listing/${listingId}/cart`, controller, {
    method: "DELETE",
  });
  return response;
}

export const deleteListing = async (listingId, controller) => {
  const response = await fetchData(`listing/${listingId}`, controller, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response;
};

export const getListing = async (listingId, controller) => {
  const key = `listing:${listingId}`;
  return fetchSessionData(key, `listing/${listingId}`, controller);
};

export const login = async (email, password, controller) => {
  const response = await fetchData("login", controller, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username: email, email, password }),
  });

  return response;
};

export const register = async (opts, controller) => {
  const { username, email, password, phone } = opts;
  const response = await fetchData("register", controller, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, email, password, phone }),
  });

  return response;
};

export const logout = async (controller) => {
  return fetchData("logout", controller);
};

export const getInfo = async (controller) => {
  return fetchData("@me", controller);
};


export const checkout = async (controller = new AbortController()) => {
  return fetchData("checkout", controller, {
    method: "POST",
  });
}
