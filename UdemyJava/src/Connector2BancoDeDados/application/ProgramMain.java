package Connector2BancoDeDados.application;

import Connector2BancoDeDados.model.dao.DaoFactory;
import Connector2BancoDeDados.model.dao.SellerDao;
import Connector2BancoDeDados.model.entities.Seller;

public class ProgramMain {

	public static void main(String[] args) {
	
		SellerDao dao = DaoFactory.createSellerDao();
		
		Seller seller = dao.findById(3);
    
        System.out.println(seller);
	}

}
