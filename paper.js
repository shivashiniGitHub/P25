class paper{
 constructor(x,y,r){
     var option = {
      isStactic:false,
      restitution:0.3,
      friction:1,
      density:1.2
    }

   this.x = x;
   this.y = y;
   this.r = r;
   this.body = Bodies.circle(this.x,this.y,this.r/2,option);
   this.image = loadImage("crushedPaper.png");
   World.add(world,this.body);
  }
 display(){
   var pos = this.body.position;
   push();
   translate(pos.x,pos.y);
   imageMode(CENTER);
   strokeWeight(3);
   fill(255,0,255);
   this.image.scale =0.115;
   image(this.image,0,0,this.r,this.r);
   pop();
  }
}



















//display(){
  //var pos = this.body.position;
  //push();
  //translate(pos.x,pos.y);
  //rectMode(CENTER);
  //strokeWeight(3);
  //fill(255,0,255);
  //ellipse(0,0,this.r,this.r);
  //pop();
// }