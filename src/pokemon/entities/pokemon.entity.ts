import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

// Al extenderse de Document nos añade todo lo necesario.
@Schema()
export class Pokemon extends Document{

    // El decorador '@Prop' (propiedades) se usa para asignar propiedades, en este caso nosotros 
    @Prop({
        unique: true,
        index: true,
    })
    name: string;

    @Prop({
        unique: true,
        index: true,
    })
    no: number;

}

// This line of code creates a Mongoose schema for the Pokemon class.
export const PokemonSchema = SchemaFactory.createForClass( Pokemon );

