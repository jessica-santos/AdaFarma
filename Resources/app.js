// this sets the background color of the master UIView
Titanium.UI.setBackgroundColor('#000');


// load module

//var alarmManager = require('bencoding.alarmmanager').createAlarmManager();

// create tab group
var win1 = Ti.UI.createWindow({ backgroundColor:'white' });

var image = Ti.UI.createImageView({
  top: 100,
  image:'/label1.png'
});

win1.add(image);

var receitaButton = Titanium.UI.createButton({
	title: 'Receita',
	width:100,
    top: 500,
   // backgroundImage: '/addReceita.png'
  });

receitaButton.addEventListener('click', function (e){
	require('EscolheReceitaQRCode').escolheReceita()});

var alarmeButton = Titanium.UI.createButton({
	title: 'Alarme',
	width:100,
    top: 600,
  //  backgroundImage: '/addReceita.png'
  });
  
alarmeButton.addEventListener('click', function (e){
	require('ListAlarme').listAlarme()});
 
win1.add(receitaButton); 
win1.add(alarmeButton);
win1.open();
