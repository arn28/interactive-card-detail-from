export const nameAutocompletion = (value) => {
  const cardholderNameView = document.getElementById('card-holder')
  cardholderNameView.textContent = value == '' ? 'JANE APPLESEED' : value
}

export const cardNumberAutocompletion = (value) => {
  const cardNumberView = document.getElementById('card-number')
  cardNumberView.textContent = value == '' ? '0000 0000 0000 0000' : value
}

export const yearAutocompletion = (value) => {
  const yearView = document.getElementById('card-year')
  yearView.textContent = value == '' ? '00' : value
}

export const monthAutocompletion = (value) => {
  const monthView = document.getElementById('card-month')
  monthView.textContent = value == '' ? '00' : value
}

export const cvcAutocompletion = (value) => {
  const cvcView = document.getElementById('cvc')
  cvcView.textContent = value == '' ? '000' : value
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
