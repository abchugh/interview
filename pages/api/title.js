// Returns the title of the application in json format.
// { title: "Application" }
export default function handler(req, res) {
  const lang = req.query?.lang || "EN";
  if (lang === "EN") res.status(200).json({ title: "Website" });
  if (lang === "FR") res.status(200).json({ title: "site web" });
  if (lang === "DE") res.status(200).json({ title: "Webseite" });
}
