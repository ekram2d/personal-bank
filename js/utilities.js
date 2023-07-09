function getInputFieldValueById(inputFieldId) {
  const inputField = document.getElementById(inputFieldId);
  const inputFieldValueString = inputField.value;
  inputField.value = "";
  if (inputFieldValueString) {
    return parseFloat((inputFieldValueString));
  }
  else {
    return NaN;
  }
}

function getTextElementValueById(elementId) {
  const textElement = document.getElementById(elementId);
  const textElementValueString = textElement.innerText;
  //console.log(textElementValueString);

  const textElementValue = parseFloat(textElementValueString);
  //console.log(textElementValue);
  return textElementValue;

}

function setTextElementValueById(elementId, newValue) {
  const textElement = document.getElementById(elementId);
  textElement.innerText = newValue;
}
