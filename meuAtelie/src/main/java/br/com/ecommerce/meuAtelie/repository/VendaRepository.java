package br.com.ecommerce.meuAtelie.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.com.ecommerce.meuAtelie.model.VendaModel;
@Repository
public interface VendaRepository extends JpaRepository<VendaModel, Long> {

}