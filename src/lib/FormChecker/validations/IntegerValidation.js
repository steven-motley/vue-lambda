'use strict'
import Validation from './Validation'
import Field from '../Field'

class IntegerValidation extends Validation {
  constructor () {
    super({ name: 'integer', })
  }

  execute (field) {
    if (field instanceof Field) {
      let re = new RegExp(/^-?[0-9]*$/)
      if (!re.test(field.value)) {
        field.addError(field.name + ' must be an integer.')
      }
    }
  }
}

export default IntegerValidation
