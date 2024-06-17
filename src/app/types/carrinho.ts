import { Usuario } from "./loginResponse";

export type ItensCarrinho = {
    id: number;
    nome : string;
    descricao : string;
    precoTotal : number;
    quantidade : number;
    foto : string;
    tipoProduto: string;
}

export type Carrinho = {
    itens: ItensCarrinho[] ,
    id_carrinho? : number,
    status? : string,
}


export type CarrinhoResponseSave = {
    id:number
    usuario : Usuario
}