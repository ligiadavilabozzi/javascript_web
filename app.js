//Procurar quantidade
var input = document.getElementById('quantidade');

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

//Chamar o botão incrementa
var botaoIncrementa = document.querySelector(".btn-incrementa") //#busca pelo id igual o css
//chama o botão incremeta e adiciona um clique que retorna a função
botaoIncrementa.addEventListener('click',incrementa)
function incrementa(){
    
    input.value++
}

