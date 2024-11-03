
module.exports = {

    childProcess: require('child_process'),

    playMp3: function(urlMp3, volume=100){

        this.childProcess.exec(`ffplay -v 0 -nodisp -autoexit -volume ${volume} ${urlMp3}`, (error, stdout, stderr) => {

            if (error) {
              console.error(`Error in mp3 player (error) : ${error.message}`);
              return;
            }
            if (stderr) {
              console.error(`Error in mp3 player (stderr) : ${stderr}`);
              return;
            }

            //console.log(stdout);

        });

    }

};