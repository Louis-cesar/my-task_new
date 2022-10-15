import styles from "../styles/Home.module.css";
import Head from "next/head";
import Link from "next/link";
const Home = () => {
  return (
    <div className={styles.home}>
      <Head>
        <title>Home</title>
      </Head>
      <Link href="/">
        <a></a>
      </Link>
      <h1>HomeScreen</h1>
    </div>
  );
};

export default Home;
