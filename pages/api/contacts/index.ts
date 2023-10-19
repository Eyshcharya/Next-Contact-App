import { NextApiRequest, NextApiResponse } from "next";
import connectDB from "../../../libs/db";
import {
  deleteContacts,
  getContacts,
  postContacts,
  updateContacts,
} from "@/libs/controllers";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  connectDB().catch(() => {
    res.status(405).json({ error: "Error in the connection" });
  });
  const { method } = req;

  switch (method) {
    case "GET":
      return getContacts(req, res);

    case "POST":
      return postContacts(req, res);

    case "PUT":
      return updateContacts(req, res);

    case "DELETE":
      return deleteContacts(req, res);

    default:
      return res.status(405).end(`method @{method} not allowed`);
  }
};
export default handler;
