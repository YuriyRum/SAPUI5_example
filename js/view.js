function view(oController){
	var oSimpleForm = sap.ui.layout.form.SimpleForm("form1",
	{
		maxContainerCols: 1,
		content:[
			new sap.ui.commons.TextField({value:"test input field"}),
			new sap.ui.commons.Button({text:"test button", press:oController.buttonPress})
		]
	}).placeAt("content");	
};