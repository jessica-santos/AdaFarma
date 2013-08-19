//bootstrap and check dependencies
if (Ti.version < 1.8 ) {
	alert('Sorry - this application template requires Titanium Mobile SDK 1.8 or later');	  	
}

// This is a single context application with multiple windows in a stack
(function() {
	//render appropriate components based on the platform and form factor
	var osname = Ti.Platform.osname,
		version = Ti.Platform.version,
		height = Ti.Platform.displayCaps.platformHeight,
		width = Ti.Platform.displayCaps.platformWidth;
	
	//considering tablet to have one dimension over 900px - this is imperfect, so you should feel free to decide
	//yourself what you consider a tablet form factor for android
	var isTablet = osname === 'ipad' || (osname === 'android' && (width > 899 || height > 899));
	
	var Window;
	if (isTablet) {
		Window = require('ui/tablet/ApplicationWindow');
	}
	else {
		// Android uses platform-specific properties to create windows.
		// All other platforms follow a similar UI pattern.
		if (osname === 'android') {
			Window = require('ui/handheld/android/ApplicationWindow');
		}
		else {
			Window = require('ui/handheld/ApplicationWindow');
		}
	}
	new Window().open();
})();





// this sets the background color of the master UIView
/*Titanium.UI.setBackgroundColor('#000');
var requestCode = 41;
var alarmModule = require('bencoding.alarmmanager');
var alarmManager = alarmModule.createAlarmManager();

//Create a date variable to be used later 
var now = new Date();

// load module

//var alarmManager = require('bencoding.alarmmanager').createAlarmManager();

// create tab group
var win1 = Ti.UI.createWindow({ backgroundColor:'white' });

var image = Ti.UI.createImageView({
	height : 100,
	width : 100,
  top: '10%',
  image:'/label1.png'
});

win1.add(image);

var receitaButton = Titanium.UI.createButton({
	title: 'Receita',
	width:100,
    top: '60%',
   // backgroundImage: '/addReceita.png'
  });

receitaButton.addEventListener('click', function (e){
	require('EscolheReceitaQRCode').escolheReceita()});

var alarmeButton = Titanium.UI.createButton({
	title: 'Alarme',
	width:100,
    top: '80%',
  //  backgroundImage: '/addReceita.png'
  });
  
alarmeButton.addEventListener('click', function (e){
//	require('ListAlarme').listAlarme()
	alarmManager.addAlarmService({  
	    //The full name for the service to be called. Find this in your AndroidManifest.xml Titanium creates
	    service:'com.appworkbench.alarmtest.TestserviceService',            
	    year: now.getFullYear(),
	    month: now.getMonth(),
	    day: now.getDate(),
	    hour: now.getHours(),
	    minute: now.getMinutes() + 2, //Set the number of minutes until the alarm should go off
	    repeat:'daily' //You can use the words hourly,daily,weekly,monthly,yearly or you can provide milliseconds.
	}); 
	var ew8 = Ti.UI.createAlertDialog({
	    title:'Info', message:"You should see your alarm notification in about 2 minutes & repeat each day",
	    buttonNames:[Ti.Android.currentActivity.getString(Ti.Android.R.string.ok)]
	});
	ew8.show(); 	

});
 
win1.add(receitaButton); 
win1.add(alarmeButton);
win1.open();
*/