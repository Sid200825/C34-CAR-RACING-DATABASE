var ball;
var pos, Position, database

function setup(){
    createCanvas(500,500);
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";

    database = firebase.database()

    pos = database.ref("Ball/Position")

    pos.on("value",readPosition)
    
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        changePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+1);
    }
    drawSprites();
}

function changePosition(x,y){
    pos.set({
        X : Position.X + x,
        Y : Position.Y + y

    })
}

function readPosition(data){
    Position = data.val()
    ball.x = Position.X
    ball.y = Position.Y
}
