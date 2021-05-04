let app = {
  colors: [
    'lightsteelblue',
    'palegreen',
    'crimson'
  ],

  contentArea: document.querySelector('.content'),

  init: function() {
    console.log(app.contentArea);
    for (index in app.colors) {
      app.generateColorBox(app.colors[index]);
    }
  },

  generateColorBox: function(color) {
    let colorBox = document.createElement('div');
    colorBox.className = 'bg-color-selector';
    colorBox.style.background = color;
    colorBox.innerText = color;
    app.contentArea.appendChild(colorBox);
    return colorBox;
  }
};

document.addEventListener('DOMContentLoaded', app.init);