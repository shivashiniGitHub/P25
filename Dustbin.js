class dustbin{
    constructor(x,y,width,height){
        var options = {
         isStatic:  true,
      }
       this.body = Bodies.rectangle(x,y,width,height,options);
       this.width = width;
       this.height = height;
       this.image = loadImage("dustbin.png");
       World.add(world,this.body);
      }
      
      display(){
       var pos = this.body.position;
       imageMode(CENTER);
       //fill("red");
       image(this.image,1000,440,this.width,this.height)
      }
    }