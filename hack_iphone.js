function andmak_is_iOS() {
var iDevices = ['iPad Simulator','iPhone Simulator','iPod Simulator','iPad','iPhone','iPod'];
 
if (!!navigator.platform) {
while (iDevices.length) {
if (navigator.platform === iDevices.pop()){ return true; }
}
}
 
return false;
}
if(andmak_is_iOS()==true){
var andmak_w = window.screen.width;
var andmak_style = document.createElement('style');
andmak_style.type = 'text/css';
andmak_style.innerHTML = 'body{width:'+andmak_w+'px;}';
document.getElementsByTagName('head')[0].appendChild(andmak_style);
 
}
