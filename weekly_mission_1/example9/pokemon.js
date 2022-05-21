// Here we go

class Pokemon {

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

// CommonJS exports
module.exports = Pokemon