export interface ResponseFuncs {
  GET?: Function;
  POST?: Function;
  PUT?: Function;
  DELETE?: Function;
}
export interface Contact {
  _id?: number;
  name: string;
  email: string;
  phone: string;
  gender: string;
}
