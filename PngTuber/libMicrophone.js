
module.exports = {

    //for use cmd linux.
    cmdPlayer: require('child_process'),

    //import for microphone.
    //recordMic: require('node-record-lpcm16'),

    //mic: null,
    //loudness: null,

    decibelRealTime: 0, //variable for store the amoung of decibel (update in real time) (0 to 12).

    async doEchantillonMic(){

        this.cmdPlayer.exec(
            `sox -t alsa default -n trim 0 0.1 stat 2>&1 | grep "RMS.*amplitude"`,
            (error, stdout, stderr) => {
                if (error) {
                    console.error(`Error in pipe sox microphone: ${error}`);
                    return;
                }
                //console.log(`stdout: ${stdout}`);
                //console.log(`stderr: ${stderr}`);

                const matchNum = stdout.match(/[0-9.]{1,}/);
                if(matchNum === null)
                    return;
                const db = Math.round(parseFloat(matchNum[0]) * 1000) / 10;
                this.decibelRealTime = db;
                //console.log(this.decibelRealTime);

            }
        );

    }

    /*/// ---
    init: function(){

        //build a record obj with params.
        const mic = this.recordMic.record({
            sampleRateHertz: 16000,
            threshold: 0, //no ceil max.
            verbose: false,
        });

        //exec a pipe cmd (rec mic into sox) in loudness.
        const loudness = this.cmdPlayer.exec(
            `rec -c 1 -r 44100 -b 16 -t wav - | sox -q -t wav - -n stat -s 16 | grep "RMS.*amplitude"`, //TODO : boost fréquence d'échantillonage.
            (error, stdout, stderr) => {
                if (error) {
                    console.error(`Error in pipe rec-sox microphone: ${error}`);
                    return;
                }
                //console.log(`stdout: ${stdout}`);
                //console.log(`stderr: ${stderr}`);
            }
        );

        mic.stream().pipe(loudness.stdin);

        loudness.stderr.on('data', (data) => {
            const output = data.toString();
            console.log('output from cmd rec-sox : '+output); //exemple : In:0.00% 00:00:03.16 [00:00:00.00] Out:131k  [   ===|===   ]        Clip:0
            
            return;

            const match = output.match(/\[.{6}\|.{6}\]/);
            if (match) {
                const fakeDecibel = (match[0].match(/[=!]/g) || []).length; //cast asci to volum (0 to 12).
                console.log(fakeDecibel);

                this.decibelRealTime = fakeDecibel; //edit in real time the decibel params.

            }
        });

        loudness.on('close', (code) => {
            console.log(`Process rec-sox microphone terminated with code : ${code}`);
        });

    },
    //*/// ---

};