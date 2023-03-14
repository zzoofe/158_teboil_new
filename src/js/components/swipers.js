import Swiper, { Navigation, Pagination, Grid } from 'swiper';
Swiper.use([ Navigation, Pagination, Grid ]);

const init = () => {
  const infoBlockOpt = {
    spaceBetween: 0,
    slidesPerView: 1,
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      240: {
        slidesPerView: "auto",
        spaceBetween: 10,
      },
      550: {
        slidesPerView: "auto",
        spaceBetween: 20,
      },
      768: {
        slidesPerView: "auto",
        spaceBetween: 20,
      },
      991: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
    },
  }
  const logosOpt = {
    spaceBetween: 20,
    slidesPerView: 4,
    loop: false,
    grid: {
      rows: 2,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-logos__button-next',
      prevEl: '.swiper-logos__button-prev',
    },
    breakpoints: {
      991: {

      },
    },
  }
  const infoBlock = new Swiper('.swiper-info', infoBlockOpt);
  const logos = new Swiper('.swiper-logos', logosOpt);
}

export default {init};
