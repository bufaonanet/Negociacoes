class View {

    constructor(elemento) {
        this._elemento = elemento;
    }

    template(){
        throw new Error("Deve Implementar o método template()");
    }

    update(model) {
        this._elemento.innerHTML = this.template(model);
    }
}