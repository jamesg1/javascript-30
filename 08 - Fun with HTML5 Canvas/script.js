// Initialise Canvas
const canvas = document.querySelector('#draw');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Initialise Line Style
ctx.strokeStyle = '#BADA55';
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 100;

let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;
let lineWidthdirection = true;

function drawLine(e) {
    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
    ctx.beginPath();
    // start from
    ctx.moveTo(lastX, lastY);
    // go to
    ctx.lineTo(e.offsetX, e.offsetY);

    ctx.stroke();
    [lastX, lastY] = [e.offsetX, e.offsetY];
}

function draw(e) {
    if (!isDrawing) return; // stop function from running when mouse not down
    //console.log(e);

    drawLine(e);
    incrementHue();
    switchLineWidthDirection();
    changeLineWidth();
}

function incrementHue() {
    hue++;
    if (hue >= 360) {
        hue = 0;
    }
}

function switchLineWidthDirection() {
    if (ctx.lineWidth >= 100 || ctx.lineWidth <= 1) {
        lineWidthdirection = !lineWidthdirection;
    }
}

function changeLineWidth() {
    if (lineWidthdirection) {
        ctx.lineWidth++;
    } else {
        ctx.lineWidth--;
    }
}

canvas.addEventListener('mousedown', (e) => {
    isDrawing = true;
    [lastX, lastY] = [e.offsetX, e.offsetY];
});

canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);