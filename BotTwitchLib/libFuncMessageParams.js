
module.exports = {

	//function for get commande to array of params.
	func: function(msg){
	
	    if(/^[!]{1}.{1,}[( ]{1}.{1,}$/.test(msg)){ //params sintax like function js !cmd(a, b, c) or !cmd a b c
		
			/*/// ----> holder vertion (get params by erase start and end msg).
		    let paramsStr = msg.replace(/^[!]{1}.{1,}[( ]{1}/, ''); //delete start.
		    paramsStr = paramsStr.replace(/[)]{0,1}$/, ''); //delete end.
			//*/// ---->

			//*/// ----> new vertion (get params by params).
			let paramsStr = (/[( ]{1}.{1,}$/).exec(msg)[0];
			paramsStr = paramsStr.substring(1).replace(/[)]$/, '');
			//*/// ---->
			
			const paramsArr = paramsStr.split(/, |,| /); //split all params.
			
			return paramsArr;
		
		}else{
		    return [];
		}
	
	},

	//return params of commande (full rest line).
	getRestParam: function(msg){

		return msg.replace(/^![a-zA-Z0-9_-]{1,}[( ]{1}/, '');

	}

}