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

import br.com.ecommerce.meuAtelie.model.CategoriaModel;
import br.com.ecommerce.meuAtelie.repository.CategoriaRepository;

@RestController
@RequestMapping ("/Categoria")
@CrossOrigin ("*")
public class CategoriaController {
	@Autowired 
	private CategoriaRepository categoriaRepository;
	
	@GetMapping 
	public ResponseEntity<List<CategoriaModel>> getAll(){
		return ResponseEntity.ok(categoriaRepository.findAll());
	}
	@GetMapping ("/{id}")
	public ResponseEntity<CategoriaModel> getById(@PathVariable long id){
		return categoriaRepository.findById(id).map(resp-> ResponseEntity.ok(resp)).orElse(ResponseEntity.notFound().build());
	}
	
	@GetMapping ("/areaCategoria/{areaCategoria}")
	public ResponseEntity<List<CategoriaModel>> getByAreaCategoria(@PathVariable String areaCategoria){
		return ResponseEntity.ok(categoriaRepository.findAllByAreaCategoriaContainingIgnoreCase(areaCategoria));
			
	}
	@PostMapping
	public ResponseEntity<CategoriaModel> post (@Valid @RequestBody CategoriaModel categoria){
		return ResponseEntity.status(HttpStatus.CREATED).body(categoriaRepository.save(categoria));
	}
	@PutMapping
	public ResponseEntity<CategoriaModel> put (@Valid @RequestBody CategoriaModel categoria){
		return ResponseEntity.status(HttpStatus.OK).body(categoriaRepository.save(categoria));
	}
	@DeleteMapping ("/{id}")
	public void delete (@Valid @PathVariable long id) {
		categoriaRepository.deleteById(id);
	}
	
}
