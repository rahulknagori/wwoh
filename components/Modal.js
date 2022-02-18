import { useRef, useState } from "react";
import styles from "../styles/Modal.module.css";
import Button from "./UI/Button";

const Modal = ({ setOpenModal }) => {
  const formRefs = useRef({});
  const [toastMsg, setToastMsg] = useState(false);

  const onSubmitHandler = (e) => {
    e.preventDefault();

    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({
        title: formRefs.current.title.value,
        body: formRefs.current.desc.value,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => {
        if (response.status !== 201) {
          return;
        } else {
          setToastMsg(true);
          setTimeout(() => {
            setToastMsg(false);
          }, 3000);
          return response.json();
        }
      })
      .then((json) => {
        console.log("response: " + JSON.stringify(json));
      });
    formRefs.current.title.value = "";
    formRefs.current.desc.value = "";
  };
  return (
    <div className={styles.modal}>
      <div className={styles["modal-content"]}>
        {toastMsg && <div style={{ color: "red" }}>SUCCESS</div>}
        <div className={styles.modal_content}>
          <form onSubmit={onSubmitHandler}>
            <div className={styles.input_element}>
              <label htmlFor="img_upload" className={styles.img_upload}></label>
              <input id="img_upload" hidden></input>
              <label
                htmlFor="image_upload_text"
                className={styles.image_upload_text}
              >
                Add an image
              </label>
              <input
                type="file"
                ref={(el) => {
                  formRefs.current.file = el;
                }}
                id="image_upload_text"
                hidden
              ></input>
            </div>
            <label htmlFor="title">Title</label>
            <input
              required
              ref={(el) => {
                formRefs.current.title = el;
              }}
              id="title"
              type="text"
            ></input>
            <label>Description</label>
            <textarea
              required
              ref={(el) => {
                formRefs.current.desc = el;
              }}
            ></textarea>
            <div className={styles.btn}>
              <Button type="submit" value="submit" className={styles.post_btn}>
                Add a new post
              </Button>
            </div>
          </form>
        </div>
      </div>
      <span onClick={() => setOpenModal(false)} className={styles.close}>
        <p>&times;</p>
      </span>
    </div>
  );
};

export default Modal;
