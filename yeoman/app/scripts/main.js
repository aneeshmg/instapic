/* Wait for device to be ready, then run onDeviceReady */

document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {

  alert("Device ready!");

}
