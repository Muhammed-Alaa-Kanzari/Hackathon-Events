// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const { events } = require("./data.json");

export default function handler(req, res) {
  const event = events.filter((ev) => ev.slug === req.query.slug);

  if (req.method === "GET") {
    // Process a GET request
    res.status(200).json(event);
  } else {
    // Handle any other HTTP method
    res.setHeader("Allow", ["GET"]);
    res.status(405).json({ message: `Method ${req.method} is not allowed` });
  }
}
