class Particles {
    constructor(x, y, RADIUS) {
        var options = {
            restitution: 0.3
        }
        this.RADIUS = 10;
        this.body = Bodies.circle(x, y, this.RADIUS, options);
        
        this.color=color(random(0,255),random(0,255),random(0,255))
        World.add(world, this.body);
    }
    display() {

        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        fill(this.color);
        ellipseMode(RADIUS);
        ellipse(0,0,this.RADIUS,this.RADIUS);
        pop();
    }

};