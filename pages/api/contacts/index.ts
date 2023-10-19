import { NextApiRequest, NextApiResponse } from "next";
import connectDB from "../../../libs/db";
import {
  deleteContacts,
  getContacts,
  postContacts,
  updateContacts,
} from "@/libs/controllers";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  //  connectDB();
  connectDB().catch(() => {
    res.status(405).json({ error: "Error in the connection" });
  });
  const { method } = req;

  switch (method) {
    case "GET":
      getContacts(req, res);
      break;
    case "POST":
      postContacts(req, res);
      break;
    case "PUT":
      updateContacts(req, res);
      break;
    case "DELETE":
      deleteContacts(req, res);
      break;
    default:
      res.status(405).end(`method @{method} not allowed`);
      break;
  }
};
export default handler;
