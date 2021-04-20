class Block{
    constructor(x, y, width, height) {
        var options = {
            'restitution':1,
            'friction':1,
            'density':1
            
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.x = x
        this.y = y
        this.width = width;
        this.height = height;
        this.visibility = 255
        World.add(world, this.body);
      }
      display(){
        push();
        var position = this.body.position;
        var angle = this.body.angle;
        fill("green")
        if(this.body.speed>3){
          console.log(this.body)
          World.remove(world,this.body)
          // push()
          // tint(255,this.visibility)
          // pop()

        this.visibility = this.visibility - 5
          
        }else{
          // super.display()
        }
        
        translate(position.x,position.y);
        rotate(angle)
        rect(0,0,this.width,this.height)
        translate(this.body.position.x, this.body.position.y);
        rectMode(CENTER);
        pop();
      }
}