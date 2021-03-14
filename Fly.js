class Fly {
    constructor(bodyA,pointB) {
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.5,
            length: 300
        }

        this.pointB = pointB
        this.Rope = Constraint.create(options)
        World.add(world,this.Rope);
    }


    display() {
        var pointA = this.Rope.bodyA.position
        var pointB = this.pointB
        push();
        stroke("red")
        strokeWeight(4)
        line(pointB.x,pointB.y,pointA.x,pointA.y)
        pop();
    }
}