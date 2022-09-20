// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const { events } = require("./data.json");

export default function handler(req, res) {
  if (req.method === "GET") {
    // Process a GET request
    res.status(200).json(events);
  } else {
    // Handle any other HTTP method
    res.setHeader("Allow", ["GET"]);
    res.status(405).json({ message: `Method ${req.method} is not allowed` });
  }
}
