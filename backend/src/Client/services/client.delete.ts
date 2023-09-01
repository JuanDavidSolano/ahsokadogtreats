import { ClientRepository } from "../client.repository";

export const deleteClient = async (clientId: string): Promise<string> => {
  const clientRepository = new ClientRepository();
  const result = await clientRepository.delete(parseInt(clientId));
  if (result.affected && result.affected > 0) return "Client deleted";
  return "Problem during deletion of client";
};
