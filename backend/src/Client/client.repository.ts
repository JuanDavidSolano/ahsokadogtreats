import { DeleteResult } from "typeorm";
import dataSource from "../config/database";
import { Client } from "../models";
import { IClient } from "./interfaces/client.interface";

export class ClientRepository {
  clientRepository = dataSource.getRepository(Client);

  async create(client: IClient): Promise<Client> {
    return await this.clientRepository.save(client);
  }

  async get(clientId: number): Promise<Client | null> {
    return await this.clientRepository.findOneBy({ id: clientId });
  }

  async getAll(): Promise<Client[]> {
    return await this.clientRepository.find();
  }

  async update(clientId: number, body: Partial<IClient>): Promise<string> {
    const client = await this.clientRepository.findOneBy({ id: clientId });
    if (client) {
      this.clientRepository.merge(client, body);
      const result = await this.clientRepository.save(client);

      return result ? "Client updated" : "Error during updating process";
    } else {
      return "Error during updating process";
    }
  }

  async delete(clientId: number): Promise<DeleteResult> {
    return this.clientRepository.delete(clientId);
  }
}
