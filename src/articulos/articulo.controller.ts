import {
  Delete,
  Patch,
  Body,
  Controller,
  Get,
  Param,
  ParseUUIDPipe,
  Post,
} from '@nestjs/common';
import { ArticuloService } from './articulo.service';
import { CreateArticuloDto } from './dto/articulo.dto';

@Controller('articulos')
export class ArticuloController {
  constructor(private readonly articuloServiceRepo: ArticuloService) {}

  @Post()
  create(@Body() articuloDto: CreateArticuloDto) {
    return this.articuloServiceRepo.create(articuloDto);
  }

  // Metodo para visualizar todos tus articulos
  @Get()
  findAll() {
    return this.articuloServiceRepo.findAll();
  }

  //metodo para visualizar un articulos en espesifico
  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.articuloServiceRepo.findOne(id);
  }

  @Delete(':id')
  remove(@Param('id', ParseUUIDPipe) id: string) {
    return this.articuloServiceRepo.remove(id);
  }

  @Patch(':id')
  update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() UpdateArticuloDTO: CreateArticuloDto,
  ) {
    return this.articuloServiceRepo.update(id, UpdateArticuloDTO);
  }
}
