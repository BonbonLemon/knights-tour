const View = require('./view.js');
const Knight = require('./knight.js');

$( () => {
  const rootEl = $('.kt');
  const knight = new Knight();
  new View(knight, rootEl);
});
