class DeliveryThankPage {
  constructor(tabs, tabContents,openGoods,clickCopyNumber,extendStorage,modalReady,modalList,modalAccomplished,clearCheckBox,itemsCoupons,popupModalElm,couponCopy,qrcode,valueQr) {
    this.tabs = document.querySelectorAll(tabs);
    this.tabContents = document.querySelectorAll(tabContents);
    this.openGoods = document.querySelectorAll(openGoods);
    this.clickCopyNumber = document.querySelectorAll(clickCopyNumber);
    this.extendStorage = document.querySelectorAll(extendStorage);
    this.modalReady = document.querySelectorAll(modalReady);
    this.modalList = document.querySelectorAll(modalList);
    this.modalAccomplished = document.querySelectorAll(modalAccomplished);
    this.clearCheckBox = document.querySelectorAll(clearCheckBox);
    this.itemsCouponsActive = document.querySelectorAll(itemsCoupons);
    this.popupModalElm = document.querySelectorAll(popupModalElm);
    this.couponCopy = document.querySelectorAll(couponCopy);
    this.qrcode = document.querySelectorAll(qrcode);
    this.valueQr = document.querySelectorAll(valueQr);
    this.indexMessage = 1000;
  }
 
  showGoods() {
    const th = this;
    if(th?.openGoods) {
      th.openGoods.forEach(btn => {
        btn.addEventListener('click', e => {
          const target = e.currentTarget.closest('li'),
                tag = e.currentTarget.getElementsByTagName('span')[0];
                target.querySelector('.tile-parent').querySelector('.gods-parent').classList.toggle('is-open');
                target.querySelector('.tile-parent').querySelector('.info-parent').classList.toggle('is-open');
                target.querySelector('.open-sld').classList.toggle('no-open');
                tag.classList.toggle('addColor');
                tag.classList.toggle('rotate');
        });
      });
    }
  }
  // init slides 
  initSlides() {
    
    const swiperThankSlideCount = document.querySelector('.delivery-thank-page-init .swiper-wrapper');
          

    const countSlides = (countSlides) => {
      if(countSlides > 10)
        countSlides = 10;
        return countSlides;
    }

    
    if(swiperThankSlideCount) {
      const sliderAccomplished = new Swiper ('.delivery-thank-page-init', {
        slidesPerView: countSlides(swiperThankSlideCount.childElementCount),
        paginationClickable: true,
        spaceBetween: 30,
        observer: true,
        observeSlideChildren: true,
        updateOnWindowResize: true,
        navigation: {
          prevEl: '.swiper-button-prev-thank-1',
          nextEl: '.swiper-button-next-thank-2'
        },
        breakpoints: {
          320: {
            slidesPerView: 3,
            spaceBetween: 0,
            resistanceRatio: 0.85
        },
          370: {
            slidesPerView: 3,
            spaceBetween: 0,
            resistanceRatio: 0.85
        },
          420: {
            slidesPerView: 4,
            spaceBetween: 0,
            resistanceRatio: 0.85
        },
          480: {
            slidesPerView: 5,
            spaceBetween: 0,
            resistanceRatio: 0.85
        },
          520: {
            slidesPerView: 6,
            spaceBetween: 0,
            resistanceRatio: 0.85
        },
          600: {
              slidesPerView: 7,
              spaceBetween: 0,
              resistanceRatio: 0.85
          },
          690 : {
              slidesPerView: 8,
              spaceBetween: 0,
              resistanceRatio: 0.85
          },
          840: {
              slidesPerView: 10,
              spaceBetween: 0,
              resistanceRatio: 0.85
          },
          1030: {
              slidesPerView: 10,
              spaceBetween: 0,
              resistanceRatio : 0.85
          }
      },
      keyboard: {
          enabled: true,
       }
      });
    }
    
  }

