import { Client } from "../client.model";
import { IClient } from "../interfaces/client.interface";
import { ClientRepository } from "../client.repository";

export const createClient = (client: IClient): Promise<Client> => {
  const clientRepository = new ClientRepository();
  return clientRepository.create(client);
};
