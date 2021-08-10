$(".owl-carousel").owlCarousel({
  loop: true, //Navegaçao infinita
  margin: 10,
  nav: false, // Botoes de navegaçao
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 5,
    },
  },
});
