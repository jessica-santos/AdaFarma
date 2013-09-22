	function listAlarme() {
	var win = Ti.UI.createWindow({
		title:"title",
		backgroundColor:'white'
	});
	
	var win = Ti.UI.createWindow({
		backgroundColor: '#f5f5dc',
		navBarHidden: true,
		exitOnClose: false
	});
	
	var removendo = [false , false];
	
	var imageTitle = Ti.UI.createImageView({
		  top: '0',
		  image:'/title.png'
		});
	
	win.add(imageTitle)

	// Create a custom template that displays an image on the left, 
	// then a title next to it with a subtitle below it.
	var myTemplate = {
	    childTemplates: [
	        {                            // Image justified left
	            type: 'Ti.UI.ImageView', // Use an image view for the image
	            bindId: 'pic',           // Maps to a custom pic property of the item data
	            properties: {            // Sets the image view  properties
	                width: '50dp', height: '50dp', left: 0
	            }
	        },
	        {                            // Title 
	            type: 'Ti.UI.Label',     // Use a label for the title 
	            bindId: 'info',          // Maps to a custom info property of the item data
	            properties: {            // Sets the label properties
	                color: '#cc0000',
	                font: { fontFamily:'Arial', fontSize: '14dp', fontWeight:'bold' },
	                left: '60dp', top: 0
	            }
	        },
	        {                            // Subtitle
	            type: 'Ti.UI.Label',     // Use a label for the subtitle
	            bindId: 'es_info',       // Maps to a custom es_info property of the item data
	            properties: {            // Sets the label properties
	                color: '#e4717a',
	                font: { fontFamily:'Arial', fontSize: '14dp' },
	                left: '60dp', top: '25dp',
	            }
	        },
	        {                            // Subtitle
	            type: 'Titanium.UI.Button',     // Use a label for the subtitle
	            bindId: 'bt_excluir',       // Maps to a custom es_info property of the item data
	            properties: {            // Sets the label properties
	            	title: 'X',
	                color: '#cc0000',
	                backgroundColor:'transparent',
	                borderColor: 'transparent',
	                font: { fontFamily:'Arial', fontSize: '20dp', fontWeight : 'bold'},
	                right: 0, top: 12,
	            	},
	            	events:
	         	   {
	         		   click: removeAlarme
	         	   }
	        	}
	    ]
	};

	var listView = Ti.UI.createListView({
	    // Maps myTemplate dictionary to 'template' string
	    templates: { 'template': myTemplate },
	    borderColor:'transparent',
	    top: '60dp',
	    // Use 'template', that is, the myTemplate dict created earlier
	    // for all items as long as the template property is not defined for an item.
	    defaultItemTemplate: 'template'
	});

	var remedioSection = Ti.UI.createListSection();
	var remedioDataSet = [
	    // the text property of info maps to the text property of the title label
	    // the text property of es_info maps to text property of the subtitle label
	    // the image property of pic maps to the image property of the image view
	    { info: {text: 'Anador'}, es_info: {text: '12:00'}, pic: {image: 'images/pill.png'}},
	    { info: {text: 'Loprazol'}, es_info: {text: '20:00'}, pic: {image: 'images/pill.png'}}
	];
	remedioSection.setItems(remedioDataSet);
	
	function removeAlarme(e){
		removendo[e.itemIndex] = true;
		Ti.UI.createAlertDialog({	        		   
		   		title:'Info', message:"Você está removendo o alarme"+e.itemIndex,
		   		buttonNames:[Ti.Android.currentActivity.getString(Ti.Android.R.string.ok)]
	   			}).show()
	   			
	   	remedioSection.deleteItemsAt(e.itemIndex,1);
	}

	listView.sections = [remedioSection];
	listView.addEventListener('itemclick', function(e){
		if(!removendo[e.itemIndex]){
	    var item = remedioSection.getItemAt(e.itemIndex);
	    Ti.UI.createAlertDialog({	        		   
		   		title:'Info', message:"Você clicou no alarme"+remedioSection.getItemAt(e.itemIndex).info.text,
		   		buttonNames:[Ti.Android.currentActivity.getString(Ti.Android.R.string.ok)]
	   			}).show()
		}
	    //abrir tela com os dados do remédios
	});
	win.add(listView);
	win.open();
}

exports.listAlarme = listAlarme;