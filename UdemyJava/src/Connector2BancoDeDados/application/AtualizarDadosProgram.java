package Connector2BancoDeDados.application;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;


import Connector2BancoDeDados.db.DB;

public class AtualizarDadosProgram {

	public static void main(String[] args) {
		
		
		Connection conn = null;
		PreparedStatement st= null;
		
		try {
			conn =DB.getConnection();
			
			st = conn.prepareStatement(
					"UPDATE seller SET BaseSalary = BaseSalary + ? WHERE(DepartmentId = ?)");
	
			st.setDouble(1,200.0);
			st.setInt(2,2);
			
		int rowsAffected = st.executeUpdate();
		
		
				System.out.println("Done! rows affected: " + rowsAffected);
		
		
		}catch (SQLException e) {
			e.printStackTrace();
		}finally {
			
			DB.closeStatement(st);
			DB.closeConnection();
		}

	}

}
