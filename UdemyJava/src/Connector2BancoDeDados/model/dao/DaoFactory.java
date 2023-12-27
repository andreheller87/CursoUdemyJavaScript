package Connector2BancoDeDados.model.dao;

import Connector2BancoDeDados.model.dao.impl.SellerDaoJDBC;

public class DaoFactory {

	public static SellerDao createSellerDao() {
		return new SellerDaoJDBC();
	}
}
