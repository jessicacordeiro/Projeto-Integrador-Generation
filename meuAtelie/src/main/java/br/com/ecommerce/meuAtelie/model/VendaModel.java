package br.com.ecommerce.meuAtelie.model;

import java.sql.Date;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
<<<<<<< HEAD
=======

>>>>>>> e55d5ef08ad9c9e22c4c77d1a52ee2c78b00c28b
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name = "tb_venda")
public class VendaModel {
<<<<<<< HEAD
		
	@Id @GeneratedValue(strategy = GenerationType.IDENTITY) private long id;

	private Date date = new java.sql.Date(System.currentTimeMillis());
		
	@ManyToOne
	@JsonIgnoreProperties("venda")
	private produtoModel produto;
		
=======

	@Id 
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;

	private Date date = new java.sql.Date(System.currentTimeMillis());

	@ManyToOne
	@JsonIgnoreProperties("venda")
	private produtoModel produto;

>>>>>>> e55d5ef08ad9c9e22c4c77d1a52ee2c78b00c28b
	@ManyToOne
	@JsonIgnoreProperties("venda")
	private UsuarioModel usuario;

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public Date getDate() {
		return date;
	}

	public void setDate(Date date) {
		this.date = date;
	}

	public produtoModel getProduto() {
		return produto;
	}

	public void setProduto(produtoModel produto) {
		this.produto = produto;
	}

	public UsuarioModel getUsuario() {
		return usuario;
	}

	public void setUsuario(UsuarioModel usuario) {
		this.usuario = usuario;
	}
<<<<<<< HEAD
}

=======

}
>>>>>>> e55d5ef08ad9c9e22c4c77d1a52ee2c78b00c28b
