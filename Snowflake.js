class Snowflake{
    constructor(x,y,width,height){
        var options ={
            'restistution': 0.5
        }
    this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
      this.image = loadImage("S1603.png")
      

    }
    display(){
       
        translate(this.body.position.x, this.body.position.y);
		rotate(this.body.angle)
        imageMode (CENTER)
        image(this.image,this.body.position.x,this.body.position.y,this.height,this.width)

    }
}
    
       
      
    