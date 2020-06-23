class Polygon{
    constructor(x,y,radius){
        this.body= Bodies.circle(x,y,radius);
        this.radius= radius;
        this.image=loadImage("pentagon.png");
        World.add(world,this.body);
    }
    display(){
        var pos= this.body.position;
        push();
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,this.radius,this.radius);
        pop();
    }
}