// Returns the title of the application in json format.
// { title: "Application" }
export default function handler() {
  res.status(200).json({ title: "Application" });
}