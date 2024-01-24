class hero {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }
    attack(){

        let ataque

        if (this.tipo === "mago") {
            ataque = "magia"
        } else if (this.tipo === "guerreiro") {
            ataque = "espada"
        } else if (this.tipo === "monge") {
            ataque = "artes marciais"
        } else if (this.tipo === "ninja") {
            ataque = "shuriken"
        } else {
            ataque = "um ataque não conhecido"
        }     
    console.log(`o ${this.tipo} ${this.nome} atacou usando ${ataque}`)
    }
}

let hero1 = new hero("Arthur", 21, "ninja")
hero1.attack()