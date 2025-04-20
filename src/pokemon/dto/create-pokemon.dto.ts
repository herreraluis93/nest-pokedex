import { IsInt, IsPositive, IsString, Min, MinLength } from "class-validator";

export class CreatePokemonDto {

    @IsInt({message: "La varialbe no debe ser un entero"})
    @IsPositive({message: "Debe ser un número positivo"})
    @Min(1, {message: "El mínimo número debe ser 1"})
    no: number;

    @IsString({message: "La variable name debe contener un string"})
    @MinLength(1, {message: "La longitud mínima debe ser 1"})
    name: string;
}
