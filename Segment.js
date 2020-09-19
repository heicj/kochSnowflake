class Segment{
  constructor(v1, v2){
    this.sp = createVector(v1.x, v1.y);
    this.ep = createVector(v2.x, v2.y);
  }

  kochA(){
    return this.sp;
  }

  kochB(){
    let copy = this.ep.copy();
    let d = copy.sub(this.sp);
    d.div(3)
    let b = d.add(this.sp)
    return b
  }

  kochC(){
    let sCopy = this.sp.copy();
    let eCopy = this.ep.copy();

    let v = eCopy.sub(sCopy);
    v.div(3)
    sCopy.add(v)

    angleMode(DEGREES)
    v.rotate(-60)
    sCopy.add(v);

    return sCopy
  }

  kochD(){
    let c = this.sp.copy();
    let d = c.sub(this.ep);
    console.log(d)
    d.div(3)
    let D = d.add(this.ep)
    return D
  }

  kochE(){
    return this.ep
  }

  draw(){
    line(this.sp.x, this.sp.y, this.ep.x, this.ep.y)
  }

}