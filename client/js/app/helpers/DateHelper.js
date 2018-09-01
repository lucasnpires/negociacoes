class DateHelper {

    constructor(){
        throw new Error('Esta classe não pode ser instanciada');
    }

    static dataParaTexto(data){

        return `${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()}`        
    }

    static textoParaData(texto){
        // ... spread operator - o ecma script entende 
        // que cada posição do array é uma posição do que é passado para o construtor do date() como parâmetro
        
        if(!/\d{4}-\d{2}-\d{2}/.test(texto)) throw new Error('Deve estar no formato aaaa-mm-dd');
        return new Date(...texto.split('-').map((item, indice) => item - indice % 2));
    }

}