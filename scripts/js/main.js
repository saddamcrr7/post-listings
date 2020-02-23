"use strict";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var navLinx = document.querySelector('.c-nav__links');
var toggler = document.querySelector('.c-mobile-nav-toggler');
var isNavOpen = 0;
toggler.addEventListener('click', function () {
  if (isNavOpen == 0) {
    navLinx.classList.add('is-active');
    toggler.classList.add('is-active');
    isNavOpen = !0;
  } else {
    navLinx.classList.remove('is-active');
    toggler.classList.remove('is-active');
    isNavOpen = 0;
  }
});
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

    element.addEventListener('click', function (e) {
      var tars = e.target.classList;
      tars.forEach(function (tar) {
        if (!tar.indexOf("has-sub-item") !== -1) {
          toggleOptions();
        }
      });
    });
    element.addEventListener('mouseleave', function () {
      if (optionsOpen) {
        return toggleOptions();
      }
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
  slidesPerView: 'auto',
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
      spaceBetween: 10
    }
  }
});
var productViews = document.querySelectorAll('.o-product-view');

if (productViews) {
  productViews.forEach(function (productView) {
    var productViewContianer = productView.querySelector('.o-product-view__container');
    var btnList = productView.querySelector('.o-product-view__style-list');
    var btnGrid = productView.querySelector('.o-product-view__style-grid');
    var products = productView.querySelectorAll('.c-product');

    if (btnList && btnGrid) {
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
  });
}

var chartCanvas = document.querySelector('.o-single-product__chart-canvas');

if (chartCanvas) {
  var _ref;

  new Chart(chartCanvas, {
    type: 'line',
    data: {
      labels: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6", "Day 7", "Day 8", "Day 9", "Day 10", "Day 11", "Day 12", "Day 13", "Day 14"],
      datasets: [(_ref = {
        data: [0, 20, 40, 70, 90, 11, 90, 5, 110, 100, 90, 118, 50, 100, 10, 100, 90, 110, 90, 100, 50, 100, 90, 109],
        label: "Views",
        borderColor: "#3e95cd",
        fill: false,
        borderWidth: 2,
        backgroundColor: "transparent"
      }, _defineProperty(_ref, "borderColor", "#707070"), _defineProperty(_ref, "pointBackgroundColor", "#FEC200"), _defineProperty(_ref, "pointBorderColor", '#FEC200'), _defineProperty(_ref, "pointHoverRadius", 6), _defineProperty(_ref, "pointRadius", 6), _ref)]
    },
    layout: {},
    options: {
      responsive: true,
      maintainAspectRatio: false,
      legend: {
        display: false
      },
      scales: {
        xAxes: [{
          gridLines: {
            display: false
          },
          ticks: {
            display: false
          }
        }],
        yAxes: [{
          gridLines: {
            display: false
          },
          ticks: {
            display: false,
            beginAtZero: true
          }
        }]
      }
    }
  });
} // modal


function modal(openElm, modalElm) {
  var body = document.querySelector('body');
  var modal = document.querySelector("".concat(modalElm));

  if (modal) {
    var toggleModal = function toggleModal(bol) {
      if (bol) {
        modal.classList.add('is-active');
        body.classList.add('is-modal-open');
      } else {
        modal.classList.remove('is-active');
        body.classList.remove('is-modal-open');
      }
    };

    var openBtn = document.querySelector("".concat(openElm));
    var closeBtn = modal.querySelector('.o-modal__close');
    openBtn.addEventListener('click', function () {
      return toggleModal(true);
    });
    closeBtn.addEventListener('click', function () {
      return toggleModal(false);
    });
  }
}

modal('.o-single-product__extend-btn', '.o-modal--boost-listing');
var pricePanels = document.querySelectorAll('.c-price-panel');
pricePanels.forEach(function (pricePanel) {
  var pricePanelBtn = pricePanel.querySelector('.c-price-panel__btn');
  pricePanelBtn.addEventListener('click', function () {
    pricePanels.forEach(function (pricePanel) {
      return pricePanel.classList.remove('is-active');
    });
    pricePanel.classList.add('is-active');
  });
});
var menus = document.querySelectorAll('.c-menu');
menus.forEach(function (menu, i) {
  var menuBtn = menu.querySelector('.c-menu__btn');
  var menuOptions = menu.querySelector('.c-menu__options');
  var menuOpen = 0;
  menuBtn.addEventListener('click', function () {
    if (menuOpen == 0) {
      menuOpen = !0;
      menuOptions.style.opacity = '1';
      menuOptions.style.pointerEvents = 'auto';
    } else {
      menuOpen = 0;
      menuOptions.style.opacity = '0';
      menuOptions.style.pointerEvents = 'none';
    }
  });
  menu.addEventListener('mouseleave', function () {
    menuOpen = 0;
    menuOptions.style.opacity = '0';
    menuOptions.style.pointerEvents = 'none';
  });
});
var productGallery = document.querySelector('.o-product-gallery__row');

if (productGallery) {
  lightGallery(productGallery, {
    selector: ".o-product-gallery__itemImageLink",
    download: !1
  });
}

var tagsContainers = document.querySelectorAll('.o-siderbar-showcase--tag');

if (tagsContainers) {
  var warning = function warning(container) {
    container.querySelector('.o-siderbar-showcase__products').innerHTML = "<div class='is-no-tag'> You don't have any tagged item</div>";
  };

  tagsContainers.forEach(function (tagsContainer) {
    var clearAllBtn = tagsContainer.querySelector('.o-siderbar-showcase__btn');
    var products = tagsContainer.querySelectorAll('.c-product');
    clearAllBtn.addEventListener('click', function () {
      products = tagsContainer.querySelectorAll('.c-product');
      products.forEach(function (product) {
        if (products) {
          product.remove();
          warning(tagsContainer);
        }
      });
    });
    products.forEach(function (product) {
      var deleteBtn = product.querySelector('.c-product__delete');
      deleteBtn.addEventListener('click', function () {
        product.remove();
        products = tagsContainer.querySelectorAll('.c-product');

        if (products.length == 0) {
          warning(tagsContainer);
        }
      });
    });
  });
}

var headerAdvertisements = document.querySelectorAll('.o-header-advertisement');

if (headerAdvertisements) {
  headerAdvertisements.forEach(function (headerAdvertisement) {
    var headerAdvertisementItems = headerAdvertisement.querySelectorAll('.o-header-advertisement__item');
    var headerAdvertisementViewItems = headerAdvertisement.querySelectorAll('.o-header-advertisement__view-item');
    var startIndex = 0;
    headerAdvertisementItems.forEach(function (headerAdvertisementItem, i) {
      headerAdvertisementItem.addEventListener('click', function () {
        startIndex = i;
        headerAdvertisementViewItems.forEach(function (headerAdvertisementViewItem) {
          headerAdvertisementViewItem.classList.remove('is-active');
        });
        headerAdvertisementViewItems[i].classList.add('is-active');
        headerAdvertisementItems.forEach(function (headerAdvertisementItem) {
          headerAdvertisementItem.classList.remove('is-active');
        });
        headerAdvertisementItem.classList.add('is-active');
      });
    });
    var tIndex = headerAdvertisementItems.length || headerAdvertisementViewItems.length;

    function autoChnage() {
      headerAdvertisementViewItems.forEach(function (headerAdvertisementViewItem) {
        headerAdvertisementViewItem.classList.remove('is-active');
      });
      headerAdvertisementViewItems[startIndex].classList.add('is-active');
      headerAdvertisementItems.forEach(function (headerAdvertisementItem) {
        headerAdvertisementItem.classList.remove('is-active');
      });
      headerAdvertisementItems[startIndex].classList.add('is-active');
      startIndex += 1;
      if (startIndex == tIndex) startIndex = 0;
    }

    var timer = setInterval(autoChnage, 3000);
  });
} // custom checkbox


var checkboxs = document.querySelectorAll('.c-checkbox');
checkboxs.forEach(function (checkbox) {
  var input = checkbox.querySelector('.c-checkbox__input');
  input.addEventListener('click', function () {
    checkbox.classList.forEach(function (cls) {
      if (cls.indexOf("is-checked") !== -1) {
        checkbox.classList.remove('is-checked');
      } else {
        checkbox.classList.add('is-checked');
      }
    });
  });
});

var loadImage = function loadImage(e, output) {
  var reader = new FileReader();

  reader.onload = function () {
    output.src = reader.result;
  };

  reader.readAsDataURL(event.target.files[0]);
};

var addImages = document.querySelectorAll('.c-add-image__input-wrapper');

if (addImages) {
  addImages.forEach(function (addImage) {
    var input = addImage.querySelector('.c-add-image__input');
    var preview = addImage.querySelector('.c-add-image__preview');
    input.addEventListener('change', function (e) {
      return loadImage(e, preview);
    });
  });
}

var xLg = window.matchMedia("(max-width: 1024px)");
var xMd = window.matchMedia("(max-width: 768px)");

function productResposive() {
  var wideProducts = document.querySelectorAll('.o-product-view .c-product');

  if (xLg.matches) {
    wideProducts.forEach(function (wideProduct) {
      wideProduct.classList.add('c-product--small');
    });
  } else {
    wideProducts.forEach(function (wideProduct) {
      wideProduct.classList.remove('c-product--small');
    });
  }
}

productResposive();
xLg.addListener(productResposive);