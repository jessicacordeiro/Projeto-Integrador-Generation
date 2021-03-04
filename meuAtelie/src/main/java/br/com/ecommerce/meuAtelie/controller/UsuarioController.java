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

import br.com.ecommerce.meuAtelie.model.UsuarioLogin;
import br.com.ecommerce.meuAtelie.model.UsuarioModel;
import br.com.ecommerce.meuAtelie.repository.UsuarioRepository;
import br.com.ecommerce.meuAtelie.service.UsuarioService;

@RestController
@RequestMapping("/usuario")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class UsuarioController {
	@Autowired
	private UsuarioRepository usuarioRepository;
	@Autowired
	private UsuarioService usuarioService;
	
	@GetMapping
	public ResponseEntity<List<UsuarioModel>> GetAll() {
		return ResponseEntity.ok(usuarioRepository.findAll());
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<UsuarioModel> GetById(@PathVariable long id) {
		return usuarioRepository.findById(id).map(resp -> ResponseEntity.ok(resp)).orElse(ResponseEntity.notFound().build());
	}
	@GetMapping("/nomeCompleto/{nomeCompleto}")
	public ResponseEntity<List<UsuarioModel>> GetByNomeCompleto(@PathVariable String nomeCompleto) {
		return ResponseEntity.ok(usuarioRepository.findAllByNomeCompletoContainingIgnoreCase(nomeCompleto));
	}
	//@PostMapping
	//public ResponseEntity<UsuarioModel> creatNewUser(@Valid @RequestBody UsuarioModel usuario) {
	//	return ResponseEntity.status(HttpStatus.CREATED).body(usuarioRepository.save(usuario));
	//}
	@PostMapping("/cadastrar")
	public ResponseEntity<UsuarioModel> post(@Valid @RequestBody UsuarioModel usuario){
		return ResponseEntity.status(HttpStatus.CREATED).body(usuarioService.CadastrarUsuario(usuario));
	}
	@PostMapping("/logar")
	public ResponseEntity<UsuarioLogin> Autentication (@Valid @RequestBody Optional<UsuarioLogin> usuario){
		return usuarioService.Logar(usuario).map(resp -> ResponseEntity.ok(resp))
				.orElse(ResponseEntity.status(HttpStatus.UNAUTHORIZED).build());
	}
	
	@PutMapping
	public ResponseEntity<UsuarioModel> put(@Valid @RequestBody UsuarioModel usuario) {
		return ResponseEntity.status(HttpStatus.OK).body(usuarioRepository.save(usuario));
	}
	@DeleteMapping("/{id}")
	public void delete(@PathVariable long id) {
		usuarioRepository.deleteById(id);
	}

}
