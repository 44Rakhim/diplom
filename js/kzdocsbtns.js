const btn1 = document.querySelector('#dbtn1');
const btn2 = document.querySelector('#dbtn2');
const btn3 = document.querySelector('#dbtn3');
const iframe = document.querySelector('#myIframe');

btn1.addEventListener('click', function() {
  iframe.src = 'kzdocks-1.html';
});
btn2.addEventListener('click', function() {
  iframe.src = 'kzdocks-2.html';
});
btn3.addEventListener('click', function() {
  iframe.src = 'kzdocks-3.html';
});