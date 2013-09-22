// this sets the background color of the master UIView
Titanium.UI.setBackgroundColor('#f5f5dc');
var titaniumBarcode = require('com.mwaysolutions.barcode');

var alarmes;

//Views

var win1 = Titanium.UI.createWindow({
	backgroundColor:'#f5f5dc',
	title:'AdaFarma',
	navBarHidden: true,
	exitOnClose: true
	});

var view = Titanium.UI.createView({
	   backgroundColor:'#f5f5dc',
	   borderRadius : 10,
	   borderColor : '#dd0000',
	   width:'50%',
	   modal:true,
	   height:'40%',
	   zIndex:1000
	});


//Images

var image = Ti.UI.createImageView({
  top: '20%',
  image:'images/fundo.png'
});

var imageTitle = Ti.UI.createImageView({
	  top: '0',
	  image:'images/title.png'
	});
	 

//Buttons

var receitaButton = Titanium.UI.createButton({
	title: 'Receita',
    top: '70%',
    height : 'auto',
	width: 'auto',
    color:'white',
    image: 'images/prescription.png',
    borderRadius : 10,
    borderColor : '#dd0000',
	backgroundColor : '#cc0000',
	selectedColor: '#fff000'
  });

var alarmeButton = Titanium.UI.createButton({
	title: 'Alarme',
	top: '85%',
	height : 'auto',
	width: 'auto',
    color:'white',
    image: 'images/alarm.png',
    borderRadius : 10,
    borderColor : '#dd0000',
	backgroundColor : '#cc0000',
	selectedColor: '#fff000'
  });

var barcodeButton = Titanium.UI.createButton({
	title: 'QRCode',
    top: '10%',
    height : 'auto',
	width: 'auto',
	color:'white',
    borderRadius : 10,
    borderColor : '#dd0000',
	backgroundColor : '#cc0000',
	image: 'images/qrcode.png',
	selectedColor: '#fff000'

});

var manualButton = Titanium.UI.createButton({
  title: 'Manual',
    top: '60%',
    height : 'auto',
	width: 'auto',
    color:'white',
    borderRadius : 10,
    borderColor : '#dd0000',
	backgroundColor : '#cc0000',
	image: 'images/teclado.png',
	selectedColor: '#fff000'

});


//Actions

win1.addEventListener('androidback', function (e) {
	if(view.getVisible() == true){
		view.setVisible(false);
		win1.setOpacity(1);
	}else{
		win1.close();
	}
});

manualButton.addEventListener('click', function (e) {
	require('InsereManual').insereManual(null)});


barcodeButton.addEventListener('click', function (e) {
titaniumBarcode.scan({
    success: function (data) {
      if(data && data.barcode) {
        alarmes = JSON.parse(data.barcode);
        require('InsereManual').insereManual(alarmes);
      } else {
        alert(JSON.stringify(data));
      }
    },

    error: function (err) {
      alert('Error while scanning: ' + err);
    },

    cancel: function () {
      alert('Scan cancelled');
    }
  });

});

receitaButton.addEventListener('click', function (e){
	win1.add(view);
	win1.setOpacity(0.5);
	view.visible=true;
});

alarmeButton.addEventListener('click', function (e){
	require('ListAlarme').listAlarme();
});


view.add(manualButton);	
view.add(barcodeButton);

win1.add(imageTitle);
win1.add(image);
win1.add(receitaButton); 
win1.add(alarmeButton);
	
win1.open({
    activityEnterAnimation: Ti.Android.R.anim.fade_in,
    activityExitAnimation: Ti.Android.R.anim.fade_out
});