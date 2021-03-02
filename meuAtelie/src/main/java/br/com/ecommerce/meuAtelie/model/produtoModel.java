package br.com.ecommerce.meuAtelie.model;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.validation.constraints.Size;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.sun.istack.NotNull;

@Entity
@Table(name = "tb_produto")
public class produtoModel {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;

	@NotNull
	@Size(min = 0, max = 50)
	private String nomeProduto;

	@NotNull
	@Size(min = 0, max = 1000)
	private String descricaoProduto;

	@NotNull
	private double precoProduto;

	private int quantidadeProduto;

	@NotNull
	@Size(min = 0, max = 200)
	private String imagemProduto;

	@Size(min = 0, max = 1000)
	private String avaliacaoProduto;

	@ManyToOne
	@JsonIgnoreProperties("produto")
	private CategoriaModel categoria;

	@ManyToMany(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
	@JoinTable(name = "tb_venda", joinColumns = @JoinColumn(name = "produto_id"), inverseJoinColumns = @JoinColumn(name = "usuario_id"))
	@JsonIgnoreProperties("produtos")
	private List<UsuarioModel> usuario = new ArrayList<>();

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getNomeProduto() {
		return nomeProduto;
	}

	public void setNomeProduto(String nomeProduto) {
		this.nomeProduto = nomeProduto;
	}

	public String getDescricaoProduto() {
		return descricaoProduto;
	}

	public void setDescricaoProduto(String descricaoProduto) {
		this.descricaoProduto = descricaoProduto;
	}

	public double getPrecoProduto() {
		return precoProduto;
	}

	public void setPrecoProduto(double precoProduto) {
		this.precoProduto = precoProduto;
	}

	public int getQuantidadeProduto() {
		return quantidadeProduto;
	}

	public void setQuantidadeProduto(int quantidadeProduto) {
		this.quantidadeProduto = quantidadeProduto;
	}

	public String getImagemProduto() {
		return imagemProduto;
	}

	public void setImagemProduto(String imagemProduto) {
		this.imagemProduto = imagemProduto;
	}

	public String getAvaliacaoProduto() {
		return avaliacaoProduto;
	}

	public void setAvaliacaoProduto(String avaliacaoProduto) {
		this.avaliacaoProduto = avaliacaoProduto;
	}

	public CategoriaModel getCategoria() {
		return categoria;
	}

	public void setCategoria(CategoriaModel categoria) {
		this.categoria = categoria;
	}

	public List<UsuarioModel> getUsuario() {
		return usuario;
	}

	public void setUsuario(List<UsuarioModel> usuario) {
		this.usuario = usuario;
	}
	
	
	
}
