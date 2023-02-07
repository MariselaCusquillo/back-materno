import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Establecimiento {
    @PrimaryGeneratedColumn('uuid')
    id_establecimiento: string;


    @Column({
        type: 'text',
        unique: true,
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
    tipo_atencion: string;

    @Column({
        type: 'text',
        nullable: false,
      })
    eod: string;

    @Column({
        type: 'text',
        nullable: false,
      })
    tipologia: string;

}
