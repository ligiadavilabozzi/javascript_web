//Procurar quantidade de um ÚNICO ELEMENTO
//var input = document.getElementById('quantidade');

//palavras não são somadas 
/* input.vale = 1 + input.value 
Esse valor sairá na forma de texto (11), 
para voltar a forma correta: 
input.value = 1 + Number(input.value) 
assim converte texto em número 

/*INCREMENTO: 
O operador ++ só se aplica ao tipo numérico, então ele converte automaticamente o texto

incremeta = () =>{
    input.value++
}
incrementa();
*/
//Só queremos executar a função acima ao clicar no botão


/***************INCREMENTA**************/
//Chama o botão incrementa
var botoesIncrementa = document.querySelectorAll(".btn-incrementa") //só querySelector procura o primeiro, para trazer todos, querySelectorAll
//chama o botão incremeta ou decrementa e adiciona um clique que retorna a função
for(let botao of botoesIncrementa){
    botao.addEventListener('click',incrementa)

    function incrementa(){
    //pegar o elemento mais próximo (acima)
    var item = botao.closest('.item');
    var input = item.querySelector('.quantidade')   //passamos a classe quantidade
    input.value++
    var preco = pegaPrecoItem(item)
    adicionaAoTotal(preco) = preco + Number(elementoTotal.textContent)
    }
    
}

/*********DECREMENTA*************** */
//botão decrementa
var botoesDecrementa = document.querySelectorAll(".btn-decrementa")

for(let botao of botoesDecrementa){
    botao.addEventListener('click',decrementa)

    function decrementa(){
        var item = botao.closest('.item');
        var input = item.querySelector('.quantidade')
        
        //evitar número negativo no pedido
        if(input.value>0){
        input.value--;
        var preco = pegaPrecoItem(item)
        adicionaAoTotal(-preco)
        }   
        
    }
}


function pegaPrecoItem(item){
    //buscar no elemento item a classa preco-item
var precoItem = item.querySelector('.preco-item'); 

//no td quantidade tem um value, já no td preco-item, tem um valor entre as tags <td></td> 
//temos que pegar esse texto) O number na frente converte texto em numero
return Number(precoItem.textContent) 

}

function adicionaAoTotal(valor){
    var elementoTotal = document.querySelector('#total'); 
    elementoTotal.textContent = valor + Number(elementoTotal.textContent)
}


/******OBSERVAÇÃO DO LET
 * Só pode ser usado uma vez dentro do escopo. 
 * O var sobrescreve o lado de fora do escopo, por isso usamos let botao of botoes...
 */