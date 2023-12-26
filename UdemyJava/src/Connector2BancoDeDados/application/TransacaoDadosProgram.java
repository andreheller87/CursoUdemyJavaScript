package Connector2BancoDeDados.application;

import java.sql.Connection;
import java.sql.SQLException;
import java.sql.Statement;

import Connector2BancoDeDados.db.DB;
import Connector2BancoDeDados.db.DBIntegrityException;
import JavaConnectorBancoDeDados.db.DbException;

public class TransacaoDadosProgram {

	public static void main(String[] args) {
		Connection conn = null;
		Statement st= null;
		
		try {
			conn =DB.getConnection();
			conn.setAutoCommit(false);
			st = conn.createStatement();
	
			
			
			
		int rows1 = st.executeUpdate("UPDATE seller SET  BaseSalary = 2090 WHERE DepartmentId = 1");
		/*int x =1;
		if(x<2) {
			throw new DbException("Fake Error " );
		}*/
		
		int rows2 = st.executeUpdate("UPDATE seller SET  BaseSalary = 3090 WHERE DepartmentId = 2");
		
		conn.commit();
				System.out.println("Done! rows 1: " + rows1);
				System.out.println("Done! rows 2: " + rows2);
		
		}catch (SQLException e) {
			try {
				conn.rollback();
				throw new DbException("Transaction rolled back! Caused by: " + e.getMessage());
			} catch (SQLException e1) {
				throw new DbException("Error trying to rollback! Caused by: " + e1.getMessage());
			}
			
		}finally {
			
			DB.closeStatement(st);
			DB.closeConnection();
		}


	}

}