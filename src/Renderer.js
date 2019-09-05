

export default class Renderer {

    constructor(p5js, game) {
        this.p5js = p5js;
        this.game = game;
        this.p5js.createCanvas(600, 600);

        this.nb_col = game.nb_col;
        this.nb_row = game.nb_row;
        this.height = p5js.height;
        this.width = p5js.width;
    }


    draw() {

        this.game.update();

        this.game.getSurfaces().map((surf) => this.drawSurface(this.p5js, surf));

        this.drawSurface(this.p5js, this.game.frog);

    }

    

    drawSurface(p, surf) {
        const r = this.toCanvas(surf);
        this.fillColor(p,surf);
        p.rect(r.x, r.y, r.width, r.height);
    }

    //transform row col coordinates to canvas coordinates
    toCanvas(surf) {
        
        return {
            x: this.colToX(surf.col),
            y: this.rowToY(surf.row),
            width: this.lenToWidth(surf.w),
            height: this.unitHeight()
        };
    }

    colToX(col) {
        return col * this.width / this.nb_col;
    }

    rowToY(row) {
        return row * this.height / this.nb_row;
    }

    lenToWidth(len) {
        return len * this.width / this.nb_col;
    }

    unitHeight() {
        return this.height / this.nb_row;
    }

    fillColor(p,surf){
        if(surf.color == 'green'){
            p.fill(0,255,0);
        }
        if(surf.color == 'brown'){
            p.fill(139,69,19);
        }
        if(surf.color == 'blue'){
            p.fill(0,0,255);
        }
        if(surf.color == 'red'){
            p.fill(255,0,0);
        }

        if(surf.color == 'grey'){
            p.fill(200,200,200);
        }
    }
}