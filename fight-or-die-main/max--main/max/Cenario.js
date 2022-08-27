class Cenario {
    constructor({
        config,
        ctx
    }) {
        this.ctx = ctx;
        this.config = config;
        this.width = canvas.width
        this.height = canvas.height
        this.cenarioatual = 1
        this.image = new Image()
        this.image.src = "./img/cenario/cenario" + this.cenarioatual + ".png"

      
        this.animaobj = new Image()
        this.frameanimado = 1
        this.animaobj.src = "./img/cenario/ventilador" + this.frameanimado + ".png"
        
        this.podepassar = false
        this.aberta = 1
        this.porta = new Image()
        this.porta.src = "./img/cenario/porta" + this.aberta + ".png"
    }

    draw() {
        this.ctx.drawImage(this.image, 0, 0, canvas.width, canvas.height)
    }
    desenhaobj(){
        this.ctx.drawImage(this.animaobj, 760, -50, 220, 320)
        this.ctx.drawImage(this.porta, 10, 210, 140, 300)
        
        if (this.config.gameframe % 6 == 0) {
            this.frameanimado == 2 ? this.frameanimado = 1 : this.frameanimado++
            this.porta.src = "./img/cenario/porta" + this.aberta + ".png"
            this.animaobj.src = "./img/cenario/ventilador" + this.frameanimado + ".png"
        }
    }
    transicoes(){
        this.draw()


        if(max.position.x< 0 && this.podepassar){
            this.cenarioatual = 2
            this.image.src = "./img/cenario/cenario" + this.cenarioatual + ".png"
            max.image.src = "./img/max" + max.frame.estado + "d" + max.frame.value + ".png"
        }
    }
}
