package br.com.ecommerce.meuAtelie.service;

import java.nio.charset.Charset;
import org.apache.commons.codec.binary.Base64;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import br.com.ecommerce.meuAtelie.model.UsuarioLogin;
import br.com.ecommerce.meuAtelie.model.UsuarioModel;
import br.com.ecommerce.meuAtelie.repository.UsuarioRepository;

@Service
public class UsuarioService {
	@Autowired
	UsuarioRepository usuarioRepository;

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
				user.get().setNome(nomeUsuario.get().getNomeCompleto());
				return user;
			}
		}
		return null;
	}

}
