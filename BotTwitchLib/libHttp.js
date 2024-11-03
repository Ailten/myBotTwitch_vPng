
module.exports = {
	
    //lib https for send call in https.
    https: require('https'),

    send: function(url, objData, funcSuccess=null, funcError=null){

        //*// -------------------->>
        //data to send cast in string.
        const jsonData = JSON.stringify(objData);

        //get hostname from url.
        const hostnameArr = (/http[s]{0,}:\/\/.{1,}\//).exec(url);
        if(hostnameArr.length == 0){
            console.log('http call can be split the url correctly.');
            return;
        }
        let hostname = hostnameArr[0].substring(0, hostnameArr[0].length-1);
        const path = url.substring(hostname.length);
        hostname = hostname.replace(/http[s]{0,}:\/\//, '');

        //build options of call http.
        const options = {
            hostname: hostname,
            port: 443,
            path: path,
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Content-Length': Buffer.byteLength(jsonData)
            }
        };

        let request = this.https.request(
            options, 
            function(responce){

                if(responce.statusCode != 200){
                    console.log('error in return of call http')
                    console.log('responce.statusCode : '+responce.statusCode);
                    console.log('responce.headers : '+responce.headers);
                    return;
                }

                let reponceStacked = '';

                //get data by many packages.
                responce.on('data', (dataPackage) => {
                    reponceStacked += dataPackage.toString();
                });

                //all packages are stacked.
                responce.on('end', () => {

                    let data;

                    //string to json reponceStacked.
                    try{
                        data = JSON.parse(reponceStacked);
                    }catch(error){
                        console.log('error on merging responce packages from http back');
                        console.log(error);
                        console.log('data from call : '+reponceStacked);
                    }

                    if(funcSuccess != null)
                        funcSuccess(data);

                });
            }
        );

        request.on('error', (error) => {
            console.log('error on call http');
            console.log(error);

            if(funcError != null)
                funcError(error);
        });

        request.write(jsonData);
        request.end();
        //*/// -------------------->>

    },

    sendToReplObsLayer: function(nameLayer, typeLayer){

        //send call.
        this.send(
            'https://e2c590ee-9fe8-4143-8d18-644bbf113540-00-52zypgmj6zet.kirk.replit.dev/write.php',
            {
                name: nameLayer,
                type: typeLayer,
                time: new Date().getTime()
            }
        );

    },

    sendToReplObsLayerMp3: function(nameLayer, volume, delayPlayed){

        //send call.
        this.send(
            'https://e2c590ee-9fe8-4143-8d18-644bbf113540-00-52zypgmj6zet.kirk.replit.dev/write.php',
            {
                name: nameLayer,
                type: 'mp3',
                time: new Date().getTime(),
                volume: volume, //facultatif.
                delayPlayed: delayPlayed //facultatif.
            }
        );

    },

    sendToReplObsLayerMp4: function(nameLayer, volume, delayPlayed){

        //send call.
        this.send(
            'https://e2c590ee-9fe8-4143-8d18-644bbf113540-00-52zypgmj6zet.kirk.replit.dev/write.php',
            {
                name: nameLayer,
                type: 'mp4',
                time: new Date().getTime(),
                volume: volume, //facultatif.
                delayPlayed: delayPlayed //facultatif.
            }, 
            null, 
            null
        );

    },

    sendHeader: function(url, objData, funcSuccess=null, funcError=null){

        /*// -------------------->> fetch methode.
        const responce = await fetch(
            url,
            objData
        );

        console.log('responce from fetch');
        console.log(responce);
        //*/// -------------------->>

        ///*// -------------------->>
        //get hostname from url.
        const hostnameArr = (/^http[s]{0,}:\/\/[a-zA-Z0-9-_.]{1,}/).exec(url); //"https://api.twitch.tv/helix/users?login=toto"
        if(hostnameArr.length == 0){
            console.log('http call can be split the url correctly.');
            return;
        }
        let hostname = hostnameArr[0];
        const path = url.substring(hostname.length);
        hostname = hostname.replace(/^http[s]{0,}:\/\//, '');

        //build options of call http.
        objData['hostname'] = hostname;
        objData['path'] = path;

        let request = this.https.request(
            objData, 
            function(responce){

                if(responce.statusCode != 200){
                    console.log('error in return of call http')
                    console.log('responce.statusCode : '+responce.statusCode);
                    console.log('responce.headers : '+responce.headers);
                    return;
                }

                let reponceStacked = '';

                //get data by many packages.
                responce.on('data', (dataPackage) => {
                    reponceStacked += dataPackage.toString();
                });

                //all packages are stacked.
                responce.on('end', () => {

                    let data;

                    //string to json reponceStacked.
                    try{
                        data = JSON.parse(reponceStacked);
                    }catch(error){
                        console.log('error on merging responce packages from http back');
                        console.log(error);
                        console.log('data from call : '+reponceStacked);
                    }

                    if(funcSuccess != null)
                        funcSuccess(data);

                });
            }
        );

        request.on('error', (error) => {

            if(funcError != null)
                funcError(error);

        });

        request.end();
        //*/// -------------------->>
    }

}
