
import {Client} from "./client";
import {Patient} from "./patient";
export class Animal{
  id: number;
  name: string;
  age: number;
  description: string;
  regDate: Date;
  ill: boolean;
  client: Client;
  patient: Patient;
}
