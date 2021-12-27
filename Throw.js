class Throw{
    constructor(bodyA,pointB)
    {
      var options = {
          bodyA: bodyA,
          pointB: pointB,
          stifness: 0.01,
          length: 10
      }
      this.pointB = pointB
      this.throw = Constraint.create(option)
      World.add(world,this.body)
    }
    fly(){
       this.throw.bodyA = null
    }

    launch(bodyA){
        this.throw.bodyA = bodyA
    }
    
    display(){

    }

}