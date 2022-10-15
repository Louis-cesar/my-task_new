import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";
const Contact = () => {
  return (
    <div className={styles.contact}>
      <Head>
        <title>Contact</title>
      </Head>
      <Link href="/">
        <a>Back to home</a>
      </Link>

      <h1>Drop your Contact here!</h1>
    </div>
  );
};

export default Contact;
