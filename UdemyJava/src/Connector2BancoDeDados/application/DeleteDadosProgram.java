package Connector2BancoDeDados.application;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;

import Connector2BancoDeDados.db.DB;
import Connector2BancoDeDados.db.DBIntegrityException;

public class DeleteDadosProgram {

	public static void main(String[] args) {

		Connection conn = null;
		PreparedStatement st= null;
		
		try {
			conn =DB.getConnection();
			
			st = conn.prepareStatement(
					"DELETE FROM department WHERE Id = ?");
	
			
			st.setInt(1,2);
			
		int rowsAffected = st.executeUpdate();
		
		
				System.out.println("Done! rows affected: " + rowsAffected);
		
		
		}catch (SQLException e) {
			throw new DBIntegrityException(e.getMessage());
		}finally {
			
			DB.closeStatement(st);
			DB.closeConnection();
		}

	}

}
