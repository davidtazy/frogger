
export default class Inputs{

    
    constructor(p5js){
        this.p5js = p5js;
        this.callback = null;

        this.LEFT_ARROW = p5js.LEFT_ARROW;
        this.RIGHT_ARROW = p5js.RIGHT_ARROW;
        this.DOWN_ARROW = p5js.DOWN_ARROW;
        this.UP_ARROW = p5js.UP_ARROW;
        p5js.keyPressed = ()=>{
            if(this.callback){
                this.callback(this);
            }
        };
    }

    register_key_events(callback){
        this.callback = callback;
    }

    isLeft(){
        return this.p5js.LEFT_ARROW === this.p5js.keyCode;
    }
    isRight(){
        return this.p5js.RIGHT_ARROW === this.p5js.keyCode;
    }

    isUp(){
        return this.p5js.UP_ARROW === this.p5js.keyCode;  
    }

    isDown(){
        return this.p5js.DOWN_ARROW === this.p5js.keyCode;  
    }
}