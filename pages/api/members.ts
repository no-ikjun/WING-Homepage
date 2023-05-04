import type { NextApiRequest, NextApiResponse } from "next";
import { sql } from "@vercel/postgres";

export default async function test(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case "GET":
      return await getMembers(req, res);
    case "POST":
      return await addMember(req, res);
    default:
      return res.status(400).end(`Method Not Allowed`);
  }
}

const getMembers = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { rows } = await sql`SELECT * FROM members`;
    return res.status(200).json(rows);
  } catch (err: any) {
    return res.status(500).json({ err });
  }
};

const addMember = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { name, email, skill, role, link, team } = req.body;
    const results = await sql`INSERT INTO members (name, email, skill, role, link, team) VALUES (${name}, ${email}, ${skill}, ${role}, ${link}, ${team});`;
    return res.status(200).json({ ...req.body });
  } catch (err: any) {
    return res.status(500).json({ err });
  }
};
