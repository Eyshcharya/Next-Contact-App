import { NextApiRequest, NextApiResponse } from "next";
import { Contacts } from "./models/contactSchema";

// http://localhost:3000/api/contacts
// GET
export async function getContacts(req: NextApiRequest, res: NextApiResponse) {
  try {
    const contacts = await Contacts.find({});
    if (contacts) {
      res.status(200).json(contacts);
    } else {
      res.status(404).json({ error: "Contacts Not Found" });
    }
  } catch (error) {
    res.status(404).json({ error: error });
  }
}

// http://localhost:3000/api/contacts
// POST
export async function postContacts(req: NextApiRequest, res: NextApiResponse) {
  try {
    const contact = req.body;
    const createContact = await Contacts.create(contact);
    if (createContact) {
      res.status(200).json(createContact);
    } else {
      res.status(404).json({ error: "Invalid Data" });
    }
  } catch (error) {
    res.status(404).json({ error: error });
  }
}

// http://localhost:3000/api/contacts
// PUT
export async function updateContacts(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { _id, name, email, phone, gender } = req.body;

    const updatedContact = await Contacts.findByIdAndUpdate(_id, {
      name,
      email,
      phone,
      gender,
    });
    if (updatedContact) {
      res.status(200).json(updatedContact);
    } else {
      res.status(404).json({ error: "Invalid Id or Data" });
    }
  } catch (error) {
    res.status(404).json({ error: error });
  }
}

// http://localhost:3000/api/contacts/{contactId}
// DELETE
export async function deleteContacts(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { contactId } = req.query;

    const deleteContact = await Contacts.findByIdAndDelete(contactId);
    if (deleteContact) {
      res.status(200).json({ message: "Contact deleted!!!!", deleteContact });
    } else {
      res.status(404).json({ error: "Failed to delete contact" });
    }
  } catch (error) {
    res.status(404).json({ error: error });
  }
}
