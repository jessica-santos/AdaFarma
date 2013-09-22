function insereManual(alarmes) {
	
	Ti.UI.setBackgroundColor('#f5f5dc');
	
	var requestCode = 41;
	var alarmModule = require('bencoding.alarmmanager');
	var alarmManager = alarmModule.createAlarmManager();
	
	var i=0;
	var med = [];
	
	var win = Titanium.UI.createWindow({
		backgroundColor:'#f5f5dc',
		title:'AdaFarma',
		navBarHidden: true,
		exitOnClose: false
		});

	var imageTitle = Ti.UI.createImageView({
		  top: '0dp',
		  image:'/title.png'
		});
	
	var label = Ti.UI.createLabel({
		  color:'#ff0000',
		  text: 'Preencha os dados do medicamento para inserir o Alarme:',
		  font : {
				fontSize : '14dp',
				fontWeight : 'bold'
			},
		  textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
		  top: '15%',
		  width: Ti.UI.SIZE, height: Ti.UI.SIZE
		});

	var textAreaNome = Ti.UI.createTextArea({
		borderColor : '#dd0000',
		backgroundColor:'#ffffff',
		borderWidth: 1,
		top: '50dp',
		height : 'auto',
		width : '90%',
		borderRadius : 25,
		font : {
			fontSize : '14dp',
			fontWeight : 'bold'
		},
		appearance : Titanium.UI.KEYBOARD_APPEARANCE_ALERT,
		keyboardType : Ti.UI.KEYBOARD_DEFAULT,
		returnKeyType : Ti.UI.RETURNKEY_GO,
		textAlign : 'left',
		hintText : 'Nome. Ex: Tylenol'		
	});

	var textAreaComposicao = Ti.UI.createTextArea({
		borderColor : '#dd0000',
		backgroundColor:'#ffffff',
		borderWidth: 1,
		top: '100dp',
		height : 'auto',
		width : '90%',
		borderRadius : 25,
		font : {
			fontSize : '14dp',
			fontWeight : 'bold'
		},
		keyboardType : Ti.UI.KEYBOARD_DEFAULT,
		returnKeyType : Ti.UI.RETURNKEY_GO,
		textAlign : 'left',
		hintText : 'Composição. Ex: Dipirona Sódica'
		
	});

	var textAreaConcentracao = Ti.UI.createTextArea({
		borderColor : '#dd0000',	
		backgroundColor:'#ffffff',
		borderWidth: 1,
		top: '150dp',
		height : 'auto',
		width : '90%',
		borderRadius : 25,
		font : {
			fontSize : '14dp',
			fontWeight : 'bold'
		},
		keyboardType : Ti.UI.KEYBOARD_DEFAULT,
		returnKeyType : Ti.UI.RETURNKEY_GO,
		textAlign : 'left',
		hintText : 'Concentração. Ex: 500mg'
		
	});

	var textAreaDose = Ti.UI.createTextArea({
		borderColor : '#dd0000',
		backgroundColor:'#ffffff',
		borderWidth: 1,
		top: '200dp',
		height : 'auto',
		width : '90%',
		borderRadius : 25,
		font : {
			fontSize : '14dp',
			fontWeight : 'bold'
		},
		keyboardType : Ti.UI.KEYBOARD_DEFAULT,
		returnKeyType : Ti.UI.RETURNKEY_GO,
		textAlign : 'left',
		hintText : 'Dose. Ex: 2'		
	});

	var textAreaFrequencia = Ti.UI.createTextArea({
		borderColor : '#dd0000',
		backgroundColor:'#ffffff',
		borderWidth: 1,
		top:'250dp',
		left:'5%',
		height : 'auto',
		width : '45%',
		borderRadius : 25,
		font : {
			fontSize : '14dp',
			fontWeight : 'bold'
		},
		keyboardType : Ti.UI.KEYBOARD_NUMBER_PAD,
		returnKeyType : Ti.UI.RETURNKEY_GO,
		textAlign : 'left',
		hintText : 'Frequência. Ex: 6'		
	});
	
	var dataFreq = [];
	dataFreq[0]=Ti.UI.createPickerRow({title:'x ao dia'});
	dataFreq[1]=Ti.UI.createPickerRow({title:'x/x horas'});

	var pickerFreq = Ti.UI.createPicker({
		  top:'250dp',
		  right:'5%',
		  height : 'auto',
		  width : '40%',
		  borderColor : '#dd0000',
		  color: '#b2beb5',
		  font : {
				fontSize : '14dp',
				fontWeight : 'bold'
			},
		  borderWidth: 1,
		  borderRadius : 25,
		  backgroundColor:'#ffffff',
		  backgroundImage: '/seta.png'
		});
	pickerFreq.add(dataFreq);
	pickerFreq.selectionIndicator = true;
	pickerFreq.setSelectedRow(0, 0, false);
	
	var textAreaDuracao = Ti.UI.createTextArea({
		borderColor : '#dd0000',
		backgroundColor:'#ffffff',
		borderWidth: 1,
		top:'300dp',
		left:'5%',
		height : 'auto',
		width : '45%',
		borderRadius : 25,
		font : {
			fontSize : '14dp',
			fontWeight : 'bold'
		},
		keyboardType : Ti.UI.KEYBOARD_NUMBER_PAD,
		returnKeyType : Ti.UI.RETURNKEY_GO,
		textAlign : 'left',
		hintText : 'Duração. Ex: 3'		
	});
	
	var dataDur = [];
	dataDur[0]=Ti.UI.createPickerRow({title:'dias'});
	dataDur[1]=Ti.UI.createPickerRow({title:'semanas'});
	dataDur[1]=Ti.UI.createPickerRow({title:'meses'});
	
	var pickerDur = Ti.UI.createPicker({
		  top:'300dp',
		  right:'5%',
		  height : 'auto',
		  borderRadius : 25,
		  borderWidth: 1,
		  backgroundImage: '/seta.png',
		  color: '#b2beb5',
		  font : {
				fontSize : '14dp',
				fontWeight : 'bold'
			},
		  borderColor : '#dd0000',
		  backgroundColor:'#ffffff',
		  width : '40%'
		});
	pickerDur.add(dataDur);
	pickerDur.selectionIndicator = true;
	pickerDur.setSelectedRow(0, 0, false);

	var textAreaObservacao = Ti.UI.createTextArea({
		borderColor : '#dd0000',
		backgroundColor:'#ffffff',
		borderWidth: 1,
		top:'350dp',
		height : 'auto',
		width : '90%',
		borderRadius : 25,
		font : {
			fontSize : '14dp',
			fontWeight : 'bold'
		},
		keyboardType : Ti.UI.KEYBOARD_DEFAULT,
		returnKeyType : Ti.UI.RETURNKEY_GO,
		textAlign : 'left',
		hintText : 'Observação'
	});
	
	var labelDose = Ti.UI.createLabel({
		  text: 'Primeira dose:',
		  color:'#ff0000',
		  top:'400dp',
		  font : {
				fontSize : '14dp',
				fontWeight : 'bold'
			},
		  textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
		  width: Ti.UI.SIZE, height: Ti.UI.SIZE
		});
	
	var textDia = Ti.UI.createLabel({
		borderColor : '#dd0000',
		backgroundColor:'#ffffff',
		borderWidth: 1,
		top:'450dp',
		height : '40dp',
		width : '90%',
		borderRadius : 25,
		color:'#b2beb5',
		font : {
			fontSize : '14dp',
			fontWeight : 'bold'
		},
		keyboardType : Ti.UI.KEYBOARD_DEFAULT,
		returnKeyType : Ti.UI.RETURNKEY_GO,
		textAlign : 'center',
		text : 'Selecione o dia de inicio da medicação'
	});
	
	
	
	var pickerDia = Ti.UI.createPicker({
		type:Ti.UI.PICKER_TYPE_DATE,
		minDate:new Date(2009,0,1),
		maxDate:new Date(2014,11,31),
		value: new Date(2013,9,17),
	});
	
	textDia.addEventListener('click',function(e){
		pickerDia.showDatePickerDialog({
			  value: new Date(2013,9,17),
			  callback: function(e) {
			    if (e.cancel) {
			      Ti.API.info('User canceled dialog');
			    } else {
			      Ti.API.info('User selected date: ' + e.value);
			    }
			  }
			});
	});
	
	var textHora = Ti.UI.createLabel({
		borderColor : '#dd0000',
		backgroundColor:'#ffffff',
		borderWidth: 1,
		color:'#b2beb5',
		top:'500dp',
		height : '40dp',
		width : '90%',
		borderRadius : 25,
		font : {
			fontSize : '14dp',
			fontWeight : 'bold'
		},
		keyboardType : Ti.UI.KEYBOARD_DEFAULT,
		returnKeyType : Ti.UI.RETURNKEY_GO,
		textAlign : 'center',
		text : 'Selecione a hora de inicio da medicação'
	});
	var pickerHora = Ti.UI.createPicker({
        type : Ti.UI.PICKER_TYPE_TIME,
        format24 : true
	});
	
	textHora.addEventListener('click',function(e){
		var picker = Ti.UI.createPicker({
			type: Ti.UI.PICKER_TYPE_TIME
			});
			picker.showTimePickerDialog({
			callback : function(e){
			var time = e.value;
			}
			});
	});
	
	var criaAlarme = Titanium.UI.createButton({
		title: 'Criar Alarme',
		top:'550dp',
		height : 'auto',
		width: 'auto',
	    color:'white',
	    image: 'images/alarm.png',
	    borderRadius : 10,
	    borderColor : '#dd0000',
		backgroundColor : '#cc0000',
		selectedColor: '#fff000'
	  });
	
	criaAlarme.addEventListener('click',function(e){
		
		if(med==null){	
			med = new require('banco').medicamento(textAreaNome.getValue(), textAreaComposicao.getValue(), 
						textAreaConcentracao.getValue(), textAreaDose.getValue(), 
						textAreaFrequencia.getValue(), textAreaDuracao.getValue(), 
						textAreaObservacao.getValue());
		}
		var now = new Date().getTime()
	    var delta = now + (60 * 3000);
		var deltaMS = delta - now;
	 	    
	    alarmManager.addAlarmService({
	    	service:'DisparaAlarme.js',            
	        year: now.getYear(),
	        month: now.getMonth(),
	        day: now.getDate(),
	        hour: now.getHours(),
	        minute: now.getMinutes() + 2, //Set the number of minutes until the alarm should go off
	        repeat:(60 * 3000) //You can use the words hourly,daily,weekly,monthly,yearly or you can provide milliseconds.
	    });
	    
		
	    i++;
	    if( alarmes!=null && i<alarmes.length){
	    	carregaAlarme();
	    }
		});
	
	
	function carregaAlarme(){
		if(alarmes!=null){
			med = alarmes[i];
			textAreaNome.setValue(med.nome);
			textAreaComposicao.setValue(med.compos);
			textAreaConcentracao.setValue(med.concent);
			textAreaDose.setValue(med.dose);
			textAreaFrequencia.setValue(med.freq_int);
			textAreaDuracao.setValue(med.durac_int);
			textAreaObservacao.setValue(med.obs);
		}
	}
	
	

	win.add(imageTitle);

	var scrollView = Ti.UI.createScrollView({
		top:'25%',
		down: '65',
		contentWidth:'auto',
	    contentHeight:'auto',
	    showVerticalScrollIndicator:true,
	    showHorizontalScrollIndicator:true
	});
	
	scrollView.add(textAreaNome);
	scrollView.add(textAreaComposicao);
	scrollView.add(textAreaConcentracao);
	scrollView.add(textAreaDose);
	scrollView.add(textAreaFrequencia);
	scrollView.add(pickerFreq);
	scrollView.add(textAreaDuracao);
	scrollView.add(pickerDur);
	scrollView.add(textAreaObservacao);
	scrollView.add(labelDose);
	scrollView.add(textDia);
	scrollView.add(textHora);
	scrollView.add(criaAlarme);
	win.add(label);
	win.add(scrollView);
	win.open();
}

exports.insereManual = insereManual;