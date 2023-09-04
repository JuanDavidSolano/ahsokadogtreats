import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
  CreateDateColumn,
  UpdateDateColumn,
  JoinColumn,
} from "typeorm";
import { Order } from "../Order/order.model";
import { User } from "../User/user.model";

@Entity()
export class Client {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  firstName!: string;

  @Column()
  lastName!: string;

  @OneToMany((_type) => Order, (order: Order) => order.client)
  orders!: Array<Order>;

  @Column()
  phoneNumber!: string;

  @Column()
  address!: string;

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;
}
