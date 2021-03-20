package br.com.ecommerce.meuAtelie.seguranca;

import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import br.com.ecommerce.meuAtelie.model.UsuarioModel;
import br.com.ecommerce.meuAtelie.repository.UsuarioRepository;

@Service
public class UserDetailsServiceImpl implements UserDetailsService {
	
	@Autowired UsuarioRepository userRepository;
	
	@Override
	public UserDetails loadUserByUsername(String userName) throws UsernameNotFoundException {
	Optional<UsuarioModel> user = userRepository.findByNomeUsuario(userName);
	user.orElseThrow(() -> new UsernameNotFoundException(userName + " not found."));
	return user.map(UserDetailsImpl::new).get();
	}

}
