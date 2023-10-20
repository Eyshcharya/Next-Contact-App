export interface Contact {
  name: string;
  email: string;
  phone: string;
  gender: string;
}
export type ContactObject = Contact & {
  _id: string;
};
