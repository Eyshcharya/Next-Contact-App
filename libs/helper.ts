import { Contact } from "../Utils/types";

export const BASE_URL = "http://localhost:3000/api/";

// GET contacts
export const getContacts = async () => {
  const response = await fetch(`${BASE_URL}/contacts`);
  const data = await response.json();
  return data;
};

// POST contact
export const addContact = async (contact: Contact) => {
  try {
    const Options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(contact),
    };
    const response = await fetch(`${BASE_URL}/contacts`, Options);
    const data = await response.json();
    return data;
  } catch (error) {
    return console.log("error:", error);
  }
};

// PUT contact
export const updateContact = async (contactId: string, contact: Contact) => {
  try {
    const Options = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(contact),
    };

    const response = await fetch(`${BASE_URL}/contacts?${contactId}`, Options);
    const data = await response.json();
    return data;
  } catch (error) {
    return console.log("error:", error);
  }
};

// DELETE contact
export const deleteContact = async (contactId: string) => {
  try {
    const Options = {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    };

    const response = await fetch(
      `${BASE_URL}/contacts?contactId=${contactId}`,
      Options
    );
    const data = await response.json();
    return data;
  } catch (error) {
    return console.log("error:", error);
  }
};
