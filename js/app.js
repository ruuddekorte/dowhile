(function main(){

	$('#idbtn').click(function(){
		testWhile();
	});

	function testWhile(){
		var chaine="";

		do { 
			chaine=prompt('saisir text avec le caractère " :', 'text ici');
			}
		while (chaine.indexOf('"')==-1)    
			alert('La chaine entrée est "'+chaine+'"');
	}

})();