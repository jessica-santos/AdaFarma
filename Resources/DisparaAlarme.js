//Import our module into our Titanium App
//var alarmModule = require('bencoding.alarmmanager');
//var alarmManager = alarmModule.createAlarmManager();

	
	var service = Ti.Android.currentService;
	var serviceIntent = service.getIntent();
	var horaInicial = serviceIntent.getLongExtra('data', 0);
    	var now = new Date().getTime();
 //   	if(now == horaInicial){
//    		require('banco').acionaAlarme();    	
    	    	
    var win = Ti.UI.createWindow({
      backgroundColor: 'white',
      exitOnClose: true,
      fullscreen: false,
      layout: 'vertical',
      title: 'Label Demo'
    });
    
    var activity = Ti.Android.currentActivity;
    var activityIntent = activity.getIntent();

    var label1 = Ti.UI.createLabel({
      color: '#900',
      font: { fontSize:48 },
      shadowColor: '#aaa',
      shadowOffset: {x:5, y:5},
      text: 'Alarme',
      textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
      botton: '10%',
      width: Ti.UI.SIZE, height: Ti.UI.SIZE
    });

    var label2 = Ti.UI.createLabel({
      color:'red',
      text: 'Remédio X',
      textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
      botton: '30%',
      width: 300, height: 200
    });
    
    var desligaButton = Titanium.UI.createButton({
    	  title: 'Tomei',
    	    botton: '50%',
    	    height : 'auto',
    		width: 'auto',
    	    color:'white',
    	    borderRadius : 10,
    	    borderColor : '#dd0000',
    		backgroundColor : '#cc0000',
    		image: 'images/teclado.png',
    		selectedColor: '#fff000'

    	});
    desligaButton.addEventListener('click', function (e) {
    	sound.stop();
    	win.close();
    });
  
    var sound = Titanium.Media.createSound();
    Titanium.Media.vibrate();
	sound.url= Ti.Filesystem.getResRawDirectory() + 'alarmclock.wav';
	sound.duration = 240;
	sound.play();
    
    win.add(desligaButton);
    win.add(label1);
    win.add(label2);
    win.open();
    
     	
   // 	}
 
    // this will display that custom extra that we added when we created the intent
    // intent.putExtra('message' , 'This is that little extra');
//    var teststring = serviceIntent.getStringExtra('message');
    
//    var activity = Ti.Android.currentActivity;
//    var intent = Ti.Android.createIntent({
//        action : Ti.Android.ACTION_MAIN,
//        className : 'com.empresa.adafarma.TesteAlarmeActivity'
//    });
//    intent.addCategory(Titanium.Android.CATEGORY_LAUNCHER);
// 
//    
    
//    var pending = Ti.Android.createPendingIntent({
//        activity : activity,
//        intent : intent,
//        type : Ti.Android.PENDING_INTENT_FOR_ACTIVITY,
//        flags : 1073741824
//    });
 
//    var notification = Ti.Android.createNotification({
//        contentIntent : pending,
//        contentTitle : 'Test',
//        contentText : 'test',
//        tickerText : 'This is a test',
//        sound: Ti.Filesystem.getResRawDirectory() + 'alarmclock.wav',
//        icon : Ti.App.Android.R.drawable.appicon,
//        flags : Titanium.Android.FLAG_AUTO_CANCEL | Titanium.Android.FLAG_SHOW_LIGHTS | Titanium.Android.NotificationManager.DEFAULT_VIBRATE
//    });
    
    
//    Ti.Android.NotificationManager.notify(1, notification);
//   
//    Ti.API.info('Extra!: ' + teststring);
// 
 //   Ti.Android.stopService(serviceIntent);