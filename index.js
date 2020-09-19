const height = 200;
const width = 200;

let segments = [];
let s;
let v;
let v2;
function setup(){
  createCanvas(width, height)
  background(0)
  v = createVector(30, 50)
  v2 = createVector(70, 50)
  s = new Segment(v, v2)
  let a = s.kochA();
  let b = s.kochB();
  let c = s.kochC();
  let d = s.kochD();
  let e = s.kochE();

  stroke(255)
  line(a.x, a.y, e.x, e.y)

  stroke(255, 0, 0)
  line(a.x, a.y, b.x, b.y)

  stroke(0, 255, 0)
  line(d.x, d.y, e.x, e.y)

  stroke(0, 0, 255)
  line(b.x, b.y, c.x, c.y)
  line(c.x, c.y, d.x, d.y)

}

function draw(){

 

}