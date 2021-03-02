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

import br.com.ecommerce.meuAtelie.model.produtoModel;
import br.com.ecommerce.meuAtelie.repository.ProdutoRepository;

@RestController
@RequestMapping("/produto")
@CrossOrigin("*")
public class ProdutoController {

	@Autowired
	private ProdutoRepository produtoRepository;
	 
	@GetMapping
	public ResponseEntity<List<produtoModel>>GetAll(){
		return ResponseEntity.ok(produtoRepository.findAll());
	}
	@GetMapping("/{id}")
	public ResponseEntity<produtoModel>getById(@PathVariable Long id){
		return produtoRepository.findById(id).map(resp -> ResponseEntity.ok(resp)).orElse(ResponseEntity.notFound().build());
	}
	@GetMapping("/nome/{nome}")
	public ResponseEntity<List<produtoModel>> getByName(@PathVariable String nomeProduto){
		return ResponseEntity.ok(produtoRepository.findAllByNomeProdutoContainingIgnoreCase(nomeProduto));
	}
	@PostMapping
	public ResponseEntity<produtoModel>post(@Valid @RequestBody produtoModel produto){
		return ResponseEntity.status(HttpStatus.CREATED).body(produtoRepository.save(produto));
	}
	@PutMapping
	public ResponseEntity<produtoModel>put(@Valid @RequestBody produtoModel produto){
		return ResponseEntity.status(HttpStatus.OK).body(produtoRepository.save(produto));
	}
	@DeleteMapping("/{id}")
	public void delete (@PathVariable Long id) {
		produtoRepository.deleteById(id);
	}
}
