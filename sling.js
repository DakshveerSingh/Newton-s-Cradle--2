class Sling{
    constructor(bodyA,pointB){
        var options = {
            'bodyA' : bodyA,
            'pointB' : pointB
        };
        this.rope = Constraint.create(options);
        World.add(world,this.rope);
    }
    display(){
        var pointA = this.rope.bodyA.position;
        var pointB = this.rope.pointB;
        push();
        strokeWeight(4);
        stroke("white");
        line(pointA.x,pointA.y,pointB.x,pointB.y);
        pop();
    }
}