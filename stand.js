class Stand{
    constructor(x,y){
        this.body= Bodies.rectangle(x,y,200,20);
        this.width= 200;
        this.height=20;
        World.add(world,this.body);
    }
    display(){
        var pos= this.body.position;
        push();
        rectMode(CENTER);
        rect(pos.x,pos.y,this.width,this.height);
        pop();
    }
}