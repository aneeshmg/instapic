/* Wait for device to be ready, then run onDeviceReady */

document.addEventListener("deviceready", onDeviceReady, false);

var sources = [
  'http://lorempixel.com/480/640/',
  'http://thecatapi.com/api/images/get?&type=jpg&size=med'
];
// More sources can be added

function onDeviceReady() {

  LoadImage();
  
  $('#newImage').click(function() {

    var canvas = document.getElementById('board');
    var context = canvas.getContext('2d');
    context.clearRect(0, 0, canvas.width, canvas.height);
    LoadImage();
  });

}

function LoadImage() {

  var imageUrl = sources[Math.ceil(Math.random() * 10) % sources.length];
  
  var ctx = $("canvas")[0].getContext("2d"),
      img = new Image();
    
  img.onload = function(){
    ctx.drawImage(img, 0, 0);
  };
    
  img.src = imageUrl;
  
}
