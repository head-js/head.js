import { UAParser } from './ua-parser-js/main/ua-parser';

const uaparser = UAParser();
console.log(uaparser);


const agent = {
  device: {
    type: uaparser.device.type,
    model: uaparser.device.model,
  },
};

export default agent;


// {
//     "ua": "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Mobile Safari/537.36",
//     "browser": {
//         "name": "Mobile Chrome",
//         "version": "140.0.0.0",
//         "major": "140"
//     },
//     "cpu": {},
//     "engine": {
//         "name": "Blink",
//         "version": "140.0.0.0"
//     },
//     "os": {
//         "name": "Android",
//         "version": "10"
//     }
// }
