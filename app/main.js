let livros = []
/* API com as informalções dos livros */
const endpointDaAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json'

/* Função para buscar os livros de dentro da API*/
getBuscarLivrosDaAPI()

/* Usamos async para que a função só retorne um resultado quando o conteudo dela for totalmente finalizado */
async function getBuscarLivrosDaAPI(){
  /* Usando Await, res só receberá o valor quando todo o conteudo do endpoint estiver pronto */
    const res = await fetch(endpointDaAPI)
    livros = await res.json()
    let livrosComDesconto = aplicarDesconto(livros)
    
    exibirOsLivrosNaTela(livrosComDesconto)
}