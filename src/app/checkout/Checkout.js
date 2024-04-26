import "./Checkout.css";
import Link from "next/link";
import { useState, useEffect, useCallback } from "react";
import { useAuth } from "../context";
import * as api from "../utils";

export default function Checkout() {

  const [shoes, setShoes] = useState([]);
  const [userState, setUserState] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    api.getInfo(controller)
    .then(data => setUserState(data))
    .catch(err => console.log(err))

    return () => controller.abort()
  }, []);

  useEffect(() => {
  	if(userState == null)
  		return;

  	const controller = new AbortController();

  	userState.cart.forEach(e => {
  		api.getListing(e, controller)
  		.then(data => {
  			if(data == null)
  				return;

  			setShoes(prev => {

  				if(prev != null)
  					return [...prev, data];
  				else
  					return [data];
  			})
  		})
  		.catch(err => console.log(err));
  	});

  	return () => controller.abort()
  }, [userState]);

  const handleDelete = (e, shoeId) => {
    e.preventDefault();
    api.removeListingFromCart(shoeId).then(console.log).catch(console.error);
    setShoes(shoes.filter((shoe) => shoe.id !== shoeId));
  };

  const submitForm = () => {
    document.getElementById("checkoutConfirmation").submit();
    api.checkout().then(console.log).catch(console.error);
  };

  return (
    <div className="checkoutContainer">
      <div className="topCheck">
        <Link href="/marketplace">
          <img src="/leftarrow.png" />
        </Link>
        <h1>Checkout</h1>
      </div>

      <div className="formCheck">
        <form id="checkoutConfirmation">
          <div className="nameCheckout">
            <input type="text" placeholder="First Name" />
            <input type="text" placeholder="Last Name" />
          </div>
          <input type="email" placeholder="Confirm Email" />
        </form>
      </div>
      <div className="orderSummary">
        <h2>Order Summary</h2>
        <p>A confirmation of the order will be sent to your email.</p>
        <div className="checkoutShoeGrid">
        {
		  	shoes?.map((shoe) => {
				if(shoe == null)
					return;

				return (
					<div className="shoeCard" key={shoe.id}>
						<Link className="shoecardbuttonlink" href={`/individualshoe?shoeId=${shoe.id}`} key={shoe.id}>
						  <img src={shoe.sideview} alt={shoe.name} />
						</Link>
						<h2>{shoe.name}</h2>
						<p>${shoe.price}</p>
						<button className="deleteButton" onClick={(e) => handleDelete(e, shoe.id)}>
						  Remove
						</button>
					</div>
			  	);
			})
		}
		</div>
      </div>
      <button className="confirmCheckout" onClick={submitForm}>
        Confirm Order
      </button>
    </div>
  );
}
