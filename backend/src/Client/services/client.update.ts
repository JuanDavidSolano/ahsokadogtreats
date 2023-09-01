import { Client } from "../../models";
import { IClient } from "../interfaces/client.interface";
import { ClientRepository } from "../client.repository";

export const updateClient = async (
  clientId: string,
  body: Partial<IClient>,
): Promise<string> => {
  const clientRepository = new ClientRepository();

  return clientRepository.update(parseInt(clientId), body);
};
