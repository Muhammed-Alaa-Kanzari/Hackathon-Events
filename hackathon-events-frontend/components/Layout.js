import Head from "next/head";
import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import styles from "@/styles/Layout.module.css";

export default function Layout({ title, description, keywords, children }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Head>

      <Header />
      {/*  */}
      <div className={styles.container}>{children}</div>

      <Footer />
    </div>
  );
}

Layout.defaultProps = {
  title: "Hackathon Events",
  description: "Find the latest H Events",
  keywords: "coding,hackathon,events",
};
