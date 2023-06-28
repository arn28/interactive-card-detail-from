//Object with properties of Form Validation
var propValidation = {
  form: cardForm,
  inputName: cardForm.cardholderName,
  name: document.getElementById('card-holder'),
  inputCardNumber: cardForm.cardNumber,
  cardNumber: document.getElementById('card-number'),
  inputMonth: cardForm.expMonth,
  month: document.getElementById('card-month'),
  inputYear: cardForm.expYear,
  year: document.getElementById('card-year'),
  inputCvc: cardForm.cvc,
  cvc: document.getElementById('cvc'),
}

//Methods with properties of Form Validation
var metValidation = {
  start: function () {
    propValidation.inputCardNumber.addEventListener('input', metValidation.inputCardNumber)
    propValidation.inputName.addEventListener('input', metValidation.inputName)
    propValidation.inputYear.addEventListener('input', metValidation.inputYear)
    propValidation.inputMonth.addEventListener('input', metValidation.inputMonth)
    propValidation.inputCvc.addEventListener('input', metValidation.inputCvc)
    // propValidation.form.addEventListener('submit', metValidation.submitValidation)
  },

  inputCardNumber: function (e) {
    propValidation.inputCardNumber.value = e.target.value
      //Deleting blank space
      .replace(/\s/g, '')
      //Deleting letters
      .replace(/\D/g, '')
      //Creating space every 4 numbers
      .replace(/([0-9]{4})/g, '$1 ')
      //Deleting the last blank space
      .trim()

    //Automatically completing the Card Number on the card Image
    propValidation.cardNumber.textContent = propValidation.inputCardNumber.value
    if (propValidation.inputCardNumber.value == '') {
      propValidation.cardNumber.textContent = '0000 0000 0000 0000'
    }
  },

  inputName: function (e) {
    propValidation.inputName.value = e.target.value
      //Deleting numbers
      .replace(/[0-9]/g, '')

    //Automatically completing the Cardholder Name on the card Image
    propValidation.name.textContent = propValidation.inputName.value
    if (propValidation.inputName.value == '') {
      propValidation.name.textContent = 'JANE APPLESEED'
    }
  },

  inputYear: function (e) {
    propValidation.inputYear.value = e.target.value
      //Deleting blank space
      .replace(/\s/g, '')
      //Deleting letters
      .replace(/\D/g, '')

    //Automatically completing the Card Year on the card Image
    propValidation.year.textContent = propValidation.inputYear.value
    if (propValidation.inputYear.value == '') {
      propValidation.year.textContent = '00'
    }
  },

  inputMonth: function (e) {
    propValidation.inputMonth.value = e.target.value
      //Deleting blank space
      .replace(/\s/g, '')
      //Deleting letters
      .replace(/\D/g, '')

    //Automatically completing the Card Month on the card Image
    propValidation.month.textContent = propValidation.inputMonth.value
    if (propValidation.inputMonth.value == '') {
      propValidation.month.textContent = '00'
    }
  },

  inputCvc: function (e) {
    propValidation.inputCvc.value = e.target.value
      //Deleting blank space
      .replace(/\s/g, '')
      //Deleting letters
      .replace(/\D/g, '')

    //Automatically completing the Card Month on the card Image
    propValidation.cvc.textContent = propValidation.inputCvc.value
    if (propValidation.inputCvc.value == '') {
      propValidation.cvc.textContent = '000'
    }
  },

  // submitValidation: function (e) {
  //     for (let i = 0; i < this.elements.length; i++) {
  //         this.elements[i].className = '';
  //         if (this.elements[i].value == '') {
  //             e.preventDefault();
  //             this.elements[i].className = 'error';
  //             this.elements[i].parentNode.innerHTML += '<p class="errorMessage">Can\'t be blank</p>'
  //         }
  //         e.preventDefault();

  //     }
  //     e.preventDefault();
  //     // console.log(this.elements[0].value);

  // }

  // cardForm.cardNumber.parentNode.children[cardForm.cardNumber.parentNode.children.length-1].tagName == 'P'
}

metValidation.start()
