const height = 800;
const width = 800;

let segments;
let s;
// let point;
let v;
let v2;
let startPX = 120;
let startPY = 200;
let len = 600;

function setup(){
  createCanvas(width, height)
  background(0)
  segments = [];

  v = createVector(startPX, startPY)
  v2 = createVector(startPX + len, startPY)
  s = new Segment(v, v2) //top of initial triangle

  let s2 = v.copy(); //so not to mess with original vectors I copy them
  let s2e = v2.copy();
  let dis = s2e.sub(s2)
  angleMode(DEGREES)
  dis.rotate(60)
  s2.add(dis)  //at the point to draw equalateral triangle to

  stroke(255)

  let sideLV = new Segment(s2, v)  //make left side of triangle
  let sideRV = new Segment(v2, s2) //make right side of triangle


  //add to array to create begining array
  segments.push(sideLV)
  segments.push(sideRV)
  segments.push(s)

  //draw the triangle
  for(let i = 0; i < segments.length; i++){
    stroke(255)
    segments[i].draw()
  }
}


function mouseClicked(){
  generate()
}


//loop through all Segments in Segments array
//find the 5 points needed to create next generation
//create new Sements using points
//draw lines then push to next array. set Segments array to next
function generate(){
  background(0)
  let next = []
  for(let i = 0; i < segments.length; i++){
    //get points
    let a = segments[i].kochA();
    let b = segments[i].kochB();
    let c = segments[i].kochC();
    let d = segments[i].kochD();
    let e = segments[i].kochE();

    //new segments
    let n1 = new Segment(a, b)
    let n2 = new Segment(b, c)
    let n3 = new Segment(c, d)
    let n4 = new Segment(d, e)
  
    //draw lines
    strokeWeight(.5)
    n1.draw()
    n2.draw()
    n3.draw()
    n4.draw()
   
    next.push(n1)
    next.push(n2)
    next.push(n3)
    next.push(n4)
  }
  segments = next;
}

