import "./Checkout.css";
import Link from "next/link";
import { useState, useEffect, useCallback } from "react";
import { useAuth } from "../context";
import * as api from "../utils";

export default function Checkout() {

	const { user } = useAuth();
  const [shoes, setShoes] = useState([]);
  const [fakeRefresh, setRefresh] = useState("");

  const cb = useCallback(
    async (controller) => {
      const user1 = user;
      if (user1 == null) return;
      if (user1.cart == null) return;

      let shoesArr = [];

      await Promise.all(
        user1.cart.map(async (id) => {
          const data = await api.getListing(id, controller);
          if (data == null) return;
          shoesArr.push(data);
        })
      );

      shoesArr.sort((a, b) => a.id - b.id);

      setShoes(shoesArr);
    },
    [user, fakeRefresh]
  );

  useEffect(() => {
    const controller = new AbortController();
    console.log("i ran");
    setRefresh("asgdf");
    cb(controller);
    return () => controller.abort();
  }, [cb]);

  const handleDelete = (e, shoeId) => {
    e.preventDefault();
    api
      .removeListingFromCart(shoeId)
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
    setShoes(shoes.filter((shoe) => shoe.id !== shoeId));
  };

    const submitForm = () => {
        document.getElementById("checkoutConfirmation").submit();
    };

    return (
      <div className="checkoutContainer">
            <div className="topCheck">
                <Link href="/marketplace">
                    <img src="/leftarrow.png"/>
                </Link>
                <h1>Checkout</h1>
            </div>

            <div className="formCheck">
                <form id="checkoutConfirmation">
                    <div className="nameCheckout">
                        <input type="text" placeholder="First Name"/>
                        <input type="text" placeholder="Last Name" />
                    </div>
                    <input type="email" placeholder="Confirm Email"/>
                </form>
            </div>
            <div className="orderSummary">
                <h2>Order Summary</h2>
                <p>A confirmation of the order will be sent to your email.</p>
                <div className="checkoutShoeGrid">
                  {shoes?.map((shoe) => (
                      <div className="shoeCard" key={shoe.id}>
                        <Link className="shoecardbuttonlink" href={`/individualshoe?shoeId=${shoe.id}`} key={shoe.id}>
                          <img src={shoe.sideview} alt={shoe.name} />
                        </Link>
                        <h2>{shoe.name}</h2>
                        <p>${shoe.price}</p>
                        <button className="deleteButton" onClick={(e) => handleDelete(e, shoe.id)}>Remove</button>
                      </div>
                    ))}
                </div>
            </div>
            <button className ="confirmCheckout" onClick={submitForm}>Confirm Order</button>
        </div>
    );
}
