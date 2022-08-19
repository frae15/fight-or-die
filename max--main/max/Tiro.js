class Tiro {
    constructor({
        position,
        veloci,
        config,
        ctx
    }) {
        this.config = config;
        this.position = position
        this.veloci = veloci
        this.ctx = ctx;
        this.width = 30
        this.height = 30
        this.frame = 1
        this.sprite = new Image()
        this.sprite.src = "./img/TiroMandioca" + this.frame + ".png"
        this.framemax = 4
    }

    draw() {
        this.ctx.drawImage(this.sprite, this.position.x, this.position.y, this.width, this.height)
    }

    func() {
        this.draw()

        //mov do tiro
        this.position.x += this.veloci.x

        //sprite
        if (this.config.gameframe % 5 == 0) {
            this.frame == this.framemax ? this.frame = 1 : this.frame++
            this.sprite.src = "./img/TiroMandioca" + this.frame + ".png"
        }
    }
}