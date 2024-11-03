
module.exports = {
	
    //lib fs for crud in files.
    fs: require('fs'),

    write: function(objData, filePath, funcSuccess=null, funcError=null){

        const jsonData = JSON.stringify(objData);

        this.fs.writeFile(
            filePath, //path.
            jsonData, //data.
            (err) => { //function error.
                if(err && funcError!=null)
                    funcError(err);
                else if(funcSuccess!=null)
                    funcSuccess();
            }
        );

    },

    writeBufferPngTuber: function(nameLayer, cmd, funcSuccess=null, funcError=null){
        this.write(
            {
                nameLayer: nameLayer,
                cmd: cmd,
            }, 
            '/home/faouzi/Documents/myProjectsZig/zigTuber_v1.4_linux/assets/fileAccesory/fileAccesory.json',
            funcSuccess, 
            funcError);
    }

}