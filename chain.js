class Chain {
    constructor(bodyA,bodyB){
        var options = {
            bodyA : bodyA,
            bodyB : bodyB,
            stiffness : 0.01,
            length : 10

        }

        this.Chain = Constraint.create(options);
        World.add(world,Chain)
        
    }
    display(){

        var pointA = this.Chain.bodyA.position;
        var pointB = this.Chain.bodyB.position;
        strokeWeight(3);
        line(pointA.x,pointA.y,pointB.x,pointB.y)
    }
}