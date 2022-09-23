import Layout from "@/components/Layout";
import { NEXT_URL } from "@/config/index";
import styles from "@/styles/Event.module.css";
import Image from "next/image";
import Link from "next/link";
import { FaPencilAlt, FaTimes } from "react-icons/fa";

export default function EventPage({ event }) {
  const deleteEvent = (e) => {
    console.log("delete");
  };

  return (
    <Layout>
      <div className={styles.event}>
        <div className={styles.controls}>
          <Link href={`/event/edit/${event.id}`}>
            <a>
              <FaPencilAlt />
              Edit Event
            </a>
          </Link>
          <a href="#" className={styles.delete} onClick={deleteEvent}>
            {" "}
            <FaTimes /> Delete Event{" "}
          </a>
        </div>
        <span>
          {" "}
          {event.date} at {event.time}
        </span>
        <h1>{event.name}</h1>

        {event.image && (
          <div className={styles.image}>
            <Image src={event.image} alt="event" height={600} width={960} />
          </div>
        )}
        <h3>Hosted By :</h3>
        <p>{event.hosted}</p>
        <h3>Description :</h3>
        <p>{event.description}</p>
        <Link href="/events">
          <a className={styles.back}>Go Back</a>
        </Link>
      </div>
    </Layout>
  );
}

// export async function getServerSideProps({ query: { slug } }) {
//   const res = await fetch(`${NEXT_URL}/api/events/${slug}`);
//   const events = await res.json();

//   return {
//     props: {
//       event: events[0],
//     },
//   };
// }

export async function getStaticPaths() {
  const res = await fetch(`${NEXT_URL}/api/events`);
  const events = await res.json();

  const paths = events.map((evt) => ({
    params: { slug: evt.slug },
  }));

  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const res = await fetch(`${NEXT_URL}/api/events/${slug}`);
  const events = await res.json();

  return {
    props: {
      event: events[0],
    },
    revalidate: 1,
  };
}
