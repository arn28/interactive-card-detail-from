const deleteBlankSpace = (value) => value.replace(/\s/g, '')
const deleteLetters = (value) => value.replace(/\D/g, '')

export const cardNameSanitizer = (nameInput) =>
  nameInput
    //Deleting numbers
    .replace(/[0-9]/g, '')

export const cardNumberSanitizer = (cardNumberInput) => {
  const cardNumberSanitized = inputNumberSanitizer(cardNumberInput)
  return (
    cardNumberSanitized
      //Creating space every 4 numbers
      .replace(/([0-9]{4})/g, '$1 ')
      //Deleting the last blank space
      .trim()
  )
}

export const inputNumberSanitizer = (value) => {
  const valueWithoutSpace = deleteBlankSpace(value)
  const valueWithoutletters = deleteLetters(valueWithoutSpace)
  return valueWithoutletters
}

export const sanitizeAndAutocomplete = ({ input, sanitizer, autocomplete }) => {
  input.addEventListener('input', ({ target }) => {
    input.value = sanitizer(target.value)
    autocomplete(input.value)
  })
}
