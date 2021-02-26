package br.com.ecommerce.meuAtelie.repository;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.com.ecommerce.meuAtelie.model.UsuarioModel;
@Repository
public interface UsuarioRepository extends JpaRepository<UsuarioModel, Long> {
	public List<UsuarioModel> findAllByNomeCompletoContainingIgnoreCase (String nomeCompleto);
}
