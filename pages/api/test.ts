import type { NextApiRequest, NextApiResponse } from "next";
const db = require("../../common/config/db/db.ts");

export default function test(req: NextApiRequest, res: NextApiResponse) {
  db.query("SELECT * FROM members", (err: any, results: any) => {
    if (err) {
      console.log(err);
    } else {
      res.status(200).json(results);
    }
  });
}
