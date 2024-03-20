import clientPromise from "../lib/mongodb";
import type { InferGetServerSidePropsType, GetServerSideProps } from "next";
import Header from "../components/header";
import Student from "../components/student";

type ConnectionStatus = {
  isConnected: boolean;
};

export const getServerSideProps: GetServerSideProps<ConnectionStatus> = async () => {
  try {
    await clientPromise;
    return {
      props: { isConnected: true },
    };
  } catch (e) {
    console.error(e);
    return {
      props: { isConnected: false },
    };
  }
};


export default function Home() {
  return (
    <main>
      <Header></Header>
      (isConnected ? (
        <h1>You are connected to MongoDB!</h1>
      ) : (
        <h1>You are NOT connected to MongoDB. Check the console for errors.</h1>
      ))
    </main>
  )


}

