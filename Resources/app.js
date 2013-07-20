// this sets the background color of the master UIView
Titanium.UI.setBackgroundColor('#000');

// load module
var titaniumBarcode = require('com.mwaysolutions.barcode');

var alarmManager = require('bencoding.alarmmanager').createAlarmManager();

// create tab group
var win1 = Ti.UI.createWindow({ backgroundColor:'white' });

var barcodeLabel = Titanium.UI.createLabel({
    color: '#000',
    top: 60,
    text: 'AdaFarma',
    textAlign: 'center',
    font: { fontSize:48 },
    width: 'auto'
  });

win1.add(barcodeLabel);

var barcodeButton = Titanium.UI.createButton({
    title: 'Receita',
    top: 200
  });

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

win1.add(barcodeButton);

var alarmeButton = Titanium.UI.createButton({
    title: 'Alarme',
    top: 300
  });
  
win1.add(alarmeButton);
win1.open();
