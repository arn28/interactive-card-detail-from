import { cardNameSanitizer, cardNumberSanitizer } from './inputValidator.js'
import { nameAutocompletion, cardNumberAutocompletion } from './cardAutocomplete.js'
const inputCardholderName = cardForm.cardholderName
const inputCardNumber = cardForm.cardNumber

inputCardholderName.addEventListener('input', ({ target }) => {
  inputCardholderName.value = cardNameSanitizer(target.value)
  nameAutocompletion(inputCardholderName.value)
})

inputCardNumber.addEventListener('input', ({ target }) => {
  inputCardNumber.value = cardNumberSanitizer(target.value)
  cardNumberAutocompletion(inputCardNumber.value)
})
