import EventItem from "@/components/EventItem";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function HomePage({ events }) {
  return (
    <Layout>
      <h1>Upcoming Events</h1>
      {/* {events.length === 0 && <h3>No events to show</h3>}

      {events.map((event) => (
        <EventItem key={event.id} event={event} />
      ))}

      {events.length && (
        <Link href="/events">
          <a className="">View ALl Events</a>
        </Link>
      )} */}
    </Layout>
  );
}

// export async function getStaticProps() {
//   // const res = await fetch(`${API_URL}/events?_sort=date:ASC&_limit=3`)
//   const events = await res.json();

//   return {
//     props: { events },
//     //
//   };
// }
