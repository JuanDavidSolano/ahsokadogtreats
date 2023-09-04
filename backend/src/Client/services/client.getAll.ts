import { Client } from "../client.model";
import { ClientRepository } from "../client.repository";

export const getAllClients = (): Promise<Client[]> => {
  const clientRepository = new ClientRepository();
  return clientRepository.getAll();
};
