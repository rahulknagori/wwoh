import Image from "next/image";
import styles from "../styles/Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>
        <div className={styles.logo_image}>
          <Image
            width="100%"
            height="100%"
            src="/ellipse-90.png"
            alt="logo"
          ></Image>
        </div>
        <p>home</p>
      </div>
      <div className={styles.all_post}>
        <div className={styles.all_post_img}>
          <div>
            <Image
              width="24px"
              height="9px"
              src="/Vector.png"
              alt="all post"
            ></Image>
          </div>
          <div>
            <Image
              width="24px"
              height="9px"
              src="/Vector.png"
              alt="all post"
            ></Image>
          </div>
        </div>
        <p>all post</p>
      </div>
    </div>
  );
};

export default Navbar;
