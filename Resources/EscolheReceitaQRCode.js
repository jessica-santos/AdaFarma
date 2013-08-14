var titaniumBarcode = require('com.mwaysolutions.barcode');
	
	function escolheReceita() {
	var win = Ti.UI.createWindow({
		title:"title",
		backgroundColor:'white'
	});
	
	var image = Ti.UI.createImageView({
		height : 100,
		width : 100,
	  top: '10%',
	  image:'/label1.png'
	});
	
	var barcodeButton = Titanium.UI.createButton({
    title: 'QRCode',
    top: '60%',
 //   backgroundImage: '/addReceita.png'
    
  });
  
  var manualButton = Titanium.UI.createButton({
    title: 'Manual',
    top: '80%',
    
  //  backgroundImage: '/addReceita.png'
    
  });
  
  manualButton.addEventListener('click', function (e) {
  	require('InsereManual').insereManual()});
  
  barcodeButton.addEventListener('click', function (e) {
    titaniumBarcode.scan({
        success: function (data) {
          if(data && data.barcode) {
            barcodeLabel.text = 'Barcode:' + data.barcode;
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
  
win.add(image);
win.add(manualButton);	
win.add(barcodeButton);
win.open();
}

exports.escolheReceita = escolheReceita;
