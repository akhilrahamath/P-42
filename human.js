class Human{
    constructor(){
        var options = {
            isStatic:true    
        }

        this.body=Bodies.rectangle();
        this.image=loadImage("walking_1.png");
        World.add(world,this.body);
    }

    display(){        
        imageMode(CENTER);
        image(this.image,200,400,230,200);
    }
}