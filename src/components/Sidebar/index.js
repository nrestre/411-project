import styles from "./Sidebar.module.css";

const SideBar = () => {
  return (
    <div className={styles.sidebarContainer}>
      <ul className={styles.list}>
        <li className={styles.option}>Option 1</li>
        <li className={styles.option}>Option 2</li>
        <li className={styles.option}>Option 3</li>
      </ul>
    </div>
  );
};

export default SideBar;
