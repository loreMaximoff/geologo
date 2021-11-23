class Ironman {
    constructor (x, y){
        var options ={
            'restitution':0.8,
            'friction':3,
            'density':30,
        }
        this.body =Bodies.rectangle(x,y,50,50,options)
        this.width = 80;
        this.height= 50;

        world.add(world.this.body);
    }

    
}