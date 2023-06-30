import { toggleErrorMessage } from './cardAutocomplete.js'

export const hasValue = (value) => value !== ''

export const isLenghtCorrect = (value, length) => value.length === length

export const isCardNumberLengthCorrect = (cardNumber) => isLenghtCorrect(cardNumber, 19)

export const isCvcLengthCorrect = (value) => isLenghtCorrect(value, 3)

export const inputValidator = ({ input, validator, errorMessage }) => {
  input.addEventListener('blur', ({ target }) => {
    return toggleErrorMessage(input, validator(target.value), errorMessage)
  })
}

export const isAllFieldComplete = () => {
  for (const iterator of cardForm.getElementsByTagName('INPUT')) {
    if (iterator.type !== 'submit' && iterator.value === '') {
      return false
    }
  }
  return true
}

export const isAllFieldValid = () => {
  for (const iterator of cardForm.getElementsByClassName('errorMessage')) {
    if (iterator.innerText.trim() !== '') {
      return false
    }
  }
  return true
}
