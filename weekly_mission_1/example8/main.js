// Importando la clase MyLogger
import MyLogger from './logger.js'

const logger = new MyLogger('info') // Calling this object "info"
logger.log('Hello World')

// My experiments
logger.log(`${logger.time}`)
logger.date()