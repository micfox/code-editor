$(document).ready(function(){
    $(document).on("keypress","code",function(event){
	console.log(event.which);
	console.log(this.innerHTML);

	if(event.which == 13){
	    event.preventDefault();
	    $("<code contenteditable ='true'></code>").appendTo("pre");
	}
    });
});
