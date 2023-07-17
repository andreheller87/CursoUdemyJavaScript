package heranca.application;

import heranca.entites.BusinessAccount;

public class Program {

	public static void main(String[] args) {
		
		
		BusinessAccount businessAccount = new BusinessAccount(001, "Andre Heller",0.0, 1000.0);
		
		System.out.println(businessAccount);

	}

}
