$(document).ready(function(){
    var v1,v2,sm;
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
//	    console.log(Object.keys(editor.getCursorPosition()));
//	    console.log(editor.getSession().getLine(editor.getCursorPosition().row));

	if(event.shiftKey && (event.which == 13)){
	    $.ajax({
	  url: '/post-line',
	  type: 'POST',
	  dataType: 'html',
	  data: editor.getSession().getLine(editor.getCursorPosition().row),
	  beforeSend: function(){
//	      console.log("before send");
	  },
	  success: function(data){
	      alert.html(data).fadeIn();
	      //form.tirgger('reset');
	      submit.html('Send Email');
	      console.log(data);
	  },
	  error: function(e){
	      console.log(e);
	  },		  
		  });}
    });

/*
    editor.on("change",function(e){
	//return "data"	
	//console.log(Object.keys(e));
	console.log(e.data);
    });
*/

});
