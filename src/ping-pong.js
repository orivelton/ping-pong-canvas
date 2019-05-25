class Vec {
  constructor(x = 0, y = 0) {
    this.x = x;
    this.y = y;
  }
}

class Rect {
  constructor(w, h) {
    this.pos = new Vec;
    this.size = new Vec(w,h);
  }
}

class Ball extends Rect {
  constructor () {
    super(10, 10);
    this.vel = new Vec;
  }
}


const canvas = document.getElementById('pong');
const context = canvas.getContext('2d');

context.fillStyle = '#000000';
context.fillRect(0, 0, canvas.width, canvas.height);

context.fillStyle = '#FFFFFF';
context.fillRect(0, 0, 10, 10);