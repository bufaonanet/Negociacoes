class NegociacaoController {

    constructor() {

        let $ = document.querySelector.bind(document);

        this._forumlario = $("form");
        this._campoData = $("#data");
        this._campoQuantidade = $("#quantidade");
        this._campoValor = $("#valor");
        this._ordemAtual = '';

        this._listaNegociacoes = new Bind(
            new ListaNegociacoes(),
            new NegociacoesView($("#negociacoesView")),
            'adiciona', 'esvazia', 'ordena', 'inverteOrdem'
        );

        this._mensagem = new Bind(
            new Mensagem(),
            new MensagemView($("#mensagemView")),
            'texto'
        );
    }

    adiciona(event) {

        event.preventDefault();

        let negociacao = this._criaNegociacao();

        this._listaNegociacoes.adiciona(negociacao);
        this._mensagem.texto = "Negociação adicionada";

        this._limpaForumalrio();
    }

    _limpaForumalrio() {

        this._forumlario.reset();
        this._campoData.focus();
    }

    _criaNegociacao() {

        return new Negociacao(
            DateHelper.textoParaData(this._campoData.value),
            this._campoQuantidade.value,
            this._campoValor.value
        );
    }

    apagar() {

        this._listaNegociacoes.esvazia();
        this._mensagem.texto = "Negociações removidas";
    }

    importaNegociacoes() {

        let service = new NegociacoesService();

        Promise.all([
            service.negociacoesDaSemana(),
            service.negociacoesDaSemanaAnterior(),
            service.negociacoesDaSemanaRetrasada()

        ]).then(negociacoes => {
            negociacoes
                .reduce((arrayAchatado, array) => arrayAchatado.concat(array), [])
                .forEach(negociacao => this._listaNegociacoes.adiciona(negociacao));

        }).catch(erro => this._mensagem.texto = erro);
    }

    ordena(coluna) {

        if (this._ordemAtual == coluna) {
            this._listaNegociacoes.inverteOrdem();
        } else {
            this._listaNegociacoes.ordena((a, b) => a[coluna] - b[coluna]);
        }

        this._ordemAtual = coluna;
    }


}