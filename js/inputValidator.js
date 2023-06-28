export const cardNameSanitizer = (nameInput) =>
  nameInput
    //Deleting numbers
    .replace(/[0-9]/g, '')

export const cardNumberSanitizer = (cardNumberInput) =>
  cardNumberInput
    //Deleting blank space
    .replace(/\s/g, '')
    //Deleting letters
    .replace(/\D/g, '')
    //Creating space every 4 numbers
    .replace(/([0-9]{4})/g, '$1 ')
    //Deleting the last blank space
    .trim()
