	function listAlarme() {
	var win = Ti.UI.createWindow({
		title:"title",
		backgroundColor:'white'
	});
	
	var image = Ti.UI.createImageView({
  		image:'/label.png'
	});
	
	win.add(image);
}

exports.listAlarme = listAlarme;