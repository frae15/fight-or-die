class Inimigos {
    constructor({
        position,
        veloci,
        frame,
        config,
        ctx
    }) {
        this.position = position
        this.veloci = veloci
        this.frame = frame;
        this.ctx = ctx;
        this.config = config;
        this.width = 80
        this.height = 100
        this.vida = 100
        this.image = new Image()
        this.image.src = "./img/inimigos/inimigo1.png"
        this.spritew = 120
        this.spriteh = 120
    }

    draw() {
        this.ctx.drawImage(this.image,  this.position.x, this.position.y, this.width, this.height)
    }

    gravi() {
        this.draw()
        this.veloci.x = max.position.x< this.position.x ? -4:4
        this.position.y += this.veloci.y
        this.position.x += this.veloci.x

        this.veloci.y += this.config.gravidade

        if (this.position.y + this.height + 65>= this.ctx.canvas.height) {
            this.veloci.y = 0
            if (this.position.y + this.height > this.ctx.canvas.height) this.position.y = this.ctx.canvas.height - this.height
        }
    }


}