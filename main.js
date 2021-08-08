import Reveal from "reveal.js";
import Highlight from "reveal.js/plugin/highlight/highlight.esm";
import Notes from "reveal.js/plugin/notes/notes.esm";

let deck = new Reveal({
  plugins: [Highlight, Notes]
});

deck.initialize({
  hash: true
});

deck.getSlides().forEach((slide) => {
  slide.setAttribute("data-background-image", "background.png");
});
