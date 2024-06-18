import { Carrinho } from "./carrinho"
import { Endereco } from "./endereco"

export type Pedido = {
    id: number,
    totalPedido : number,
    carrinho: Carrinho,
    status: string,
    endereco :Endereco,
    dataRegistro: Date
}