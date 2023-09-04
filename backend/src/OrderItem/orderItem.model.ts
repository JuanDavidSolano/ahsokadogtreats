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
import { Order } from "../Order/order.model";
import { Product } from "../Product/product.model";

@Entity()
export class OrderItem {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  quantity!: number;

  @Column()
  orderId!: number;
  @ManyToOne((_type) => Order, (order: Order) => order.orderItems)
  @JoinColumn()
  order!: Order;

  @Column()
  productId!: number;
  @OneToOne(() => Product)
  @JoinColumn()
  product!: Product;

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;
}
