import { Client } from "../../models";
import { ClientRepository } from "../client.repository";

export const getAllClients = (): Promise<Client[]> => {
  const clientRepository = new ClientRepository();
  return clientRepository.getAll();
};
