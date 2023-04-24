import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Articulo } from './entities/articulo.entity';
import { ArticuloController } from './articulo.controller';
import { ArticuloService } from './articulo.service';
import { ArticuloImage } from './entities/articulo-image.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Articulo, ArticuloImage])],
  controllers: [ArticuloController],
  providers: [ArticuloService],
})
export class ArticulosModule {}
