import Head from "next/head";
import Home from "../components/Home";
import Image from "next/image";
import styles from "../styles/Layout.module.css";

export default function Index() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
        <link rel="icon" href="/favicon.ico" />
        <title>Metal Life Fabrications</title>
      </Head>
      <Home />
    </div>
  );
}
