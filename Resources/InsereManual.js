	function insereManual() {
	var win = Ti.UI.createWindow({
		title:"title",
		backgroundColor:'white'
	});
	
	var image = Ti.UI.createImageView({
  		image:'/label.png'
	});
	
	var textAreaNome = Ti.UI.createTextArea({
		  borderWidth: 2,
		  borderColor: '#fff000',
		  borderRadius: 5,
		  color: '#888',
		  font: {fontSize:20, fontWeight:'bold'},
		  keyboardType: Ti.UI.KEYBOARD_NUMBER_PAD,
		  returnKeyType: Ti.UI.RETURNKEY_GO,
		  textAlign: 'left',
		  value: 'Nome. Ex: Tylenol',
		  top: 60,
		  width: 300, height : 70
	});
	
	var textAreaComposicao = Ti.UI.createTextArea({
		  borderWidth: 2,
		  borderColor: '#fff000',
		  borderRadius: 5,
		  color: '#888',
		  font: {fontSize:20, fontWeight:'bold'},
		  keyboardType: Ti.UI.KEYBOARD_NUMBER_PAD,
		  returnKeyType: Ti.UI.RETURNKEY_GO,
		  textAlign: 'left',
		  value: 'Composição. Ex: Dipirona Sódica',
		  top: 60,
		  width: 300, height : 70
	});
	
	var textAreaConcentracao = Ti.UI.createTextArea({
		  borderWidth: 2,
		  borderColor: '#fff000',
		  borderRadius: 5,
		  color: '#888',
		  font: {fontSize:20, fontWeight:'bold'},
		  keyboardType: Ti.UI.KEYBOARD_NUMBER_PAD,
		  returnKeyType: Ti.UI.RETURNKEY_GO,
		  textAlign: 'left',
		  value: 'Concentração. Ex: 500mg',
		  top: 60,
		  width: 300, height : 70
	});
	
	var textAreaNome = Ti.UI.createTextArea({
		  borderWidth: 2,
		  borderColor: '#fff000',
		  borderRadius: 5,
		  color: '#888',
		  font: {fontSize:20, fontWeight:'bold'},
		  keyboardType: Ti.UI.KEYBOARD_NUMBER_PAD,
		  returnKeyType: Ti.UI.RETURNKEY_GO,
		  textAlign: 'left',
		  value: 'Nome. Ex: Tylenol',
		  top: 60,
		  width: 300, height : 70
	});
	
	var textAreaDose = Ti.UI.createTextArea({
		  borderWidth: 2,
		  borderColor: '#fff000',
		  borderRadius: 5,
		  color: '#888',
		  font: {fontSize:20, fontWeight:'bold'},
		  keyboardType: Ti.UI.KEYBOARD_NUMBER_PAD,
		  returnKeyType: Ti.UI.RETURNKEY_GO,
		  textAlign: 'left',
		  value: 'Dose. Ex: 2',
		  top: 60,
		  width: 300, height : 70
	});
	
	var textAreaFrequencia = Ti.UI.createTextArea({
		  borderWidth: 2,
		  borderColor: '#fff000',
		  borderRadius: 5,
		  color: '#888',
		  font: {fontSize:20, fontWeight:'bold'},
		  keyboardType: Ti.UI.KEYBOARD_NUMBER_PAD,
		  returnKeyType: Ti.UI.RETURNKEY_GO,
		  textAlign: 'left',
		  value: 'Frequência. Ex: 6',
		  top: 60,
		  width: 300, height : 70
	});
	
	var textAreaDuracao = Ti.UI.createTextArea({
		  borderWidth: 2,
		  borderColor: '#fff000',
		  borderRadius: 5,
		  color: '#888',
		  font: {fontSize:20, fontWeight:'bold'},
		  keyboardType: Ti.UI.KEYBOARD_NUMBER_PAD,
		  returnKeyType: Ti.UI.RETURNKEY_GO,
		  textAlign: 'left',
		  value: 'Duração. Ex: 3',
		  top: 60,
		  width: 300, height : 70
	});
	
	var textAreaObservacao = Ti.UI.createTextArea({
		  borderWidth: 2,
		  borderColor: '#fff000',
		  borderRadius: 5,
		  color: '#888',
		  font: {fontSize:20, fontWeight:'bold'},
		  keyboardType: Ti.UI.KEYBOARD_NUMBER_PAD,
		  returnKeyType: Ti.UI.RETURNKEY_GO,
		  textAlign: 'left',
		  value: 'Observação',
		  top: 60,
		  width: 300, height : 70
	});
	
	win.add(textAreaNome);
	win.add(textAreaComposicao);
	win.add(textAreaConcentracao);
	win.add(textAreaDose);
	win.add(textAreaFrequencia);
	win.add(textAreaDuracao);
	win.add(textAreaObservacao);
	
	win.add(image);
}

exports.insereManual = insereManual
