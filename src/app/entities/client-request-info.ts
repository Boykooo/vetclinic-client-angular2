import {Message} from "./message";

export class ClientRequestInfo {

  header: string;
  description: string;
  employeeEmail: string;
  requestDate: string;

  messages: Message[];
}
