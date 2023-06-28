export const nameAutocompletion = (cardholderName) => {
  const cardholderNameView = document.getElementById('card-holder')
  cardholderNameView.textContent = cardholderName == '' ? 'JANE APPLESEED' : cardholderName
}
export const cardNumberAutocompletion = (cardNumber) => {
  const cardNumberView = document.getElementById('card-number')
  cardNumberView.textContent = cardNumber == '' ? '0000 0000 0000 0000' : cardNumber
}
