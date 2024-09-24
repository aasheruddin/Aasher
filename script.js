const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// Set canvas size
const canvasWidth = 450; // Adjust this value to be slightly smaller than "Hi, it's Aasher"
canvas.width = canvasWidth;
canvas.height = 100; // Adjust this value to match the height of your "Hi it's Aasher" section

// Background
let bgX = 0;
const bgSpeed = 1;

// Mountains
const mountainWidth = canvasWidth;
const mountains = [
    {x: 100, y: 50, width: mountainWidth, height: 40},
    {x: mountainWidth, y: 50, width: mountainWidth, height: 40}
];

// Trees
const treeWidth = canvasWidth;
const trees = [
    {x: 0, y: canvas.height - 50, width: treeWidth, height: 40},
    {x: treeWidth, y: canvas.height - 50, width: treeWidth, height: 40}
];

function drawMountains() {
    ctx.strokeStyle = 'white';
    ctx.lineWidth = 1;
    mountains.forEach(mountain => {
        ctx.beginPath();
        for (let x = 0; x <= mountain.width; x += 25) {
            const height = Math.sin(x * 0.02) * 15 + mountain.height;
            ctx.lineTo(mountain.x + x - bgX, canvas.height - height);
        }
        ctx.lineTo(mountain.x + mountain.width - bgX, canvas.height);
        ctx.lineTo(mountain.x - bgX, canvas.height);
        ctx.stroke();
    });
}

function drawTrees() {
    ctx.strokeStyle = 'white';
    ctx.lineWidth = 1;
    trees.forEach(tree => {
        for (let x = 0; x <= tree.width; x += 50) {
            const treeHeight = Math.random() * 15 + 15;
            ctx.beginPath();
            ctx.moveTo(tree.x + x - bgX, tree.y + tree.height);
            ctx.lineTo(tree.x + x - bgX, tree.y + tree.height - treeHeight);
            ctx.lineTo(tree.x + x - 5 - bgX, tree.y + tree.height - treeHeight * 0.7);
            ctx.lineTo(tree.x + x + 5 - bgX, tree.y + tree.height - treeHeight * 0.7);
            ctx.closePath();
            ctx.stroke();
        }
    });
}

function update() {
    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Update background position
    bgX += bgSpeed;
    if (bgX >= mountainWidth) {
        bgX = 0;
    }

    // Update mountain positions
    mountains.forEach(mountain => {
        if (mountain.x - bgX <= -mountainWidth) {
            mountain.x += mountainWidth * 2;
        }
    });

    // Update tree positions
    trees.forEach(tree => {
        if (tree.x - bgX <= -treeWidth) {
            tree.x += treeWidth * 2;
        }
    });

    // Draw background elements
    drawMountains();
    drawTrees();

    // Request next frame
    requestAnimationFrame(update);
}

// Start the animation
update();