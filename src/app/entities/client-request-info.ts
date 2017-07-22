import {Message} from "./message";

export class ClientRequestInfo {

  header: string;
  description: string;
  employeeEmail: string;
  requestDate: Date;

  messages: Message[];
}
