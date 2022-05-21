// Here we go

export default class MyPokemon {

    // Constructor 
    constructor (name) {
        this.pokemonName = name
      }
    
    // Functions
    sayHello () {
        console.log(`Mi pokemon ${this.pokemonName} te saluda!!!`)
    }

    sayMessage (message) {
        console.log(`Mi pokemon ${this.pokemonName} dice: ${message}`)
    }

}