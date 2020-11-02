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

  @OneToOne(() => User)
  @JoinColumn()
  userId: User;
}

export { ImageStore };
