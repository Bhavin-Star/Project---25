class Bin {
    constructor(x,y) {
    
    this.bin1 = Bodies.rectangle(x-90,y-100,20,200,{isStatic:true});
    this.bin2 = Bodies.rectangle(x,y,200,20,{isStatic:true});
    this.bin3 = Bodies.rectangle(x+90,y-100,20,200,{isStatic:true});
    
    this.image = loadImage('Images/dustbingreen.png')
    
    World.add(world,this.bin1);
    World.add(world,this.bin2);
    World.add(world,this.bin3);

    }

    display(){
        var pos1 = this.bin1.position;
        push();
        translate(pos1.x, pos1.y);
        rectMode(CENTER)
        rect(0,0,20,200);
        pop();

        var pos3 = this.bin3.position;
        push();
        translate(pos3.x, pos3.y);
        rectMode(CENTER)
        rect(0,0,20,200);
        pop();

        var pos2 = this.bin2.position;
        push();
        translate(pos2.x, pos2.y);
        imageMode(CENTER)
        image(this.image,0,-100,240,220);
        pop();
    }
 };
 