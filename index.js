// Imports the Google Cloud client library
const {Storage} = require('@google-cloud/storage');
const axios = require('axios')
const storage = new Storage();
var download = require('download-file')

var url = "https://standalone-api.salestrail.io/export/calls/fd03dd81-a31a-486a-b865-403711da0e2e/recording"
const speech = require('@google-cloud/speech');
const baseURL = "https://standalone-api.salestrail.io/export/calls/json?from=2022-08-01T00%3A00%3A00.000Z&to=2022-08-04T00%3A00%3A00.000Z";
let data = [];
let recordingUrl = [];


const getRecordings = () => {
  try {
    axios.get(baseURL, {auth: {
      username: '3da3b45c-6be4-4871-ad82-65969c5363f4',
      password: 'x5sGiTTeZDCfFITLbF3OxUsf0z71Ie9iJTtKJSU3PpTXcskp43z75iKQZORf33ED'
    }}).then((response) => {
      data = response.data;
      data.map((item) => (
        item.recUrl && recordingUrl.push(item.recUrl)
      ))
      var options = {
        directory: "./resources/mp4audio/",
        filename: "file1.mp4"
    }
    
    download(recordingUrl, options, function(err){
        if (err) {
          console.log("err", err)
        }
        console.log("meow")
    })
    });
  } catch (error) {
    console.error(error)
  }
}
async function main() {
  const bucketName = 'speechtotext21';
  const client = new speech.SpeechClient();
  const gcsUri = 'gs://speechtotext21/audio-files/hindi2.mp3';
  // const file = fs.readFileSync(gcsUri);
  // const audioBytes = file.toString('base64');
  getRecordings();
  // const audio = {
  //   uri: gcsUri
  // };
  // const config = {
  //   encoding: 'mp3',
  //   sampleRateHertz: 16000,
  //   languageCode: 'hi-IN',
  // };
  // const request = {
  //   audio: audio,
  //   config: config,
  // };

  // Detects speech in the audio file
//   const [operation] = await client.longRunningRecognize(request);
//   const [response] = await operation.promise();
//   const transcription = response.results
//     .map(result => result.alternatives[0].transcript)
//     .join('\n');
//   console.log(`Transcription: ${transcription}`);
//   fs = require('fs');
// fs.writeFile('./resources/myFile.txt', transcription, [encoding], [callback])
//   storage
//   .bucket(bucketName)
//   .upload(transcription, { destination: 'transcriptionFiles/testing.json' })
//   .then(() => {
//     console.log('success');
//   })
//   .catch((err) => {
//     console.error('ERROR:', err);
//   });
  //Drive upload
}
main();
