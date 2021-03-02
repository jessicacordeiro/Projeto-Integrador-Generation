package br.com.ecommerce.meuAtelie.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.com.ecommerce.meuAtelie.model.CategoriaModel;


@Repository
public interface CategoriaRepository  extends JpaRepository<CategoriaModel, Long>{
	public List<CategoriaModel> findAllByAreaCategoriaContainingIgnoreCase(String areaCategoria);
	
}
