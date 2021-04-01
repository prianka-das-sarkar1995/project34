const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var Mouse,canvasmouse;
var sling1,pen1;
function setup(){
    var canvas = createCanvas(windowWidth,windowHeight);
    engine = Engine.create();
    world = engine.world;
    //sling1=new Sling(pen1.body,{x:200,y:200}) 
      // let canvasmouse= Mouse.create(canvas.elt);
   // canvasmouse.pixelRatio=pixelDensity();
   // let options={
        mouse:canvasmouse
   // }
   // mConstraint=MouseConstraint.create(engine,options);
   // World.add(world,mConstraint);
}
function draw(){
    background("pink");
    Engine.update(engine);
    drawSprites();
   //sling1.display(); 
} 