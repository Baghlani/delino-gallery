import { User } from "./types";

export const getUsers = async (): Promise<User[]> => {
  return await (await fetch("https://jsonplaceholder.typicode.com/users")).json();
};
