package br.com.ecommerce.meuAtelie.model;

import java.util.ArrayList;
import java.util.List;
import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.Enumerated;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.validation.constraints.Size;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.sun.istack.NotNull;
import br.com.ecommerce.meuAtelie.model.util.CategoriaAceitas;
import javax.persistence.EnumType;

@Entity
@Table(name = "tb_produto")
public class ProdutoModel {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	private @Enumerated(EnumType.STRING) CategoriaAceitas categorias;
	
	@NotNull
	@Size(min = 0, max = 50)
	private String nomeProduto;

	@NotNull
	@Size(min = 0, max = 1000)
	private String descricaoProduto;

	@NotNull
	private String precoProduto;

	private int quantidadeProduto;

	@NotNull
	@Size(min = 0, max = 200)
	private String imagemProduto;

	
	@ManyToOne(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
	@JoinColumn(name = "criador")
	@JsonIgnoreProperties({"meusProdutos", "minhasCompras", "senha"})
	private UsuarioModel criadoPor;
	
	@ManyToMany(mappedBy = "minhasCompras", cascade = CascadeType.ALL, fetch = FetchType.EAGER)
	@JsonIgnoreProperties({"senha", "meusProdutos", "minhasCompras"})
	private List<UsuarioModel> compradoPor = new ArrayList<>();

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public CategoriaAceitas getCategorias() {
		return categorias;
	}

	public void setCategorias(CategoriaAceitas categorias) {
		this.categorias = categorias;
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

	public String getPrecoProduto() {
		return precoProduto;
	}

	public void setPrecoProduto(String precoProduto) {
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

	public UsuarioModel getCriadoPor() {
		return criadoPor;
	}

	public void setCriadoPor(UsuarioModel criadoPor) {
		this.criadoPor = criadoPor;
	}

	public List<UsuarioModel> getCompradoPor() {
		return compradoPor;
	}

	public void setCompradoPor(List<UsuarioModel> compradoPor) {
		this.compradoPor = compradoPor;
	}

	
	
	
}
