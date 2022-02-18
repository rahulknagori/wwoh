import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Index.module.css";
import Modal from "../components/Modal";
import PostCard from "../components/PostCard";
import Button from "../components/UI/Button";
import InfoCard from "../components/InfoCard";

export default function Home() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className={styles.container}>
      <Head>
        <title>WWOH</title>
        <meta name="description" content="WWOH Assignment" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        {openModal && <Modal setOpenModal={setOpenModal} />}
        {/* post section - start */}
        <section className={styles.post}>
          <div className={styles.post_main}>
            <div className={styles.top_content}>
              <h3>All Post</h3>
              <h3>View All</h3>
            </div>
            <article className={styles.card_container}>
              <PostCard></PostCard>
            </article>
            <div onClick={() => setOpenModal(true)} className={styles.btn}>
              <Button className={styles.post_btn}>Add a new post</Button>
            </div>
          </div>
        </section>
        {/*post section - end  */}
        {/* info section - start */}
        <section className={styles.info}>
          <div className={styles.info_card}>
            <InfoCard />
            <InfoCard />
            <InfoCard />
          </div>
        </section>
        {/* info section -end */}
      </main>
    </div>
  );
}

// export async function getStaticProps() {
//   const res = await fetch("https://jsonplaceholder.typicode.com/posts");
//   const posts = await res.json();
//   const imageRes = await fetch(
//     "https://jsonplaceholder.typicode.com/https://jsonplaceholder.typicode.com/photos"
//   );
//   const images = await imageRes.json();
//   return {
//     props: {
//       posts,
//       images,
//     },
//   };
// }
