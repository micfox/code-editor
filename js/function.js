$(document).ready(function(){
    var v1,v2,x;
    $(document).on("keypress","code",function(event){
	console.log(event.which);
	console.log($(this).text());
	//console.log($(this).parent().html());

	//console.log(this.outerHTML);
	if(event.which == 13){
	    event.preventDefault();
	 //   $("<code contenteditable ='true'></code>").appendTo("pre");
	//	var newWrapper = document.createElement('ntag');
		$("<code contenteditable ='true'></code>").appendTo($(this).parent());
		$(this).replaceWith("<b>" + this.outerHTML + "</b>");

	}
    });
  
    /*  
    $("#editor").keypress(function(event){
//	console.log(event.which);
	if(event.which == 13){
	    console.log();
//t	    console.log(Object.keys(editor.getCursorPosition()));
	    console.log(editor.getSession().getLine(editor.getCursorPosition().row));
	}
    });
    */


});
