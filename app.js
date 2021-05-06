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

//Chama o botão incrementa
var botaoIncrementa = document.querySelector(".btn-incrementa") //#busca pelo id igual o css
//Chama o botão incrementa
var botaoDecrementa = document.querySelector(".btn-decremeta")
//chama o botão incremeta ou decrementa e adiciona um clique que retorna a função
botaoIncrementa.addEventListener('click',incrementa)
botaoDecrementa.addEventListener('click',decrementa)


function incrementa(){
    
    

    //pegar o elemento mais próximo (acima)
var item = botaoIncrementa.closest('.item');
var input = item.querySelector('.quantidade')   //passamos a classe quantidade
input.value++
var preco = pegaPrecoItem(item)
adicionaAoTotal(preco) = preco + Number(elementoTotal.textContent)

}


function decrementa(){
    input.value--
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
