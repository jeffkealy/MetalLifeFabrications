import Head from "next/head";
import Home from "../components/Home";

export default function Index() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
        <title>Metal Life Fabrications</title>
      </Head>
      <Home />
    </div>
  );
}
