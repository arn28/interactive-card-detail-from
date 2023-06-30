export const inputAutocompletion = ({ value, inputId, defaultValue }) => {
  const inputView = document.getElementById(inputId)
  inputView.textContent = value == '' ? defaultValue : value
}
export const nameAutocompletion = (value) => {
  inputAutocompletion({ value, inputId: 'card-holder', defaultValue: 'JANE APPLESEED' })
}

export const cardNumberAutocompletion = (value) => {
  inputAutocompletion({ value, inputId: 'card-number', defaultValue: '0000 0000 0000 0000' })
}

export const yearAutocompletion = (value) => {
  inputAutocompletion({ value, inputId: 'card-year', defaultValue: '00' })
}

export const monthAutocompletion = (value) => {
  inputAutocompletion({ value, inputId: 'card-month', defaultValue: '00' })
}

export const cvcAutocompletion = (value) => {
  inputAutocompletion({ value, inputId: 'cvc', defaultValue: '000' })
}

export const toggleErrorMessage = (input, isValid, errorMessage) => {
  const errorHelper = input.parentNode.getElementsByClassName('errorMessage')[0]
  if (isValid) {
    input.classList.remove('error')
    errorHelper.textContent = ''
  } else {
    input.classList.add('error')
    errorHelper.textContent = errorMessage
  }
  return isValid
}

export const hiddeCartDetails = () => {
  const cardDetailSection = document.getElementsByClassName('state-start')[0]
  console.log(cardDetailSection)
  cardDetailSection.classList.add('hidden')
}

export const showThankYouPanel = () => {
  const thankYouSection = document.getElementsByClassName('thank-you-state')[0]
  thankYouSection.classList.remove('hidden')
}
