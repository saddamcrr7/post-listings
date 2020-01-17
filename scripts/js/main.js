"use strict";

var selected = document.querySelectorAll('.c-input-select');
selected.forEach(function (element) {
  var selectedText = element.querySelector('.c-input-select__selected-text');
  var options = element.querySelector('.c-input-select__options');
  var optionItems = options.querySelectorAll('.c-input-select__options-item');
  var filterIcon = element.querySelector('.c-input-select__icon');
  var optionsOpen = 0;

  function toggleOptions() {
    var optionsHeight;
    optionItems.forEach(function (item) {
      return optionsHeight = item.offsetHeight * optionItems.length;
    });

    if (optionsOpen == 0) {
      options.style.height = "".concat(optionsHeight, "px");
      options.style.bottom = "-".concat(optionsHeight, "px");
      filterIcon.style.transform = "rotate(-90deg)";
      optionsOpen = !0;
    } else {
      options.style.height = "0px";
      filterIcon.style.transform = "rotate(90deg)";
      optionsOpen = 0;
    }
  }

  element.addEventListener('click', function () {
    return toggleOptions();
  });
  optionItems.forEach(function (item) {
    item.addEventListener('click', function () {
      toggleOptions();
      if (element.dataset.value == item.dataset.value) return;
      toggleOptions();
      element.dataset.value = item.dataset.value;
      selectedText.innerText = item.innerText;
    });
  });
});