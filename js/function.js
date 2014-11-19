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
	var text;
	if(event.shiftKey && (event.which == 13)){
	    text=editor.getSession().getLine(editor.getCursorPosition().row);
//	    console.log(text);
	    $.ajax({
	  url: '/post-line',
	  type: 'POST',
	  dataType: 'html',
	  data: {'text': text},
	  beforeSend: function(){
//	      console.log("before send");
	  },
	  success: function(data){
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
    $("#saveBtn").click(function(){
	console.log(editor.getValue());
	$.ajax({
	    url: '/save-text',
	    type: 'POST',
	    dataType: 'html',
	    data: {'text': editor.getValue()},
	    success: function(data){
//		console.log(data);
	    },
	})
    });
    
    $("#loadBtn").click(function(){
	    $.ajax({
	  url: '/get-text',
	  type: 'POST',
	  dataType: 'html',
	  beforeSend: function(){
	  },
	  success: function(data){
	  editor.setValue(data);
	  },});
    });

    $("#analyzeBtn").click(function(){
	$.ajax({
	    url: '/analyze-text',
	    type: 'POST',
	    dataType: 'html',
	    success: function(data){
		editor.setValue(data);
	    },
	});
    });
});
