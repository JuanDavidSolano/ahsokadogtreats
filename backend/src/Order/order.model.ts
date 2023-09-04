import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
  JoinColumn,
  OneToMany,
} from "typeorm";
import { Client } from "../Client/client.model";
import { OrderItem } from "../OrderItem/orderItem.model";

@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  id!: number;

  @OneToMany((_type) => OrderItem, (orderItem: OrderItem) => orderItem.order)
  orderItems!: Array<OrderItem>;

  @Column({ nullable: true })
  clientId!: number;
  @ManyToOne((_type) => Client, (client: Client) => client.orders)
  @JoinColumn()
  client!: Client;

  @Column()
  payMethod!: string;

  @Column()
  address!: string;

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;
}
