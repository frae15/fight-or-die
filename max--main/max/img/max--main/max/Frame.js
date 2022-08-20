class Frame {
    constructor(max, rate, config, estado) {
        this.value = 1;
        this.max = max;
        this.rate = rate;
        this.config = config;
        this.estado = estado || "";
    }

    changeEstado(estado) {
        this.estado = estado;
        if (estado == "andando" || estado == "parado") {
            this.max = 2;
        }
        else if (estado == "pulando" || estado == "morrendo") {
            this.value = 1;
            this.max = 1;
        } else if (estado == "atirando") {
            this.rate = 6;
        } else if (estado == "pararAtirar") {
            this.estado = "atirando";
            this.rate = 10
            this.max = 4

            setTimeout(() => {
                this.value = 1
                this.estado = "parado"
                this.max = 2
            }, 300);
        }
    }

    update() {
        if (this.config.gameframe % this.rate == 0) {
            this.value == this.max ? this.value = 1 : this.value++
        }
    }

    update(jogador) {
        if (this.config.gameframe % this.rate == 0) {
            this.value == this.max ? this.value = 1 : this.value++
            jogador.image.src = "./img/max" + this.estado + jogador.controle.dirX + this.value + ".png"
        }
    }

    forceUpdate() {
        this.value == this.max ? this.value = 1 : this.value++
    }


}