import EventItem from "@/components/EventItem";
import Layout from "@/components/Layout";

import Link from "next/link";
import { NEXT_URL } from "@/config/index";

export default function EventPage({ events }) {
  return (
    <Layout>
      {events.length === 0 && <h3>No events to show</h3>}

      {events.map((evt) => (
        <EventItem key={evt.id} evt={evt} />
      ))}

      {events.length && (
        <Link href="/events">
          <a className="">View All Events</a>
        </Link>
      )}
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await fetch(`${NEXT_URL}/api/events`);
  const events = await res.json();

  return {
    props: { events: events.slice(3) },
  };
}
