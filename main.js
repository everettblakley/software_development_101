import Reveal from 'reveal.js';

let deck = new Reveal({
  width: 1920,
  height: 1080,
});

deck.initialize();

deck.getSlides().forEach((slide) => {
  slide.setAttribute('data-background-image', 'background.png')
})