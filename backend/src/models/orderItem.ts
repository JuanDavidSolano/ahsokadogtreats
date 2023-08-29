import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
  ManyToOne,
  JoinColumn,
  OneToOne,
} from "typeorm";
import { Order } from "./order";
import { Product } from "./product";

@Entity()
export class OrderItem {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  quantity!: number;

  @Column()
  orderId!: string;
  @ManyToOne((_type) => Order, (order: Order) => order.orderItems)
  @JoinColumn()
  order!: Order;

  @OneToOne(() => Product)
  @JoinColumn()
  product!: Product;

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;
}
