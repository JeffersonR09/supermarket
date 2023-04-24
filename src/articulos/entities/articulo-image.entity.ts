import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Articulo } from './articulo.entity';

@Entity()
export class ArticuloImage {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  url: string;

  //relacion de mucho a uno
  //muchas imagenes puedan ser de un producto
  @ManyToOne(() => Articulo, (articulo) => articulo.images)
  articulo: Articulo;
}
