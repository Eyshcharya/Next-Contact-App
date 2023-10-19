import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";
import connectDB from "../../../libs/db";
import { getContacts, postContacts } from "@/libs/controllers";

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
      res.status(200).json({ method: method });
      break;
    case "DELETE":
      res.status(200).json({ method: method });
      break;
    default:
      res.status(405).end(`method @{method} not allowed`);
      break;
  }
};
export default handler;
