const canvas = document.getElementById("background");
const context = canvas.getContext("2d");
mousex = 0;
mousey = 0;
onmousemove = function (e) { mousex = e.clientX, mousey = e.clientY }

let width, height;
const particles = [];

function resize() {
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;
}

function getColor() {
    let elem = document.getElementById("help");
    rgb = window.getComputedStyle(elem).color;


    return rgb

}

class Particle {
    constructor() {
        this.posX = Math.random() * width;
        this.posY = Math.random() * height;
        this.radius = 3;
        this.speedX = (Math.random() - 0.5) * 2;
        this.speedY = (Math.random() - 0.5) * 2;
        this.color = "#000000";
    }

    update() {

        try {
            this.color = getColor(false);
        }
        catch (e) {
            console.warn(e);

        }
        const dx = mousex - this.posX;
        const dy = mousey - this.posY;
        const ds = Math.sqrt(dx * dx + dy * dy);


        if (ds < 100) {
            this.speedX = - (dx) * 0.125;
            this.speedY = - (dy) * 0.125;
        }


        if (this.posX + this.radius > width) {
            this.speedX = -this.speedX + Math.random();
            this.posX = width - this.radius;
        }
        if (this.posX - this.radius < 0) {
            this.speedX = -this.speedX + Math.random();
            this.posX = 0 + this.radius;
        }


        if (this.posY + this.radius > height) {
            this.speedY = -this.speedY + Math.random();
            this.posY = height - this.radius;
        }
        if (this.posY - this.radius < 0) {
            this.speedY = -this.speedY + Math.random();
            this.posY = 0 + this.radius;
        }




        this.speedX = this.speedX / 1.01;
        this.speedY = this.speedY / 1.01;



        this.posX += this.speedX;
        this.posY += this.speedY;
    }

    draw() {
        context.beginPath();
        context.arc(this.posX, this.posY, this.radius, 0, Math.PI * 2);
        context.fillStyle = this.color;
        context.fill();
        context.closePath();
    }
}

function createDots(num) {
    for (let i = 0; i < num; i++) {
        particles.push(new Particle());
    }
}

function distance(dot1, dot2) {
    const dx = dot1.posX - dot2.posX;
    const dy = dot1.posY - dot2.posY;
    return Math.sqrt(dx * dx + dy * dy);
}

function drawLines() {
    for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
            const dist = distance(particles[i], particles[j]);

            if (dist < 200) {
                const opacity = 1 - dist / 200;
                context.beginPath();
                context.moveTo(particles[i].posX, particles[i].posY);
                context.lineTo(particles[j].posX, particles[j].posY);
                rgb = getColor().replace(/[^\d,]/g, '').split(',');
                context.strokeStyle = 'rgba(' + rgb[0] + ',' + rgb[1] + ',' + rgb[2] + `, ${opacity})`;
                context.lineWidth = particles[i].radius / 1;
                context.stroke();
                context.closePath();
            }
        }
    }
}

function animate() {
    context.clearRect(0, 0, width, height);
    for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();
    }
    drawLines();
    requestAnimationFrame(animate);
}

resize();
createDots(100);
animate();

window.addEventListener("resize", resize);