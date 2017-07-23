import {Message} from "./message";

export class IssueInfo {

  id: number;
  header: string;
  description: string;
  employeeEmail: string;
  status: string;
  requestDate: Date;

  messages: Message[];
}
