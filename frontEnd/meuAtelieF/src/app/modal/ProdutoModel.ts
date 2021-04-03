import { CategoriaAceitas } from "./enum/CategoriaAceitas"
import { UsuarioModel } from "./UsuarioModel"

export class ProdutoModel {
    public id: number
    public categorias: string
    public nomeProduto: string
    public descricaoProduto: string
    public precoProduto: number
    public quantidadeProduto: number
    public imagemProduto: string
    public avaliacaoProduto: string
    public criadoPor : UsuarioModel
    public compradoPor : UsuarioModel[]
    }