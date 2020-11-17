import { type } from "os";
import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { User } from "./User";

@Entity("images")
class ImageStore extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  src: string;

  @Column()
  name: string;

  @Column({ name: "update_at" })
  updateAt: string;
}

export { ImageStore };
