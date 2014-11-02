$(document).ready(function(){
    $(document).on("keypress","code",function(event){
	console.log(event.which);
	console.log(this.innerHTML);

	if(event.which == 13){
	    event.preventDefault();
	    $("<code contenteditable ='true'></code>").appendTo("pre");
	}
    });
    
    $("#editor").keypress(function(event){
//	console.log(event.which);
	if(event.which == 13){
	    console.log();
//t	    console.log(Object.keys(editor.getCursorPosition()));
	    console.log(editor.getSession().getLine(editor.getCursorPosition().row));

	}
    });
});
