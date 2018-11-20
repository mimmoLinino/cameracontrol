Stream = require('node-rtsp-stream');
stream = new Stream({
    name: 'name',
    streamUrl: 'rtsp://192.168.3.113:554/onvif1',
    wsPort: 9999
});
    
/*
const onvif = require('node-onvif');

// Create an OnvifDevice object
let device = new onvif.OnvifDevice({
  xaddr: 'http://192.168.3.113:5000/onvif/device_service',
  user : 'admin',
  pass : '123456'
});

// Initialize the OnvifDevice object
device.init().then(() => {
  // Get the UDP stream URL
  let url = device.getUdpStreamUrl();
  console.log(url);
}).catch((error) => {
  console.error(error);
});
*/