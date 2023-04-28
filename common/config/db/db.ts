export {};
import mysql from "serverless-mysql";
require("dotenv").config();

const db = mysql({
  config: {
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    database: process.env.DB,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
  },
});

export { db };
