import styles from "./CheckBox.module.css";
export function CheckBox({content}) {
  function myFunction({content}) {
    var checkBox = document.getElementById("checked");
    var text = document.getElementById("text");
    if (checkBox.checked == true) {
      text.style.textDecoration = "line-through";
      text.style.color = "var(--gray-300)";
    } else {
      text.style.textDecoration = "";
      text.style.color = "var(--white)";
    }
  }
  return (
    <div className={styles.content}>
      <label for="checked" className={styles.labelChekBox}>
        <input
          id="checked"
          onClick={myFunction}
          className={styles.checkBox}
          type="checkbox"
        />
        <span className={styles.checkMark}></span>
      </label>
      <p id="text"className={styles.p1}>
      {content}
         
        </p>
    </div>
  );
}
