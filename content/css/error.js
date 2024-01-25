// VALIDERA FÄLT
function validateFormField() {
  let hasErrors = false;

  inputFields.forEach((field) => {
    const errorField = field.previousElementSibling;
    let errorMsg = '';

    if (errorField !== null) {
      errorField.innerHTML = '';
    }

    // VALIDERING AV OLIKA FÄLT
    switch (field.id) {
      case 'zipcode':
        if (field.value.length != 5) {
          errorMsg = 'Fältet är ej korrekt ifylld!';
          hasErrors = true;
        }
        break;
      case 'firstName':
      case 'lastName':
      case 'street':
      case 'city':
      case 'mobile':
      case 'email':
        if (field.value.length === 0) {
          errorMsg = 'Fältet är ej korrekt ifylld!';
          hasErrors = true;
        }
        break;
      case 'ssn':
        const regex = new RegExp(
          /^(19|20)?(\d{6}([-+]|\s)\d{4}|(?!19|20)\d{10})$/,
        );
        if (regex.exec(field.value) === null) {
          errorMsg = 'Felaktig Organisationsnummer/Personnummer!';
          hasErrors = true;
        }
        break;
    }

    if (errorField !== null) {
      errorField.innerHTML = errorMsg;
    }
  });

  // VALIDERING AV SKICKA-KNAPP
  orderBtn.disabled = hasErrors;
  if (hasErrors) {
    orderBtn.removeEventListener('click', sendForm);
  } else {
    orderBtn.addEventListener('click', sendForm);
  }
}
// ÅTERSTÄLL FORMULÄR
function resetFormFields() {
    inputFields.forEach(field => {
      field.value = '';
    });
  
    document.querySelectorAll('.errorField').forEach(field => {
      field.textContent = '';
    });
  
    hideOrderConfirmation();
  }
  // GÖM POPUP ORDER
function hideOrderConfirmation() {
    popup.classList.add('hidden');
    orderSummary.classList.add('hidden');
    popup.removeEventListener('click', hideOrderConfirmation);
    document.querySelector('#closePopup').removeEventListener('click', hideOrderConfirmation);
  }
  