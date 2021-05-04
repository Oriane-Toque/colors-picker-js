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
    
    // je récupère tous les boxColor qui ont été créé dynamiquement
    let allBgSelector = document.querySelectorAll('.bg-color-selector');

    // je leur met un écouteur d'évènement à chacun
    for(let bgSelector of allBgSelector) {
      bgSelector.addEventListener('click', app.handleChangeBackground);
    }
    
  },

  // TODO fonction pour modifier le fond en fonction du colorBox sélectionné
  handleChangeBackground: function(evt) {

    let bgSelector = evt.currentTarget;
    console.log(bgSelector);

    // pour chaque colorBox on va récupérer la valeur de leur attribut style
    let valueBgSelector = bgSelector.getAttribute('style');
    console.log(valueBgSelector);

    // on cible notre body et on modifie son style
    // on attribut à style la valeur de nos colorBox respectives
    document.body.style = valueBgSelector;
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