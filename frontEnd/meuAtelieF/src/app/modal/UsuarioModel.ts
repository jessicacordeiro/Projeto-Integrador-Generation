import { ProdutoModel } from "./ProdutoModel"

export class UsuarioModel {
    public id: number
    public nomeCompleto: string 
    public endereco: string
    public cpf: string 
    public nomeUsuario: string 
    public email: string 
    public senha: string 
    public ProdutoModel: ProdutoModel[]
    }