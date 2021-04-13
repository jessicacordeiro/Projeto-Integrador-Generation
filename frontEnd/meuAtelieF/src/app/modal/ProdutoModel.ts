import { CategoriaAceitas } from "./enum/CategoriaAceitas"
import { UsuarioModel } from "./UsuarioModel"

export class ProdutoModel {
    public id: number
    public categorias: string
    public nomeProduto: string
    public descricaoProduto: string
    public precoProduto: number
    public imagemProduto: string
    public criadoPor : UsuarioModel
    public compradoPor : UsuarioModel[]
    }