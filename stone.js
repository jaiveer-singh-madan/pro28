class Stone
{
    constructor(x,y,r){
    var opTians={
        restitution:0,
        friction:1,
        isStatic:false,
        density:1.2
    } 
    this.x=x;
    this.y=y;
    this.radius=r;
    this.image=loadImage("sprites\Plucking mangoes/stone.png");
    this.body=Bodies.circle(x,y,r,opTians);
    World.add(world,this.body);
}
   display(){
       var ballpos=this.body.position;
       push()
       translate(ballpos.x,ballpos.y);
       strokeWeight(4);
       fill("purple");
       ellipse(0,0,this.r,this.r);
       imageMode(CENTER);
       image(this.image, 0, 0, this.radius);
       pop()
   }
}