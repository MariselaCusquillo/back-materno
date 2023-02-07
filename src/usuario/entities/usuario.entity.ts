import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Usuario {

  @PrimaryGeneratedColumn('uuid')
  id_usuario: string;

  @Column({
    type: 'text',
    unique: true,
    nullable: false,
  })
  user: string;

  @Column({
    type: 'text',
    nullable: false,
    select: false,
  })
  password: string;

  @Column({
    type: 'text',
    nullable: false,
  })
  tipologia: string;

  @Column({
    type: 'text',
    nullable: false,
  })
  tipo_usuario: string;


  @Column({
    type: 'text',
    nullable: false,
  })
  tipo_atencion: string;

  @Column({
    type: 'text',
    nullable: false,
  })
  establecimiento: string;

  @Column({
    type: 'text',
    nullable: false,
  })
  provincia: string;

  @Column({
    type: 'text',
    nullable: false,
  })
  distrito: string;


  @Column({
    type: 'text',
    nullable: false,
  })
  role: string;
  
}
