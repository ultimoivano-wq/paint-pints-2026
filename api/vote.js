export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).send("Method not allowed");
  }

  const { name, email, artist } = req.body;

  console.log("VOTO:", name, email, artist);

  res.status(200).json({ ok: true });
}
