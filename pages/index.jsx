import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import { HeaderComponent } from "@/components/HeaderComponent";

export default function Home() {
  return (
    <>
      <Head>
        <title>For Interview</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className={`${styles.header}`}>
          <Image
            src="/vercel.svg"
            alt="Vercel Logo"
            className={styles.vercelLogo}
            width={100}
            height={24}
            priority
          />
          Website
          <HeaderComponent />
        </div>
        <div>
          <h2>What is Lorem Ipsum?</h2>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </div>
      </main>
    </>
  );
}
