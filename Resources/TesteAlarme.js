function acionaAlarme(){
	Titanium.Media.vibrate();
	var sound = Titanium.Media.createSound();
	sound.url= Ti.Filesystem.getResRawDirectory() + 'alarmclock.wav';
	sound.play();
	
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
  text: 'A simple label',
  textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
  top: 30,
  width: Ti.UI.SIZE, height: Ti.UI.SIZE
});

var label2 = Ti.UI.createLabel({
  color:'blue',
  text: 'label',
  textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
  top: 30,
  width: 300, height: 200
});

win.add(label1);
win.add(label2);
win.open();

}

exports.acionaAlarme = acionaAlarme;