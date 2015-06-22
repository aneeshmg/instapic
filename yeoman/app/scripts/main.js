/* Wait for device to be ready, then run onDeviceReady */

document.addEventListener("deviceready", onDeviceReady, false);

var sources = [
  'http://lorempixel.com/480/640/',
  'http://thecatapi.com/api/images/get?&type=jpg&size=med'
];
// More sources can be added

function onDeviceReady() {

  var imageUrl = sources[Math.ceil(Math.random() * 10) % sources.length];
  
  $('#board').append('<img src="' + imageUrl + '"></img>');

}
