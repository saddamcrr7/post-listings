"use strict";

var selected = document.querySelectorAll('.c-input-select');

if (selected) {
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
        options.style.overflow = "visible";
        filterIcon.style.transform = "rotate(-180deg) translateY(50%)";
        optionsOpen = !0;
      } else {
        options.style.height = "0px";
        filterIcon.style.transform = "rotate(0deg) translateY(-50%)";
        options.style.overflow = "hidden";
        optionsOpen = 0;
      }
    }

    element.addEventListener('click', function () {
      return toggleOptions();
    });
    optionItems.forEach(function (item) {
      var subOptionItems = item.querySelectorAll('.c-input-select__options-sub-item');

      if (subOptionItems.length > 1) {
        subOptionItems.forEach(function (subItem) {
          subItem.addEventListener('click', function () {
            toggleOptions();
            if (element.dataset.value == subItem.dataset.value) return;
            toggleOptions();
            element.dataset.value = subItem.dataset.value;
            selectedText.innerText = subItem.innerText;
          });
        });
      } else {
        item.addEventListener('click', function () {
          toggleOptions();
          if (element.dataset.value == item.dataset.value) return;
          toggleOptions();
          element.dataset.value = item.dataset.value;
          selectedText.innerText = item.innerText;
        });
      }
    });
  });
}

var productsSlider = new Swiper('.o-products-slider__container', {
  slidesPerView: 6,
  spaceBetween: 28.5,
  wrapperClass: 'o-products-slider__wrapper',
  slideClass: 'o-products-slider__item ',
  slideActiveClass: 'o-products-slider__item--slide-active',
  navigation: {
    nextEl: '.o-products-slider__arrow--next',
    prevEl: '.o-products-slider__arrow--prev'
  },
  breakpoints: {
    1200: {
      spaceBetween: 10,
      slidesPerView: 'auto'
    }
  }
});
var productView = document.querySelector('.o-product-view');

if (productView) {
  var productViewContianer = productView.querySelector('.o-product-view__container');
  var btnList = productView.querySelector('.o-product-view__style-list');
  var btnGrid = productView.querySelector('.o-product-view__style-grid');
  var products = productView.querySelectorAll('.c-product');
  btnList.addEventListener('click', function () {
    products = productView.querySelectorAll('.c-product');
    if (!products) return;
    products.forEach(function (product) {
      product.classList.remove('c-product--medium');
      product.classList.add('c-product--wide');
      productViewContianer.classList.remove('o-product-showcase__row');
    });
  });
  btnGrid.addEventListener('click', function () {
    products = productView.querySelectorAll('.c-product');
    if (!products) return;
    products.forEach(function (product) {
      productViewContianer.classList.add('o-product-showcase__row');
      product.classList.remove('c-product--wide');
      product.classList.add('c-product--medium');
    });
  });
}

var chartCanvas = document.querySelector('.o-single-product__chart-canvas')

if (chartCanvas) {
  new Chart(chartCanvas, {
    type: 'line',
    data: {
      labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
      datasets: [{
        data: [90, 100, 40, 70, 90, 11, 90, 5, 110, 100, 90, 120, 50, 100, 10, 100, 90, 120, 90, 100, 50, 100, 90, 120, ],
        label: "Africa",
        borderColor: "#3e95cd",
        fill: false
      }]
    },
    layout: {

    },
    options: {
      title: {
        // display: false,
      },

      legend: {
        display: false
      },

      scales: {
        xAxes: [{
          gridLines: {
            // display: false
          },
          ticks: {
            // display: false,
            beginAtZero:true

          },
        }],
        yAxes: [{
          gridLines: {
            // display: false
          },
          ticks: {
            // display: false
            beginAtZero:true
          }
        }]
      },

    }
  });
}