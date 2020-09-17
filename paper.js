class PaperObject{
    constructor(x, y, radius) {
        var options = {
            restitution:0.3,
            friction:0.5,
            density:1.2,
            isStatic: false
        }
        
        this.body = Bodies.circle(x, y, radius, options);
        this.radius = radius;

        World.add(world, this.body);
    }

    display(){
        var pos =this.body.position;
        
        fill(255,0,255);
        ellipseMode(CENTER)
        ellipse(pos.x, pos.y, this.radius);
        pop();
    }
}
