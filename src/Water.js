import HorizontalMovingSurface from './HorizontalMovingSurface';



class Water extends HorizontalMovingSurface {

    constructor(row, nb_col) {
        super(row, 0, nb_col, 0);
        this.color = 'blue';
        this.logs = [];
    }

    addLog(log){
        this.logs.push(log);
    }


    interact(frog) {

        let on_log = false;
        this.logs.map((log)=>{
            on_log |= log.interact(frog);
        });

        if(on_log){
            return true;
        }

        //frog fully in water
        if (this.collide(frog) && this.left() <= frog.left() && this.right() >= frog.right()) {
            frog.col = -10;
            return true;
        }
        return false;
    }

}



export default Water
