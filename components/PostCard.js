import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/PostCard.module.css";
import Card from "./UI/Card";

const PostCard = () => {
  const [data, setData] = useState([]);
  const [imagdata, setImageData] = useState([]);

  const urls = [
    "https://jsonplaceholder.typicode.com/posts",
    "https://jsonplaceholder.typicode.com/photos",
  ];

  useEffect(async () => {
    const data = await fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((result) => setData(result));

    const imageData = await fetch("https://jsonplaceholder.typicode.com/photos")
      .then((res) => res.json())
      .then((result) => setImageData(result));
  }, []);


  return data?.map((eachData, i) => {
    return (
      i <= 2 && (
        <Card key={eachData.id} className={styles.post_main}>
          <div className={styles.img}>
            <Image width={70} height={70} src={"/unsplash_post1.png"}></Image>
          </div>
          <div className={styles.content}>
            <h3>{eachData?.title?.slice(0, 10)}</h3>
            <p className={styles.desc}>{eachData?.body}</p>
            <Link href={`/post/${eachData?.id}`}>
              <p>continue reading</p>
            </Link>
          </div>
          <Link href="#">
            <h3 className={styles.edit_link}>edit</h3>
          </Link>
        </Card>
      )
    );
  });
};

export default PostCard;
