package Connector2BancoDeDados.application;

import Connector2BancoDeDados.model.entities.Department;

public class ProgramMain {

	public static void main(String[] args) {
		Department d1 = new Department(1,"Books");
        System.out.println(d1);
	}

}
