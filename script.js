const button1 = document.getElementById('trailer-button1')
const button2 = document.getElementById('trailer-button2')
const button3 = document.getElementById('trailer-button3')

const trailer1 = document.getElementById('trailer1')
const trailer2 = document.getElementById('trailer2')
const trailer3 = document.getElementById('trailer3')

function playVideo1() {
    document.getElementById('video2').pause();
    document.getElementById('video3').pause();
  }
  
function playVideo2() {
    document.getElementById('video1').pause();
    document.getElementById('video3').pause();
}

function playVideo3() {
    document.getElementById('video1').pause();
    document.getElementById('video2').pause();
}

button1.addEventListener("click", function() {
    trailer1.style.display = "flex";
    trailer2.style.display = "none";
    trailer3.style.display = "none";
});

button2.addEventListener("click", function() {
    trailer1.style.display = "none";
    trailer2.style.display = "flex";
    trailer3.style.display = "none";
});

button3.addEventListener("click", function() {
    trailer1.style.display = "none";
    trailer2.style.display = "none";
    trailer3.style.display = "flex";
});

console.log('funfo')