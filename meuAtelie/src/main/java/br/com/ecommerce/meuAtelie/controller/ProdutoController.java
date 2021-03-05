package br.com.ecommerce.meuAtelie.controller;

import java.util.List;
import java.util.Optional;
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
import br.com.ecommerce.meuAtelie.model.ProdutoModel;
import br.com.ecommerce.meuAtelie.repository.ProdutoRepository;
import br.com.ecommerce.meuAtelie.repository.UsuarioRepository;

@RestController
@RequestMapping("/produto")
@CrossOrigin("*")
public class ProdutoController {

	@Autowired
	private ProdutoRepository produtoRepository;
	@Autowired
	private UsuarioRepository usuarioRepository;

	@GetMapping
	public ResponseEntity<List<ProdutoModel>> GetAll() {
		return ResponseEntity.ok(produtoRepository.findAll());
	}

	@GetMapping("/{id}")
	public ResponseEntity<ProdutoModel> getById(@PathVariable Long id) {
		return produtoRepository.findById(id).map(resp -> ResponseEntity.ok(resp))
				.orElse(ResponseEntity.notFound().build());
	}

	@GetMapping("/nome/{nome}")
	public ResponseEntity<List<ProdutoModel>> getByName(@PathVariable String nomeProduto) {
		return ResponseEntity.ok(produtoRepository.findAllByNomeProdutoContainingIgnoreCase(nomeProduto));
	}

	@PostMapping("/{id_usuario}/novo")
	public ResponseEntity<ProdutoModel> post(@Valid @RequestBody ProdutoModel produto,
			@PathVariable(value = "id_usuario") Long idUsuario) {
		produtoRepository.save(produto);
		Optional<ProdutoModel> produtoExistente = produtoRepository.findById(produto.getId());
		produtoExistente.get().setUsuario(usuarioRepository.findById(idUsuario).get());
		return ResponseEntity.status(HttpStatus.CREATED).body(produtoRepository.save(produtoExistente.get()));
	}

	@PutMapping
	public ResponseEntity<ProdutoModel> put(@Valid @RequestBody ProdutoModel produto) {
		return ResponseEntity.status(HttpStatus.OK).body(produtoRepository.save(produto));
	}

	@DeleteMapping("/{id}")
	public void delete(@PathVariable Long id) {
		produtoRepository.deleteById(id);
	}
}
