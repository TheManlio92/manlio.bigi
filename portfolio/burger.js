function toggleOptions(optionsClass) {
  var optionsList = document.querySelector('.' + optionsClass);
  var currentDisplay = window.getComputedStyle(optionsList).display;
  if (currentDisplay === 'none') {
    optionsList.style.display = 'block';
  } else {
    optionsList.style.display = 'none';
  }
}

function selectOption(option, category) {
  var selectedOption = option.textContent;
  var selectedOptionElement = option.parentNode.parentNode.querySelector('.selected-option');
  selectedOptionElement.textContent = selectedOption;
  toggleOptions(category + '-options');
}

function toggleAllOptions(checkbox) {
  var optionsList = checkbox.parentNode.parentNode.querySelectorAll('.options-list input[type="checkbox"]');
  var isChecked = checkbox.checked;

  for (var i = 0; i < optionsList.length; i++) {
    optionsList[i].checked = isChecked;
  }
}

function getSelectedOptions(optionsClass) {
  var selectedOptions = [];
  var optionsList = document.querySelectorAll('.' + optionsClass + ' input[type="checkbox"]');

  for (var i = 0; i < optionsList.length; i++) {
    if (optionsList[i].checked) {
      selectedOptions.push(optionsList[i].parentNode.textContent.trim());
    }
  }

  return selectedOptions;
}

function handleOptionClick(option) {
  var checkbox = option.querySelector('input[type="checkbox"]');
  checkbox.checked = !checkbox.checked;
}

function submitOrder() {
  var submitButton = document.getElementById("submit-button");
  var message = document.getElementById("message");
  var choices = document.getElementById("choices");
  var confirmButton = document.getElementById("confirm-button");

  submitButton.disabled = true; // Disabilita il pulsante dopo il clic
  message.textContent = "We are making your burger!"; // Mostra il messaggio
  choices.textContent = ""; // Resetta le scelte precedenti

  // Ottieni le scelte di bun, meat, sauce e supplements selezionate
  var bunOption = document.querySelector('.bun-options .selected-option').innerText;
  var meatOption = document.querySelector('.meat-options .selected-option').innerText;
  var sauceOption = document.querySelector('.sauce-options .selected-option').innerText;
  var supplementsOptions = getSelectedOptions('supplements-options');

  // Mostra le scelte
  choices.innerHTML = "<strong>Selected Choices:</strong><br> Bun: " + bunOption + "<br> Meat: " + meatOption + "<br> Sauce: " + sauceOption + "<br> Supplements: " + supplementsOptions.join(", ");

  // Mostra il pulsante Confirm
  confirmButton.style.display = "inline-block";
}

function confirmOrder() {
  var message = document.getElementById("message");
  var confirmButton = document.getElementById("confirm-button");

  message.textContent = "Your order has been confirmed!";
  confirmButton.style.display = "none";
}
