
module.exports = {
    
    //var stock all commande obj.
    listCommandesArray: [],
	
    //geter listCommandes
    listCommandes: function(){
		if(this.listCommandesArray.length==0){ //init all command on the first call.

			//cmd viewers.
			this.commande('miaou', 'viewer');
			this.commande('hug', 'viewer');
			this.commandeCustomName('kiss', 'viewer', 'hug');
			this.commande('uwu', 'viewer');
			this.commande('pipou', 'viewer');
			this.commande('whip', 'viewer');
			this.commande('vineboom', 'viewer');
			this.commandeCustomName('boom', 'viewer', 'vineboom');

			//cmd pseudo.
			this.commande('axo', 'viewer');
			this.commandeCustomName('waf', 'viewer', 'axo');
			//this.commande('chlow', 'viewer'); //DOTO: ask chlow permission !!!
			//this.commandeCustomName('chl0w', 'viewer', 'chlow');
			//this.commandeCustomName('csc', 'viewer', 'chlow');
			this.commande('damn', 'viewer');
			this.commandeCustomName('ria', 'viewer', 'damn');
			//this.commande('blaca', 'viewer'); //DOTO: ask blaca permission !!!
            this.commande('malaise', 'viewer');
			this.commandeCustomName('babulle', 'viewer', 'malaise');
			
			//links.
			this.commande('discord', 'viewer');
			this.commande('youtube', 'viewer');
			this.commandeCustomName('ytb', 'viewer', 'youtube');
			
			//for broadcaster.
			this.commande('pinglive', 'modo');
			this.commandeCustomName('pingstream', 'modo', 'pinglive');
			this.commande('axohat', 'modo');
			
			//for broadcaster.
			this.commande('debug', 'broadcaster');
			this.commande('eval', 'broadcaster');
			//this.commande('wholive', 'broadcaster'); //FIXME : debug call fetch.
			//this.commandeCustomName('whostream', 'broadcaster', 'wholive');

			//forgoten cmd.
			//this.commande('play', 'viewer');
			//this.commande('pngtuber', 'viewer');
			//this.commande('pat', 'viewer');
			//this.commande('obsLayer', 'broadcaster');

		}
    	return this.listCommandesArray;
    },
    
    //push a new obj commande in array.
    commande: function(name, permissions){
		this.commandeCustomName(name, permissions, name);
    },

    //push a new obj commande in array.
	commandeCustomName: function(nameCmd, permissions, nameLib){
		this.listCommandesArray.push({
			name: nameCmd,
			permissions: permissions,
			requiredScript: require('./commandes/'+nameLib+'.js'),
			
    	    //call exec for filtre permissions befor launch func.
			exec: function(target, context, msg, client){

				let isPermissionValid = false;

				switch(this.permissions){

					case('viewer'):

						isPermissionValid = true; //all time valid.

						break;

					case('sub'):

						if(context['subscriber']){ //valid if user is subscriber.
							isPermissionValid = true;
							break;
						}

						if(context['badges'] === undefined){ //skip if has no badges.
							break;
						}

						if( //if user has badges and badges is modo (or sup).
							context['badges']['moderator'] || 
							context['badges']['broadcaster']
						)
							isPermissionValid = true;

						break;

					case('vip'):

						if(context['badges'] === undefined){ //skip if has no badges.
							break;
						}

						if( //if user has badges and badges is VIP (or sup).
							context['badges']['vip'] || 
							context['badges']['moderator'] || 
							context['badges']['broadcaster']
						)
							isPermissionValid = true;

						break;

					case('modo'):

						if(context['badges'] === undefined){ //skip if has no badges.
							break;
						}

						if( //if user has badges and badges is modo (or sup).
							context['badges']['moderator'] || 
							context['badges']['broadcaster']
						)
							isPermissionValid = true;
	
						break;

					case('broadcaster'):

						if(context['badges'] === undefined){ //skip if has no badges.
							break;
						}

						if( //if user has badges and badges is broadcast.
							context['badges']['broadcaster']
						)
							isPermissionValid = true;
	
						break;

				}

    			if(isPermissionValid){

					try{
						this.requiredScript.func(target, context, msg, client);
					}catch(e){
						client.say(target, "sowwy, la commande à crash éwè");
						console.log(e);
					}
					
    			}else{
    				client.say(target, "sowwy, tu n'a pas la permission pour cette commande éwè");
				}
    		}
		});
	}

}
