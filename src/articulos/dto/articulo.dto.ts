import {
  IsString,
  IsNotEmpty,
  MinLength,
  IsNumber,
  IsArray,
  IsOptional,
} from 'class-validator';

export class CreateArticuloDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(5)
  articulo: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(5)
  descripcion: string;

  @IsNumber()
  @IsNotEmpty()
  precio: number;

  @IsNumber()
  @IsNotEmpty()
  stock_inicial: number;

  @IsString({ each: true })
  @IsArray()
  @IsOptional()
  images?: string[];
}
