class NegociacoesService {


    constructor() {
        this._http = new HttpService();
    }

    negociacoesDaSemana() {

        return new Promise((resolve, reject) => {

            this._http
                .get('negociacoes/semana')
                .then(negociacoes => {
                    resolve(
                        negociacoes.map(objeto => new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor))
                    );
                })
                .catch(erro => {
                    console.log(erro);
                    reject('Não foi possível obter as negociações da semana');
                });
        });
    }

    negociacoesDaSemanaAnterior() {

        return this._http
            .get('negociacoes/anterior')
            .then(negociacoes => {
                return negociacoes.map(objeto => new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor))
            })
            .catch(erro => {
                console.log(erro);
                throw new Error('Não foi possível obter as negociações da semana anterior');
            });

    }

    negociacoesDaSemanaRetrasada() {

        return new Promise((resolve, reject) => {

            this._http
                .get('negociacoes/retrasada')
                .then(negociacoes => {
                    resolve(
                        negociacoes.map(objeto => new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor))
                    );
                })
                .catch(erro => {
                    console.log(erro);
                    reject('Não foi possível obter as negociações da semana retrasada');
                });
        });
    }
}