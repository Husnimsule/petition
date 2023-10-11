const hamburger = document.getElementById('open')

function show(){
    hamburger.style.display = "block";
    hamburger.style.right = "0px";
}

function hide(){
    hamburger.style.right = "-600px";

}

var canvas = document.getElementById("signature-pad");

function resizeCanvas() {
    var ratio = Math.max(window.devicePixelRatio || 1, 1);
    canvas.width = canvas.offsetWidth * ratio;
    canvas.height = canvas.offsetHeight * ratio;
    canvas.getContext("2d").scale(ratio, ratio);
}
window.onresize = resizeCanvas;
resizeCanvas();

var signaturePad = new SignaturePad(canvas, {
 backgroundColor: 'rgb(250,250,250)'
});

document.getElementById("clear").addEventListener('click', function(){
 signaturePad.clear();
})