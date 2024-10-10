class Snake {
  constructor() {
    this.body = [];
    this.body[0] = createVector(floor(w / 2), floor(h / 2));
    this.xdir = 0;
    this.ydir = 0;
  }
  
  setDir(x, y) {
    this.xdir = x;
    this.ydir = y;
  }
  
  update() {
    let head = this.body[this.body.length - 1].copy();
    this.body.shift();
    head.x += this.xdir;
    head.y += this.ydir;
    this.body.push(head);
  }
  
  eat(pos) {
    let head = this.body[this.body.length - 1];
    if (head.x === pos.x && head.y === pos.y) {
      this.body.push(createVector(pos.x, pos.y));
      return true;
    }
    return false;
  }
  
  show() {
    for (let segment of this.body) {
      fill(148,0,211);
      rect(segment.x, segment.y, 1, 1);
    }
  }
  
  endGame() {
    let head = this.body[this.body.length - 1];
    if (head.x < 0 || head.x >= w || head.y < 0 || head.y >= h) {
      return true; 
    }
    for (let i = 0; i < this.body.length - 1; i++) {
      if (this.body[i].x === head.x && this.body[i].y === head.y) {
        return true; 
      }
    }
    return false;
  }
}
