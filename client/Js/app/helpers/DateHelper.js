class DateHelper {

    constructor() {
        throw console.log("Essa classe não pode se instanciada");
    }

    static textoParaData(texto) {

        let expressaoRegular = /\d{4}-\d{2}-\d{2}/;

        if (!expressaoRegular.test(texto))
            throw new Error("A data deve ter o formado yyyy-mm-dd");

        return new Date(texto.split("-"));
    }

    static dataParaTexto(data) {
        return data.toLocaleDateString();

        //com interpolação de strings
        //return `${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()}`;
    }
}