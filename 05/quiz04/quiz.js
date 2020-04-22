var $target = document.getElementById('box');
var sX = 0, sY = 0, left = 0, top = 0, cX = 0, cY = 0;

function dragStart() {
    var $target = document.getElementById('box');
    var e = window.event;
    
    sX = e.clientX;
    sY = e.clientY;
    left = $target.offsetLeft;
    top = $target.offsetTop;

    $target.addEventListener('mousemove', draging);
    document.addEventListener('mouseup', dragdrop);
}
function draging() {
    var e = window.event;
    var $target = document.getElementById('box');
    var cX = e.cX;
    var cY = e.cY;
    var rX = cX - sX;
    var rY = cY - sY;
    
    
    $target.style.left = (left + rX)+"px";
    $target.style.top = (top + rY)+"px";
    $target = document.getElementById('box');
}

function dragdrop() {
    var $target = document.getElementById('box');
    $target.removeEventListener('mousedown', dragStart);
    $target.removeEventListener('mousemove', draging);
    $target.removeEventListener('mousedrop', dragdrop);
    console.log('마우스 클릭 해제');
}

function EventAdder() {
    var $target = document.getElementById('box');
    $target.addEventListener('mousedown', dragStart);
}


$target.addEventListener('click', EventAdder);