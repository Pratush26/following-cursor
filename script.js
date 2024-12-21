let box = document.querySelector('#box')
let sp = document.querySelector('#cus')

box.addEventListener('mousemove',function(move){
    sp.style.left = move.x + "px";
    sp.style.top = move.y + "px";
})