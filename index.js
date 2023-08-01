// Biblioteca para capturar inputs de texto do usuário no console
const prompt = require('prompt-sync')({sigint: true});

// Receber o pedido
function recebePedido(){
    let pedido = {
        sabor: null,
        confeitos: null
    };
    // Qual o sabor do bolo?
    pedido.sabor = prompt("Qual sabor do bolo? ");
    // Quais confeitos deseja
    pedido.confeitos = prompt("Quais confeitos deseja? ");

    return pedido;
}

// Preparar o pedido
function preparaPedido(pedido){
    // Separar ingredientes
    let ingredientes_base = separaIngredientes(pedido);
    // Misturar bolo
    let tabuleiro = misturaBolo(pedido, ingredientes_base);
    // Colocar no forno
    let bolo = colocaForno(tabuleiro);
    // Confeitar
    bolo = confeitar(pedido, bolo);

    return bolo;
}
// Funções
function separaIngredientes(pedido){
    let ingredientes_base = 'ovos, leite, farinha, fermento';
    return ingredientes_base;
}

// Misturar bolo
function misturaBolo(pedido, ingredientes_base){
    return pedido.sabor + ', ' + ingredientes_base;
}

// Colocar no Forno
function colocaForno(tabuleiro){
    return 'Bolo de ' + tabuleiro;
}

// Confeitar
function confeitar(pedido, bolo){
    return bolo + ' confeitado com ' + pedido.confeitos
}

// Calcular preço // Chamados das funções
    function calculaPreco () {
        // Valor dos ingredientes
        let preco_final = calculaIngred();
        // Valor da confeiteira
        preco_final = calculaConf(preco_final);
        // Valor das despesas de produção
        preco_final = calculaDespProd(preco_final);
        // Valor dos gastos fixos
        preco_final = calculaGastosfixos(preco_final);
        // Valor do 
        preco_final = calculaLucro(preco_final);
        // Retornar preço final
        return preco_final;
    }

// Calcular valor dos Ingredientes
    function calculaIngred () {
        return 10.0; // Td bolo que faço gasto esse valor
    }

    function calculaConf (preco_calc) {
        return preco_calc += preco_calc * 0.30; 
    }

    function calculaDespProd (preco_calc) {
        return preco_calc += 5.00; 
    }

    function calculaGastosfixos (preco_calc) {
        return preco_calc += 15.00;
    }

    function calculaLucro (preco_calc) {
        return preco_calc += preco_calc * 0.25;    }


// Entregar pedido
    function entregaPedidos (bolo, preco){ //Pra usar a variavel bolo e preço receber cm parametro
        // Exibir/en""tregar bolo para cliente
        console.log("Pedido Pronto! :)")
        console.log("Aproveite o " + bolo);

        // Exibir preço para o cliente
        prompt("Seu pedido ficou em R$ " + preco + ". Quando terminar de comer clique ENTER para pagar!");   
}

// Receber dinheiro
    function receberDinheiro(preco){
        // Receber dinheiro do cliente
        let valor_pago = prompt("Digite o valor para pagar: ");
        for(; valor_pago != preco;){ // ; no inicio para não criar variavel de interação
            valor_pago = prompt("Valor incorreto, digite o valor correto para pagar: ");
        }
        // Fechar pedido e agradecer ao cliente
        prompt("Muito obrigada e volte sempre! :) ");
    }

    // Para aparecer no terminal
    let pedido = recebePedido();
    let bolo = preparaPedido(pedido);
    let preco = calculaPreco ();
    entregaPedidos(bolo, preco);
    receberDinheiro(preco);
 