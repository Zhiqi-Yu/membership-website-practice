/*
import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'


import React from "react";
import { Hero } from "../ui-components";
import { View } from "@aws-amplify/ui-react";


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <View>
      <Hero />
    </View>

    </>
  )
}
*/


//pages/index.js
import React from "react";
import { Flex, View } from "@aws-amplify/ui-react";
import { Footer, Hero, Persuade, Testimonies } from "../ui-components";
import { useRouter } from "next/router";
import Layout from "../components/Layout";
import { loadStripe } from "@stripe/stripe-js";

function index() {
  const router = useRouter();

  async function handleClick() {
    const stripe = await loadStripe(
      "pk_test_51OLxPvIKXc5n1rdz1kv12Amb0INWuVeREIRRldScOY14HNGW4zQEklewtZeIMXCpLOpSx7W9edxP8tLiubw8x7e700Lb9dQL5Q"
    );
    const { error } = await stripe.redirectToCheckout({
      lineItems: [{ price: "price_1OMvn0IKXc5n1rdzsMqdpNeN", quantity: 1 }],
      mode: "subscription",
      successUrl: "http://localhost:3000/post",
      cancelUrl: "http://localhost:3000/cancel",
    });
  }

  return (
    <Layout handleClick={() => {router.push("/posts")}} authText="Sign Up" username="none">
      <View marginBottom="135px">
        <Hero handleClick={handleClick} />
      </View>

      <View>
        <Testimonies />
      </View>

      <Flex justifyContent={"center"}>
        <Persuade banner="https://i.imgur.com/MxbD3N4.png" />
      </Flex>
      <View marginTop="50px" marginBottom="50px">
        <Footer />
      </View>
    </Layout>
  );
}
export default index;