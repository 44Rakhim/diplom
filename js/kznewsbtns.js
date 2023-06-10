const btn1 = document.querySelector('#nbtn1');
const btn2 = document.querySelector('#nbtn2');
const iframe = document.querySelector('#myIframe');

btn1.addEventListener('click', function() {
    iframe.src = 'kznews-1.html';
});
btn2.addEventListener('click', function() {
    iframe.src = 'kznews-2.html';
});