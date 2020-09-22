class ListaNegociacoes {

    constructor() {
        this._negociacoes = [];
    }

    adiciona(negociacao) {
        this._negociacoes.push(negociacao);
    }

    get negociacoes() {
        return this._negociacoes;
    }

    totalVolumeNegociacoes() {
        let total = 0;

        this.negociacoes.forEach(negociacao => total += negociacao.volume);

        return total;
    }

    esvazia() {
        this._negociacoes = [];
    }

    ordena(criterio){
        this._negociacoes.sort(criterio);
    }

    inverteOrdem() {
        this._negociacoes.reverse();
    }
}