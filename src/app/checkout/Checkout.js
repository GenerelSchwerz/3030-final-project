import "./Checkout.css";
import Link from "next/link";

export default function Checkout() {

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
            </div>
            <button className ="confirmCheckout" onClick={submitForm}>Confirm Order</button>
        </div>
    );
}