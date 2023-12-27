package Connector2BancoDeDados.model.dao;

import java.util.List;

import Connector2BancoDeDados.model.entities.Seller;



public interface SellerDao {


	void insert(Seller obj);
	void update(Seller obj);
	void deleteById(Integer id);
	Seller findById(Integer id);
	List<Seller> findAll();
}

