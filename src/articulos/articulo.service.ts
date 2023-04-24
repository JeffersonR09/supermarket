import { Get, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Articulo } from './entities/articulo.entity';
import { CreateArticuloDto } from './dto/articulo.dto';
import { ArticuloImage } from './entities/articulo-image.entity';

@Injectable()
export class ArticuloService {
  constructor(
    @InjectRepository(Articulo)
    private readonly articuloRepository: Repository<Articulo>,
    @InjectRepository(ArticuloImage)
    private readonly imageRepository: Repository<ArticuloImage>,
  ) {}

  async create(articuloDto: CreateArticuloDto) {
    const { images = [], ...detalleArticulo } = articuloDto;
    const articulo = this.articuloRepository.create({
      ...detalleArticulo,
      images: images.map((image) =>
        this.imageRepository.create({ url: image }),
      ),
    });
    await this.articuloRepository.save(articulo);
    return articulo;
  }

  // Metodo para visualizar todos tus articulo
  findAll() {
    return this.articuloRepository.find();
  }

  //metodo para visualizar un articulo en espesifico
  findOne(id: string) {
    return this.articuloRepository.findOneBy({ id });
  }

  //remover un articulo
  async remove(id: string) {
    const articulo = await this.findOne(id);
    await this.articuloRepository.remove(articulo);
    return 'articulo eliminado';
  }

  async update(id: string, cambios: CreateArticuloDto) {
    const articulo = await this.articuloRepository.preload({
      id: id,
      ...cambios,
      images: [],
    });
    await this.articuloRepository.save(articulo);
    return articulo;
  }
}
