import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  OneToOne,
  JoinColumn,
} from "typeorm";
import { ImageStore } from "./ImageStore";

@Entity("user")
class User extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ name: "first_name", nullable: true })
  firstName: string;

  @Column({ name: "last_name", nullable: true })
  lastName: string;

  @Column({ name: "email" })
  email: string;

  @Column({ name: "username" })
  username: string;

  @Column({ name: "password" })
  password: string;

  @Column({ name: "salt" })
  salt: string;

  @Column({ name: "bio",nullable:true })
  bio: string;

  @Column({ name: "age", nullable: true })
  age: string;

  @Column({ name: "refresh-token", nullable: true })
  refreshToken: string;

  @OneToOne(() => ImageStore)
  @JoinColumn()
  profileImage: ImageStore;
}

export { User };
