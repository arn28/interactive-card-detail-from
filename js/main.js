import {
  cardNameSanitizer,
  cardNumberSanitizer,
  inputNumberSanitizer,
  sanitizeAndAutocomplete,
} from './inputSanitizer.js'
import {
  nameAutocompletion,
  cardNumberAutocompletion,
  monthAutocompletion,
  yearAutocompletion,
  cvcAutocompletion,
  hiddeCartDetails,
  showThankYouPanel,
} from './cardAutocomplete.js'
import {
  hasValue,
  inputValidator,
  isAllFieldComplete,
  isAllFieldValid,
  isCardNumberLengthCorrect,
  isCvcLengthCorrect,
} from './formValidation.js'
const cardholderNameInput = cardForm.cardholderName
const cardNumberInput = cardForm.cardNumber
const expMonthInput = cardForm.expMonth
const expYearInput = cardForm.expYear
const cvcInput = cardForm.cvc
const submitButton = cardForm.submit

const errorMessage = {
  BLANK: `Can't be blank`,
  FORMAT: `Wrong format`,
}

sanitizeAndAutocomplete({
  input: cardholderNameInput,
  sanitizer: cardNameSanitizer,
  autocomplete: nameAutocompletion,
})

inputValidator({
  input: cardholderNameInput,
  validator: hasValue,
  errorMessage: errorMessage.BLANK,
})

sanitizeAndAutocomplete({
  input: cardNumberInput,
  sanitizer: cardNumberSanitizer,
  autocomplete: cardNumberAutocompletion,
})

cardNumberInput.addEventListener(
  'blur',
  () => {
    cardNumberInput.value.length > 0
      ? inputValidator({
          input: cardNumberInput,
          validator: isCardNumberLengthCorrect,
          errorMessage: errorMessage.FORMAT,
        })
      : inputValidator({
          input: cardNumberInput,
          validator: hasValue,
          errorMessage: errorMessage.BLANK,
        })
  },
  true,
)

sanitizeAndAutocomplete({
  input: expMonthInput,
  sanitizer: inputNumberSanitizer,
  autocomplete: monthAutocompletion,
})

inputValidator({
  input: expMonthInput,
  validator: hasValue,
  errorMessage: errorMessage.BLANK,
})

sanitizeAndAutocomplete({
  input: expYearInput,
  sanitizer: inputNumberSanitizer,
  autocomplete: yearAutocompletion,
})

inputValidator({
  input: expYearInput,
  validator: hasValue,
  errorMessage: errorMessage.BLANK,
})

sanitizeAndAutocomplete({
  input: cvcInput,
  sanitizer: inputNumberSanitizer,
  autocomplete: cvcAutocompletion,
})

cvcInput.addEventListener(
  'blur',
  () => {
    cvcInput.value.length > 0
      ? inputValidator({
          input: cvcInput,
          validator: isCvcLengthCorrect,
          errorMessage: errorMessage.FORMAT,
        })
      : inputValidator({
          input: cvcInput,
          validator: hasValue,
          errorMessage: errorMessage.BLANK,
        })
  },
  true,
)

submitButton.addEventListener('click', (e) => {
  const cardPayload = {
    cardholderName: cardholderNameInput.value,
    cardNumber: cardNumberInput.value,
    expMonth: expMonthInput.value,
    expYear: expYearInput.value,
    cvc: cvcInput.value,
  }
  e.preventDefault()
  if (isAllFieldComplete() && isAllFieldValid()) {
    console.log('cardPayload =>', cardPayload)
    hiddeCartDetails()
    showThankYouPanel()
  }
})
