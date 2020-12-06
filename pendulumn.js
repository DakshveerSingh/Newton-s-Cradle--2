class Pendulumn{
    constructor(x,y,color){
        var options = {
            'isStatic' : false,
            'restitution' : 1,
            'friction' : 0,
            'density' : 0.8
        }
    this.body = Bodies.circle(x,y,50,options);
    World.add(world,this.body);
    this.color = color;
    }

    display(){
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        ellipseMode(RADIUS);
        stroke(255);
        fill(this.color);
        ellipse(0,0,50,50);
        pop();
    }
}