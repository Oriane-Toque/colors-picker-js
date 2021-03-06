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
    // je récupère les données du formulaire à la soumission
    let formColors = document.getElementById('form_submit');
    // je lui met un écouteur d'évènement de type submit
    formColors.addEventListener('submit', app.handleAddColors);

  },

  checkColors: function(valueColors) {
    
    for (let index in cssColors) {

      let color = cssColors[index];

      if(valueColors === color) {
        return true;
      }    
    }
    return false;
  },

  handleAddColors(evt) {

    // je stoppe l'envoi de données du formulaire
    evt.preventDefault();

      // je cible mon input dans le DOM
      let inputColors = document.getElementById('color');
      // je récupère la couleur soumise
      let valueColors = inputColors.value;
      // on vide le champs après soumission
      inputColors.value = '';

    if(app.checkColors(valueColors) === true) {

      console.log(typeof(valueColors));

      // je pousse ma nouvelle valeur dans le tableau colors
      app.colors.push(valueColors);

      // je fais appel a la fonction permettant de générer ma colorBox
      app.generateColorBox(valueColors);
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

    colorBox.addEventListener('click', app.handleChangeBackground);
    colorBox.click();

    app.contentArea.appendChild(colorBox);
    return colorBox;
  }
};

document.addEventListener('DOMContentLoaded', app.init);