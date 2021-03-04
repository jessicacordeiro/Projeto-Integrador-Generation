package br.com.ecommerce.meuAtelie.model;

import java.util.ArrayList;
import java.util.List;
import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.validation.constraints.Size;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.sun.istack.NotNull;

@Entity
@Table(name = "tb_usuario")
public class UsuarioModel {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	@NotNull
	@Size(min = 3, max =80, message = "Nome deve ser inserido, de 3 até 80 caracteres" )
	private String nomeCompleto;
	
	@NotNull
	@Size(min = 2, max =200, message = "Endereço deve ser inserido, de 2 até 200 caracteres" )
	private String endereco;
	
	@NotNull
	private long cpf;
	
	@NotNull
	@Size(min = 3, max =45, message = "Usúario deve ser inserido, de 3 até 45 caracteres")
	private String nomeUsuario;
	
	@NotNull
	@Size(min = 3, max =45,message = "Email deve ser inserido, de 3 até 45 caracteres")
	private String email;
	
	@NotNull
	@Size(min = 6, max =8,message = "senha deve ser inserido, de 6 até 8 caracteres")
	private String senha;
	
	
	@OneToMany(mappedBy = "categoria", cascade = CascadeType.ALL)
	@JsonIgnoreProperties("usuario")
	private List<produtoModel> produto = new ArrayList<>();
	
	@OneToMany(mappedBy = "categoria", cascade = CascadeType.ALL)
	@JsonIgnoreProperties("usuario")
	private List<VendaModel> venda = new ArrayList<>();

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getNomeCompleto() {
		return nomeCompleto;
	}

	public void setNomeCompleto(String nomeCompleto) {
		this.nomeCompleto = nomeCompleto;
	}

	public String getEndereco() {
		return endereco;
	}

	public void setEndereco(String endereco) {
		this.endereco = endereco;
	}

	public long getCpf() {
		return cpf;
	}

	public void setCpf(long cpf) {
		this.cpf = cpf;
	}

	public String getNomeUsuario() {
		return nomeUsuario;
	}

	public void setNomeUsuario(String nomeUsuario) {
		this.nomeUsuario = nomeUsuario;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getSenha() {
		return senha;
	}

	public void setSenha(String senha) {
		this.senha = senha;
	}

	public List<produtoModel> getProduto() {
		return produto;
	}

	public void setProduto(List<produtoModel> produto) {
		this.produto = produto;
	}

	public List<VendaModel> getVenda() {
		return venda;
	}

	public void setVenda(List<VendaModel> venda) {
		this.venda = venda;
	}
}
