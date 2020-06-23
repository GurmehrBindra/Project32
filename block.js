class Block{
    constructor(x,y){
        this.body= Bodies.rectangle(x,y,20,50);
        this.width= 20;
        this.height=50;
        this.Visibility=255;
        World.add(world,this.body);
    }
    score(){
        if(this.Visibility<0 && this.Visibility>-105){
            score++;
        }
    }
    display(){
        if(this.body.speed<3){
            var pos= this.body.position;
            push();
            fill("red")
            rectMode(CENTER);
            rect(pos.x,pos.y,this.width,this.height);
            pop();
        }
        else{
            World.remove(world,this.body);
            push();
            this.Visibility=this.Visibility-5;
            tint(255,this.Visibility);
    
            fill('purple');
            rect(this.body.position.x,this.body.position.y,this.width,this.height);
            pop();
        }
    }
}