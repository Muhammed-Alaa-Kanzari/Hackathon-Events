import React from "react";
import styles from "@/styles/Footer.module.css";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>Copyright &copy; Hackathon Events 2022</p>
      <p>
        <Link href="/about"> About This Project</Link>
      </p>
    </footer>
  );
}
