
module.exports = {
	
	//connection to DB.
	connection: require('./../libConnectionSQL.js'),
	
	//function call when commande say in chat.
	func: function(target, context, msg, client){
		
		let username = context.username.replace(/[']/g, ''); //sanitise sql injection.
		
		//select user by name, for ask if exist.
		this.connection.flux(
		    "select * from user where (name like '"+username+"')",
			function(result, bagage){ //func call back.
			
		        //if error in request.
		        if(result == "error"){
		        	//say in chat.
		            bagage.client.say(bagage.target, "une erreur est survenue :'(");
		        }else if(result.length == 0){ //if user not inscrit.
		        	//insert user.
		        	bagage.connection.flux(
					    "insert into user (name) values ('"+bagage.username+"')", 
						function(result, bagage){
							if(result=="error")
								return;
					        //say in chat.
		                    bagage.client.say(bagage.target, "tu est inscrit, bienvenu :3");
						}, 
						bagage
					);
		        }else if(result[0].isPlay == 0){ //if user inscrit but not isPlay.
		            //switch bool user play mode.
		        	bagage.connection.flux(
					    "update user set isPlay = 1 where (name like '"+bagage.username+"')",
						function(result, gagage){
							if(result=="error")
								return;
		                    //say in chat.
		                    bagage.client.say(bagage.target, "tu a été inscrit dans la partie :D");
						},
						bagage
					);
		        }else{ //if user inscrit and isPlay.
		            //say in chat.
		            bagage.client.say(bagage.target, "tu est déja dans la partie :o");
		        }	
				
			},
			{ //bagage.
				target: target,
				context: context,
				client: client,
				connection: this.connection,
				username: username
			}
		);
		
	}
}