import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { ArticuloImage } from './articulo-image.entity';

@Entity()
export class Articulo {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'text' })
  articulo: string;

  @Column({ type: 'text' })
  descripcion: string;

  @Column({ type: 'numeric' })
  precio: number;

  @Column({ type: 'numeric' })
  stock_inicial: number;

  //relaciones
  @OneToMany(() => ArticuloImage, (articuloImage) => articuloImage.articulo, {
    cascade: true,
  })
  images?: ArticuloImage[];
}
