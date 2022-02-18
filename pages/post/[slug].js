import { useState } from "react";
import PostCard from "../../components/PostCard";
import Button from "../../components/UI/Button";
import Modal from "../../components/Modal";
import styles from "../../styles/Post.module.css";

const Posts = ({ posts }) => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className={styles.container}>
      {openModal && <Modal setOpenModal={setOpenModal} />}
      <h1>{posts?.title.slice(0, 10)}</h1>
      <p>{posts?.body}</p>
      <p>{posts?.body}</p>
      <p>{posts?.body}</p>
      <p>
        <span style={{ color: "grey" }}>by</span>{" "}
        <span style={{ fontWeight: "600" }}>
          man from earth{" "}
          <span style={{ color: "grey", fontWeight: "400" }}>
            | 23rd December, 2020
          </span>
        </span>
      </p>
      <div className={styles.post_slug_btn}>
        <div
          onClick={() => {
            setOpenModal(true);
          }}
        >
          <Button className={styles.each_post_btn}>edit</Button>
        </div>
        <div>
          <Button className={`${styles.each_post_btn} ${styles.delete_btn}`}>
            delete
          </Button>
        </div>
      </div>
      <h3 style={{ textAlign: "center" }}>All post</h3>
      <div className={styles.post_card_main}>
        <PostCard />
      </div>
    </div>
  );
};

export async function getStaticPaths() {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);

  const posts = await res.json();

  const paths = posts?.map((post) => ({
    params: { slug: post?.id?.toString() },
  }));

  return { paths, fallback: "blocking" };
}

export async function getStaticProps({ params }) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.slug}`
  );
  const posts = await res.json();

  return {
    props: {
      posts,
    },
  };
}

export default Posts;
