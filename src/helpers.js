function filtrarOcorrencias(paragrafo){
return Object.keys(paragrafo).filter(chave => (paragrafo)[chave] > 1)
}

function montaSaidaArquivo(listaPalavras){
  let textoFinal = " ";
  listaPalavras.forEach((paragrafo, indice)=> {
    const duplicadas = filtrarOcorrencias(paragrafo)
    if (duplicadas.length !== 0 ){
    let resultado = duplicadas.join(", ")
    textoFinal += `palavras duplicadas no parágrafo ${indice + 1}: ${resultado} \n`
}
})
return textoFinal;
}

export { montaSaidaArquivo }