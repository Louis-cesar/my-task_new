import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";
const About = () => {
  return (
    <div className={styles.about}>
      <Head>
        <title>About</title>
      </Head>

      <Link href="/">
        <a>Back to home</a>
      </Link>

      <h1>This is my about page</h1>
    </div>
  );
};

export default About;
