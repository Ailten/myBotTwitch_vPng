

module.exports = {

	exportConnection: function(){

		//canvas.
		let returnObj = {
			mysql: undefined,
			connection: undefined,
			flux: undefined
		};

		//import sql lib.
		returnObj.mysql = require('mysql');

		//log to db.
		returnObj.connection = returnObj.mysql.createConnection({
    	    host: "localhost",
    	    user: "root",
    	    password: "",
    	    database: "TwitchDB"
    	});

		//flux to db.
		returnObj.flux = function(sql, func, bagage=null){
			var connection = this.connection;
			connection.connect(function(error){
				if(error)
					func('error', bagage); //throw error;
				return connection.query(sql, function(error, result, fields){
					if(error)
						func('error', bagage); //throw error;
					func(result, bagage);
				})
			})
		}

		//return.
		return returnObj;

	}

};
