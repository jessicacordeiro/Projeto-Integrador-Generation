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
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;



import br.com.ecommerce.meuAtelie.model.ProdutoModel;
import br.com.ecommerce.meuAtelie.model.util.CategoriaAceitas;
import br.com.ecommerce.meuAtelie.repository.ProdutoRepository;
import br.com.ecommerce.meuAtelie.service.ProdutoServices;

@RestController
@RequestMapping("/produto")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class ProdutoController {

	@Autowired
	private ProdutoRepository produtoRepository;
	
	private @Autowired ProdutoServices services;
	
	@GetMapping
	public ResponseEntity<List<ProdutoModel>> GetAll() {
		return ResponseEntity.ok(produtoRepository.findAll());
	}
	
	@GetMapping("/produtos/{nomeProduto}")
	public ResponseEntity<List<ProdutoModel>> pegarPorNome(@PathVariable String nomeProduto){
		return new ResponseEntity<List<ProdutoModel>>(services.pegarProdutosPorNome(nomeProduto), HttpStatus.ACCEPTED);
	}
	
	@GetMapping("/produtos/categoria")
	public ResponseEntity<List<ProdutoModel>> pegarPorCategoria(@RequestParam(defaultValue = "") CategoriaAceitas categoria){
		return new ResponseEntity<List<ProdutoModel>>(services.pegarProdutosPorCategoria(categoria), HttpStatus.ACCEPTED);
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

	@PutMapping
	public ResponseEntity<Object> put(@Valid @RequestBody ProdutoModel produto) {
		Optional<ProdutoModel> produtoExistente = produtoRepository.findById(produto.getId());
		if (produtoExistente.isPresent()) {
			produtoExistente.get().setCategorias(produto.getCategorias());
			produtoExistente.get().setImagemProduto(produto.getImagemProduto());
			produtoExistente.get().setNomeProduto(produto.getNomeProduto());
			produtoExistente.get().setDescricaoProduto(produto.getDescricaoProduto());
			produtoExistente.get().setPrecoProduto(produto.getPrecoProduto());
			
			return ResponseEntity.status(HttpStatus.CREATED).body(produtoRepository.save(produtoExistente.get()));
		} else {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Produto não encontrado...");
		}
	}

	@DeleteMapping("/{id}")
	public void delete(@PathVariable Long id) {
		produtoRepository.deleteById(id);
	}
}
