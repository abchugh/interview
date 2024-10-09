import { NextApiRequest, NextApiResponse } from "next";
import { MOVIE_DATA } from "./movieData";

export async function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const path = req.query?.path as string | undefined;
  await sleep(500);
  const dataKey = path?.split("/").pop()?.split(".")?.[0];

  if (!dataKey || !MOVIE_DATA[dataKey]) {
    res.status(404).json({ error: "Not found" });
    return;
  }
  res.status(200).json(MOVIE_DATA[dataKey]);
}
