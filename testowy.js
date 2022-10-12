function ball(){
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.beginPath();
    ctx.arc(x, y, 10, 0, Math.PI*2);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}

function draw_down() {
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.clearRect(0, 0, c.width, c.height);
    x = x;
    y = y + 10;
    ball();
}

function draw_up() {
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.clearRect(0, 0, c.width, c.height);
    x = x;
    y = y - 10;
    ball();
}

function draw_left() {
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.clearRect(0, 0, c.width, c.height);
    x = x - 10;
    y = y;
    ball();
}

function draw_right() {
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.clearRect(0, 0, c.width, c.height);
    x = x + 10;
    y = y;
    ball();
}

window.addEventListener('keydown', (e) => {
    //console.log(e.key);

    if(e.key=="r"){
        console.log("rotacja");
    }
    else if(e.key=="ArrowUp"){
        console.log("strzalka w gore");
        draw_up();
    }
    else if(e.key=="ArrowDown"){
        console.log("strzalka w dol");
        draw_down();
    }
    else if(e.key=="ArrowRight"){
        console.log("strzalka w prawo");
        draw_right();
    }
    else if(e.key=="ArrowLeft"){
        console.log("strzalka w lewo");
        draw_left();
    }
    else if(e.key=="Escape"){
        console.log("Pauza");
        var c = document.getElementById("myCanvas");
        var ctx = c.getContext("2d");
    }
} );