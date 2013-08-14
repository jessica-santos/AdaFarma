var activity;
	var image = Ti.UI.createImageView({

		height : 100,
		width : 100,
	  top: '10%',
	  image:'/label1.png'
	});
	var win = Ti.UI.createWindow({
		title:"title",
		backgroundColor:'white'
	});
	
	var textField = Ti.UI.createTextField({
		  borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
		  hintText : 'Focus to see keyboard with toolbar',
		  color: '#336699',
		  top: 10, left: 10,
		  width: 250, height: 60
		});

		win.add(textField);
	
	win.add(image);
	win.open();
	
	activity = win.activity;

exports.activity = activity;