import {Message} from "./message";

export class IssueInfo {

  issueId: number;
  header: string;
  description: string;
  employeeEmail: string;
  status: string;
  requestDate: Date;

  messages: Message[];
}