  copuNumberDelivery() {
      if(this.clickCopyNumber) {
        this.clickCopyNumber.forEach(elm => {
          elm.disabled = true;
          elm.addEventListener('click', e => {
            const text = e.target.previousElementSibling;
                  text.disabled = false;
                  text.select();
                  document.execCommand("copy");
                  text.disabled = true;
                  disappearingMessage(text.value);
          });
        });
        
        const disappearingMessage = (text) => {
          const messageAppend = document.querySelector('.delivery-thank-page');
          const createWrp = document.createElement('div');
              createWrp.classList.add('page-delivery__wrp');
              createWrp.style.zIndex = this.indexMessage++;
          const createMess = document.createElement('span');
              createWrp.appendChild(createMess);
              createMess.classList.add('page-delivery__message');
              createMess.innerHTML = `Номер доставки ${text.replace(/[^+\d]/g, '')} скопирован в буфер обмена`;
              messageAppend.append(createWrp);
              
               setTimeout(() => {
                createWrp.parentNode.querySelector('.page-delivery__wrp').remove();
               }, 53000);
        }
      }
    }

  
  copuNumberCoupon() {
    
    if(this.couponCopy) {
      this.couponCopy.forEach(elm => {
        elm.addEventListener('click', e => {
          const text = e.target;
                text.disabled = false;
                text.select();
                document.execCommand("copy");
                text.disabled = true;
                setTimeout(() => {
                  text.disabled = false;
                }, 100);
                text.disabled = true;
                disappearingMessage(text.value);
        });
      });
      
      const disappearingMessage = (text) => {
       
        const messageAppend = document.querySelector('.delivery-thank-page');
        const createWrp = document.createElement('div');
            createWrp.classList.add('delivery-thank-page-wrapper--notice');
            createWrp.style.zIndex = this.indexMessage++;
        const createMess = document.createElement('span');
            createWrp.appendChild(createMess);
            createMess.classList.add('delivery-thank-page-wrapper--message');
            createMess.innerHTML = `Номер купона ${text} скопирован в буфер обмена`;
            messageAppend.append(createWrp);
            
             setTimeout(() => {
              createWrp.parentNode.querySelector('.delivery-thank-page-wrapper--notice').remove();
             }, 50300);
      }
    }
  }

  generationQrCode() {

    function getRandomInt(max) {
      return Math.floor(Math.random() * max);
    }

    this.valueQr.forEach(random => {
      console.log(random.value = getRandomInt(3323443434));
    });

    


    

    this.qrcode.forEach((elmQr, i) => {
    const qr = new QRCode(elmQr);

    qr.makeCode(this.valueQr[i].value.trim());
    });
  }

  openCouponPopup() {
    this.itemsCouponsActive.forEach((button, i) => {
      button.id = `this_modal__${i}`;
      button.classList.add('js-modal');
      button.dataset.modal = `#this_modal__${i}`;
      button.addEventListener('click', e => {
        this.popupModalElm[i].id = e.currentTarget.id;
        this.popupModalElm[i].classList.add('show');
      });
    });
  }

  popupModal() {
    const backdrop = document.querySelector('#modal-backdrop');
    document.addEventListener('click', modalHandler);

    function modalHandler(evt) {
      const modalBtnOpen = evt.target.closest('.js-modal');
      if (modalBtnOpen) {
        const modalSelector = modalBtnOpen.dataset.modal;
        showModal(document.querySelector(modalSelector));
      }

      const modalBtnClose = evt.target.closest('.modal-close');
      if (modalBtnClose) {
        hideModal(modalBtnClose.closest('.delivery-thank-page-wrapper__modal'));
      }

      if (evt.target.matches('#modal-backdrop')) { 
        hideModal(document.querySelector('.delivery-thank-page-wrapper__modal.show'));
      }
    }

    function showModal(modalElem) {
      modalElem.classList.add('show');
      backdrop.classList.remove('hidden-modal');
    }

    function hideModal(modalElem) {
      if(modalElem && backdrop) {
        modalElem.classList.remove('show');
        backdrop.classList.add('hidden-modal');
      }
    }

  }


}


const exampleDeliveryThankPage = new DeliveryThankPage(
  '[data-tab-target]',
  '[data-tab-content]',
  '[data-all-open]',
  '[data-target-copy-delivery]',
  '.page-delivery-wrapper__ready-modal--checkbox',
  '.page-delivery-wrapper__ready-item',
  '.page-delivery-wrapper__list-item',
  '.page-delivery-wrapper__list-accomplished-item',
  '.page-delivery-wrapper__list-cancel-delivery',
  '.delivery-thank-page-wrapper__main-coupon-active--item',
  '.delivery-thank-page-wrapper__modal',
  '[data-target-copy]',
  '.delivery-thank-page-wrapper__modal--qrcode',
  '[data-target-copy]'
);


const initDeliveryThankPage = () => {
  exampleDeliveryThankPage.showGoods();
  exampleDeliveryThankPage.initSlides();
  exampleDeliveryThankPage.popupModal();
  exampleDeliveryThankPage.openCouponPopup();
  exampleDeliveryThankPage.copuNumberDelivery();
  exampleDeliveryThankPage.copuNumberCoupon();
  exampleDeliveryThankPage.generationQrCode();
}

const classInitDeliveryThankPage = document.getElementById('delivery-thank-page__init');
if(classInitDeliveryThankPage) initDeliveryThankPage();


// const classInitCoupon = document.getElementById('delivery-thank-page__init');
// if(classInitCoupon) DeliveryThankPage();


// const qrcode = document.querySelectorAll(".delivery-thank-page-wrapper__modal--qrcode");
// const valueQr = document.querySelectorAll('[data-target-copy]');

// qrcode.forEach((elmQr, i) => {
// const qr = new QRCode(elmQr);

// qr.makeCode(valueQr[i].value.trim());
// });



