"use client";

import NavBar from "../components/nav/NavBar2";
import { AuthProvider } from "../context";
import Carousel2 from "../components/carousel/Carousel2";
import Checkout from ".//Checkout";
export default function CheckoutPage() {
    return (
        <>
        <AuthProvider>
            <NavBar />
            <Carousel2 />
            <Checkout />
        </AuthProvider>
        </>
    );
}