package JavaConnectorBancoDeDados.application;

import java.sql.Connection;

import JavaConnectorBancoDeDados.db.DB;



public class Program {

	public static void main(String[] args) {
		Connection conn = DB.getConnection();
		System.out.println("ok");
		DB.closeConnection();

	}

}
