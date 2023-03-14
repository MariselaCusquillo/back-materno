import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Indicador1 {

    @PrimaryGeneratedColumn('uuid')
    id_indicador1: string;

    
    @Column({
        type: 'text',
        nullable: false,
      })
    zona: string;

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
    establecimiento: string;


    @Column({
        type: 'text',
        nullable: false,
      })
    fecha: string;


    @Column({
        type: 'text',
        nullable: false,
      })
    mes: string;

    @Column({
        type: 'text',
        nullable: false,
      })
    responsable: string;

    @Column({
        type: 'text',
        nullable: false,
      })
    fonendoscopio: string;

    
    @Column({
        type: 'text',
        nullable: false,
      })
    tensiometro: string;


    @Column({
        type: 'text',
        nullable: false,
      })
    cinta: string;


    @Column({
        type: 'text',
        nullable: false,
      })
    balanza: string;


    @Column({
        type: 'text',
        nullable: false,
      })
    termometro: string; 

    @Column({
        type: 'text',
        nullable: false,
      })
    promedio: string; 



    @Column({
        type: 'text',
        nullable: false,
      })
    lavado: string; 

    @Column({
        type: 'text',
        nullable: false,
      })
    basureros: string; 

    @Column({
        type: 'text',
        nullable: false,
      })
    fonendoscopioGine: string; 

    @Column({
        type: 'text',
        nullable: false,
      })
    tensiometroGine: string; 

    @Column({
        type: 'text',
        nullable: false,
      })
    termometroGine: string; 

    @Column({
        type: 'text',
        nullable: false,
      })
    lampara: string; 

    @Column({
        type: 'text',
        nullable: false,
      })
    camilla: string; 

    @Column({
        type: 'text',
        nullable: false,
      })
    corneta: string; 

    @Column({
        type: 'text',
        nullable: false,
      })
    cintaGine: string; 

    @Column({
        type: 'text',
        nullable: false,
      })
    papelera: string; 

    @Column({
        type: 'text',
        nullable: false,
      })
    guantes: string; 


    @Column({
        type: 'text',
        nullable: false,
      })
    soluciones: string; 

    @Column({
        type: 'text',
        nullable: false,
      })
    tirillas: string; 

    @Column({
        type: 'text',
        nullable: false,
      })
    especulos: string; 

    @Column({
        type: 'text',
        nullable: false,
      })
    espatulas: string; 

    @Column({
        type: 'text',
        nullable: false,
      })
    solucionesGine: string; 

    @Column({
        type: 'text',
        nullable: false,
      })
    hierro: string; 

    @Column({
        type: 'text',
        nullable: false,
      })
    promedioGine: string; 


    @Column({
        type: 'text',
        nullable: false,
      })
    numerador: string; 

    @Column({
        type: 'text',
        nullable: false,
      })
    denominador: string; 

    @Column({
        type: 'text',
        nullable: false,
      })
    promedioGeneral: string; 
        
}


