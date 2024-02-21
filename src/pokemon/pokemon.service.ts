import { Injectable } from '@nestjs/common';
import { CreatePokemonDto } from './dto/create-pokemon.dto';
import { UpdatePokemonDto } from './dto/update-pokemon.dto';
import { Model } from 'mongoose';
import { Pokemon } from './entities/pokemon.entity';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class PokemonService {

  constructor(
    // Este decorador es usado para injectar modelos en el el servicio.
    @InjectModel(Pokemon.name)
    private readonly pokemonModel: Model<Pokemon>
  ){}

  // Crear objetos en bases de datos es una operacion asincrona.
  async create(createPokemonDto: CreatePokemonDto) {

    // Escribe el nombre recibido en minusculas.
    createPokemonDto.name = createPokemonDto.name.toLocaleLowerCase();

    // Espera a que 
    const pokemon = await this.pokemonModel.create(createPokemonDto)

    return pokemon;
  }

  findAll() {
    return `This action returns all pokemon`;
  }

  findOne(id: number) {
    return `This action returns a #${id} pokemon`;
  }

  update(id: number, updatePokemonDto: UpdatePokemonDto) {
    return `This action updates a #${id} pokemon`;
  }

  remove(id: number) {
    return `This action removes a #${id} pokemon`;
  }
}
