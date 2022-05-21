/*
  export default nos permite exportar esta clase e importara

  import MyLogger from './logger.js'
*/

export default class Logger {
    constructor (name) {
      this.name = name
      this.time = new Date() // adding a timestamp, for the banter
    }
  
    log (message) {
      console.log(`[${this.name}] ${message}`)
    }

    date() {
        console.log(`The current time is ${this.time.getHours()}:${this.time.getMinutes()}`)
        console.log(`Today is ${this.time.getFullYear()}/${this.time.getMonth()}/${this.time.getDate()}`)
    }
  }