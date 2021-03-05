package br.com.ecommerce.meuAtelie.controller;

import java.util.List;
import javax.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import br.com.ecommerce.meuAtelie.model.VendaModel;
import br.com.ecommerce.meuAtelie.repository.VendaRepository;

@RestController
@RequestMapping("/venda")
@CrossOrigin("*")
public class VendaController {
	
	@Autowired
	private VendaRepository vendaRepository;

	@GetMapping
	public ResponseEntity<List<VendaModel>> GetAll() {
		return ResponseEntity.ok(vendaRepository.findAll());
	}

	@GetMapping("/{id}")
	public ResponseEntity<VendaModel> GetById(@PathVariable long id) {
		return vendaRepository.findById(id).map(resp -> ResponseEntity.ok(resp)).orElse(ResponseEntity.notFound().build());
	}

	@PostMapping
	public ResponseEntity<VendaModel> criarNovaVenda(@Valid @RequestBody VendaModel venda) {
		return ResponseEntity.status(HttpStatus.CREATED).body(vendaRepository.save(venda));
	}

	@PutMapping
	public ResponseEntity<VendaModel> put(@Valid @RequestBody VendaModel venda) {
		return ResponseEntity.status(HttpStatus.OK).body(vendaRepository.save(venda));
	}

	@DeleteMapping("/{id}")
	public void delete(@PathVariable long id) {
		vendaRepository.deleteById(id);
	}
}
