import { NextApiRequest, NextApiResponse } from "next";
import { Contacts } from "./models/contactSchema";

// http://localhost:3000/api/contacts
// GET
export async function getContacts(req: NextApiRequest, res: NextApiResponse) {
  try {
    const contacts = await Contacts.find({});
    if (contacts) {
      return res.status(200).json(contacts);
    } else {
      return res.status(404).json({ error: "Contacts Not Found" });
    }
  } catch (error) {
    return res.status(404).json({ error: error });
  }
}

// http://localhost:3000/api/contacts
// POST
export async function postContacts(req: NextApiRequest, res: NextApiResponse) {
  try {
    const contact = req.body;
    const createContact = await Contacts.create(contact);
    if (createContact) {
      return res.status(200).json(createContact);
    } else {
      return res.status(404).json({ error: "Invalid Data" });
    }
  } catch (error) {
    return res.status(404).json({ error: error });
  }
}

// http://localhost:3000/api/contacts?contactId={_id}
// PUT
export async function updateContacts(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const contact = req.body;
    const { contactId } = req.query;
    const updatedContact = await Contacts.findByIdAndUpdate(contactId, contact);
    if (updatedContact) {
      return res.status(200).json(updatedContact);
    } else {
      return res.status(404).json({ error: "Invalid Id or Data" });
    }
  } catch (error) {
    return res.status(404).json({ error: error });
  }
}

// http://localhost:3000/api/contacts?contactId={_id}
// DELETE
export async function deleteContacts(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { contactId } = req.query;

    const deleteContact = await Contacts.findByIdAndDelete(contactId);
    if (deleteContact) {
      return res
        .status(200)
        .json({ message: "Contact deleted!!!!", deleteContact });
    } else {
      return res.status(404).json({ error: "Failed to delete contact" });
    }
  } catch (error) {
    return res.status(404).json({ error: error });
  }
}
