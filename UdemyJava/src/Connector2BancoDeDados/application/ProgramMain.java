package Connector2BancoDeDados.application;

import java.util.Date;

import Connector2BancoDeDados.model.entities.Department;
import Connector2BancoDeDados.model.entities.Seller;

public class ProgramMain {

	public static void main(String[] args) {
		Department d1 = new Department(1,"Books");
		
		Seller seller = new Seller(1,"João","joao@gmail.com",new Date(),3000.0,d1);
		
        System.out.println(d1);
        System.out.println(seller);
	}

}
