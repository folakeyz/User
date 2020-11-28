import { WebPartContext } from "@microsoft/sp-webpart-base"; 
export interface IUserProps {
  description: string;
  Name:string;
  Title:string;
  File:string;
  Email:string;
  context:WebPartContext; 
}
