import Link from "next/link";
import styles from "./Nav.module.css";
export default function Nav() {
  return (
    <nav className={`${styles.nav} bg-slate-500`}>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <Link href={"/dashboard"}>Dashboard</Link>
        </li>
        <li className={styles.navItem}>
          <Link href={"/dashboard/create-post"}>Create Post</Link>
        </li>
        <li className={styles.navItem}>
          <Link href={"/dashboard/delete-post"}>Delete Post</Link>
        </li>
        <li className={styles.navItem}>
          <Link href={"/dashboard/update-post"}>Update Post</Link>
        </li>
      </ul>
    </nav>
  );
}
