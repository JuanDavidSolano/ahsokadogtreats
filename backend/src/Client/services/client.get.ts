import { Client } from "../client.model";
import { ClientRepository } from "../client.repository";

export const getClient = (clientId: string): Promise<Client | null> => {
  const clientRepository = new ClientRepository();
  return clientRepository.get(parseInt(clientId));
};
