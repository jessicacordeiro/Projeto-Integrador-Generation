package br.com.ecommerce.meuAtelie.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.com.ecommerce.meuAtelie.model.produtoModel;
@Repository
public interface ProdutoRepository extends JpaRepository<produtoModel, Long> {
	public List<produtoModel> findAllByNomeProdutoContainingIgnoreCase(String nomeProduto);

}
