package br.com.ecommerce.meuAtelie.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.ecommerce.meuAtelie.model.ProdutoModel;
import br.com.ecommerce.meuAtelie.model.util.CategoriaAceitas;
import br.com.ecommerce.meuAtelie.repository.ProdutoRepository;


@Service
public class ProdutoServices {

private @Autowired ProdutoRepository repositoryProduto;
	
	// Validar Lista de Produtos por Nome
	public List<ProdutoModel> pegarProdutosPorNome(String nome){
		return repositoryProduto.findByNomeProdutoContaining(nome);
	}
	
	// Validar Lista de Produtos por Categoria
	public List<ProdutoModel> pegarProdutosPorCategoria(CategoriaAceitas categorias){
		return repositoryProduto.findByCategorias(categorias);
	}
}
