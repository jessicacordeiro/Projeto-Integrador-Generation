package br.com.ecommerce.meuAtelie.service;

import java.nio.charset.Charset;
import org.apache.commons.codec.binary.Base64;

import java.util.ArrayList;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import br.com.ecommerce.meuAtelie.model.ProdutoModel;
import br.com.ecommerce.meuAtelie.model.UsuarioLogin;
import br.com.ecommerce.meuAtelie.model.UsuarioModel;
import br.com.ecommerce.meuAtelie.repository.ProdutoRepository;
import br.com.ecommerce.meuAtelie.repository.UsuarioRepository;

@Service
public class UsuarioService {
	@Autowired
	UsuarioRepository usuarioRepository;
	@Autowired
	ProdutoRepository produtoRepository; 
	
	public UsuarioModel cadastrarUsuario(UsuarioModel usuario) {
		BCryptPasswordEncoder enconder = new BCryptPasswordEncoder();
		String senhaEnconder = enconder.encode(usuario.getSenha());
		usuario.setSenha(senhaEnconder);
		return usuarioRepository.save(usuario);
	}

	public Optional<UsuarioLogin> Logar(Optional<UsuarioLogin> user) {
		BCryptPasswordEncoder enconder = new BCryptPasswordEncoder();
		Optional<UsuarioModel> nomeUsuario = usuarioRepository.findByNomeUsuario(user.get().getUsuario());
		
		if (nomeUsuario.isPresent()) {
			if (enconder.matches(user.get().getSenha(), nomeUsuario.get().getSenha())) {
				
				String auth = user.get().getUsuario() + ":" + user.get().getSenha();
				byte[] encodeAuth = Base64.encodeBase64(auth.getBytes(Charset.forName("US-ASCII")));
				String authHeader = "Basic " + new String(encodeAuth);
				
				user.get().setToken(authHeader);
				user.get().setId(nomeUsuario.get().getId());
				user.get().setNome(nomeUsuario.get().getNomeCompleto());
				return user;
			}
		}
		return null;
	}
	
	// Cadastrar Produto
	public ProdutoModel cadastrarProduto(ProdutoModel novoProduto, Long idUsuario) {
		ProdutoModel produtoExistente = produtoRepository.save(novoProduto); 
		Optional<UsuarioModel> usuarioExistente = usuarioRepository.findById(idUsuario);
		
		if(usuarioExistente.isPresent()) {
			produtoExistente.setCriadoPor(usuarioExistente.get());
			return produtoRepository.save(produtoExistente);
		}
		return null;
	}
	
	// Efetuar Compra
	public UsuarioModel comprarProduto(Long idUsuario, Long idProduto) {
		Optional<UsuarioModel> usuarioExistente = usuarioRepository.findById(idUsuario);
		Optional<ProdutoModel> produtoExistente = produtoRepository.findById(idProduto);
		
		if(usuarioExistente.isPresent() && produtoExistente.isPresent()) {
			usuarioExistente.get().getMinhasCompras().add(produtoExistente.get());
			return usuarioRepository.save(usuarioExistente.get());
		}
		return null;
	}
	

	
	
	
	
	// Validar Lista de Compradores por Nome
	public Optional<UsuarioModel> pegarUsuarios(String nome){
		return usuarioRepository.findByNomeUsuario(nome);
	}
	
	// Remover um produto
	public Optional<UsuarioModel> deletarProduto(Long idProduto, Long idUsuario) {
		Optional<UsuarioModel> usuarioExistente = usuarioRepository.findById(idUsuario);
		Optional<ProdutoModel> produtoExistente = produtoRepository.findById(idProduto);
		
		if(usuarioExistente.isPresent() && produtoExistente.isPresent()) {
			produtoExistente.get().setCriadoPor(null);
			produtoRepository.save(produtoExistente.get());
			produtoRepository.deleteById(produtoExistente.get().getId());
			return usuarioRepository.findById(idUsuario);
		}
		return Optional.empty();
	}
		
}
