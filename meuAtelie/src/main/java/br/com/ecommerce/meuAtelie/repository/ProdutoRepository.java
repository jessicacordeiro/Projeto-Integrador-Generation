package br.com.ecommerce.meuAtelie.repository;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import br.com.ecommerce.meuAtelie.model.ProdutoModel;
import br.com.ecommerce.meuAtelie.model.util.CategoriaAceitas;

@Repository
public interface ProdutoRepository extends JpaRepository<ProdutoModel, Long> {
	
	public List<ProdutoModel> findAllByNomeProdutoContainingIgnoreCase(String nomeProduto);

	public List<ProdutoModel> findByNomeProdutoContaining(String nome);

	public List<ProdutoModel> findByCategorias(CategoriaAceitas categorias);

}
