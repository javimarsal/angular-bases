import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';

console.log(uuid())

import { Character } from '../interfaces/character.interface';

@Injectable({
  providedIn: 'root'
})
export class DbzService {

  public characters: Character[] = [
    {
      id: uuid(),
      name: 'Krillin',
      power: 1000
    },
    {
      id: uuid(),
      name: 'Goku',
      power: 9500
    },
    {
      id: uuid(),
      name: 'Vegeta',
      power: 7500
    }
  ]

  addCharacter (character: Character): void {
    // Agrega el id y copia el resto de propiedades de character con el spread operator (...)
    // De esta manera no nos tenemos que preocupar de si las propiedades de character cambian
    const newCharacter: Character = {
      id: uuid(),
      ...character
    }

    this.characters.push(newCharacter)
  }

  // onDeleteCharacter (index: number) {
  //   this.characters.splice(index, 1)
  // }

  deleteCharacterById (id: string): void {
    this.characters = this.characters.filter(character => character.id !== id)
  }

}
