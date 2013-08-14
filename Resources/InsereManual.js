function insereManual() {
	
	Ti.UI.setBackgroundColor('#000');
	//Add this in so Titanium will add the permission for us.
	Titanium.Media.vibrate();
	//Add this so Titanium will add the permissions and links needed to play sounds
	var sound = Titanium.Media.createSound();
	
	var requestCode = 41;
	var alarmModule = require('bencoding.alarmmanager');
	var alarmManager = alarmModule.createAlarmManager();

	//Create a date variable to be used later 
	var now = new Date();
	
	var win = Ti.UI.createWindow({
		title : "title",
		backgroundColor : 'white'
	});

	var image = Ti.UI.createImageView({
		height : '20%',
		width : '20%',
		top: '10%',
		image:'/label1.png',
		left: 5
	});

	var textAreaNome = Ti.UI.createTextArea({
		borderWidth : 2,
		borderColor : '#fff000',
		borderRadius : 5,
		color : '#888',
		font : {
			fontSize : 20,
			fontWeight : 'bold'
		},
		keyboardType : Ti.UI.KEYBOARD_NUMBER_PAD,
		returnKeyType : Ti.UI.RETURNKEY_GO,
		textAlign : 'left',
		value : 'Nome. Ex: Tylenol',
		height : Titanium.UI.SIZE
		
	});

	var textAreaComposicao = Ti.UI.createTextArea({
		borderWidth : 2,
		borderColor : '#fff000',
		borderRadius : 5,
		color : '#888',
		font : {
			fontSize : 20,
			fontWeight : 'bold'
		},
		keyboardType : Ti.UI.KEYBOARD_NUMBER_PAD,
		returnKeyType : Ti.UI.RETURNKEY_GO,
		textAlign : 'left',
		value : 'Composição. Ex: Dipirona Sódica',
		height : Titanium.UI.SIZE
		
	});

	var textAreaConcentracao = Ti.UI.createTextArea({
		borderWidth : 2,
		borderColor : '#fff000',
		borderRadius : 5,
		color : '#888',
		font : {
			fontSize : 20,
			fontWeight : 'bold'
		},
		keyboardType : Ti.UI.KEYBOARD_NUMBER_PAD,
		returnKeyType : Ti.UI.RETURNKEY_GO,
		textAlign : 'left',
		value : 'Concentração. Ex: 500mg',
		height : Titanium.UI.SIZE
		
	});

	var textAreaNome = Ti.UI.createTextArea({
		borderWidth : 2,
		borderColor : '#fff000',
		borderRadius : 5,
		color : '#888',
		font : {
			fontSize : 20,
			fontWeight : 'bold'
		},
		keyboardType : Ti.UI.KEYBOARD_NUMBER_PAD,
		returnKeyType : Ti.UI.RETURNKEY_GO,
		textAlign : 'left',
		value : 'Nome. Ex: Tylenol',
		height : Titanium.UI.SIZE
		
	});

	var textAreaDose = Ti.UI.createTextArea({
		borderWidth : 2,
		borderColor : '#fff000',
		borderRadius : 5,
		color : '#888',
		font : {
			fontSize : 20,
			fontWeight : 'bold'
		},
		keyboardType : Ti.UI.KEYBOARD_NUMBER_PAD,
		returnKeyType : Ti.UI.RETURNKEY_GO,
		textAlign : 'left',
		value : 'Dose. Ex: 2',
		height : Titanium.UI.SIZE
		
	});

	var textAreaFrequencia = Ti.UI.createTextArea({
		borderWidth : 2,
		borderColor : '#fff000',
		borderRadius : 5,
		color : '#888',
		font : {
			fontSize : 20,
			fontWeight : 'bold'
		},
		keyboardType : Ti.UI.KEYBOARD_NUMBER_PAD,
		returnKeyType : Ti.UI.RETURNKEY_GO,
		textAlign : 'left',
		value : 'Frequência. Ex: 6',
		height : Titanium.UI.SIZE
		
	});

	var textAreaDuracao = Ti.UI.createTextArea({
		borderWidth : 2,
		borderColor : '#fff000',
		borderRadius : 5,
		color : '#888',
		font : {
			fontSize : 20,
			fontWeight : 'bold'
		},
		keyboardType : Ti.UI.KEYBOARD_NUMBER_PAD,
		returnKeyType : Ti.UI.RETURNKEY_GO,
		textAlign : 'left',
		value : 'Duração. Ex: 3',
		height : Titanium.UI.SIZE
		
	});

	var textAreaObservacao = Ti.UI.createTextArea({
		borderWidth : 2,
		borderColor : '#fff000',
		borderRadius : 5,
		color : '#888',
		font : {
			fontSize : 20,
			fontWeight : 'bold'
		},
		keyboardType : Ti.UI.KEYBOARD_NUMBER_PAD,
		returnKeyType : Ti.UI.RETURNKEY_GO,
		textAlign : 'left',
		value : 'Observação',
		height : Titanium.UI.SIZE
		
	});
	
	var criaAlarme = Titanium.UI.createButton({
	    title: 'Cria Alarme',
	    height : Titanium.UI.SIZE
	  //  backgroundImage: '/addReceita.png'
	    	
	  });
	
	criaAlarme.addEventListener('click',function(e){
		alarmManager.addAlarmNotification({
			requestCode: 41, //Request ID used to identify a specific alarm. Provide the same requestCode twice to update 
			icon: Ti.Android.R.drawable.star_on, //Optional icon must be a resource id or url
			minute:2, //Set the number of minutes until the alarm should go off
			contentTitle:'Alarm #1', //Set the title of the Notification that will appear
			contentText:'Alarm & Notify Basic', //Set the body of the notification that will apear
			sound: Ti.Filesystem.getResRawDirectory() + 'alarm', //On notification play the default sound ( by default off )
			vibrate:true, //On notification vibrate device ( by default off )
			showLights: true, //On notification show the device lights ( by default off )
	//		className: require('DisparaAlarme').activity
		});	
		var ew = Ti.UI.createAlertDialog({
			title:'Info', message:"You should see your alarm notification in about 2 minutes",
			buttonNames:[Ti.Android.currentActivity.getString(Ti.Android.R.string.ok)]
		});
	    ew.show();
	    
	});
	
	

	win.add(image);

	var scrollView = Ti.UI.createScrollView({
		top:'30%',
  		layout: 'vertical'
	});
	
	scrollView.add(textAreaNome);
	scrollView.add(textAreaComposicao);
	scrollView.add(textAreaConcentracao);
	scrollView.add(textAreaDose);
	scrollView.add(textAreaFrequencia);
	scrollView.add(textAreaDuracao);
	scrollView.add(textAreaObservacao);
	scrollView.add(criaAlarme);
	win.add(scrollView);
	win.open();
}

exports.insereManual = insereManual;