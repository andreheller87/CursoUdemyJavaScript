package heranca.application;

import heranca.entites.Account;
import heranca.entites.BusinessAccount;
import heranca.entites.SavingsAccount;

public class Program {

	public static void main(String[] args) {

		Account acc = new Account(1001, "Alex", 1000.0);

		BusinessAccount bacc = new BusinessAccount(1002, "Andre Heller", 0.0, 500.0);

		// UpCasting

		Account acc1 = bacc;
		Account acc2 = new BusinessAccount(1003, "Bob", 0.0, 200.0);
		Account acc3 = new SavingsAccount(1004, "Anna", 0.0, 300.0);

		// DownCasting

		BusinessAccount acc4 = (BusinessAccount) acc2;
		acc4.loan(200.0);

		if (acc3 instanceof BusinessAccount) {
			BusinessAccount acc5 = (BusinessAccount) acc3;
			acc5.loan(300.0);
			System.out.println("Loan!");
		}

		if (acc3 instanceof SavingsAccount) {
			SavingsAccount acc5 = (SavingsAccount) acc3;
			acc5.updateBalance();
			System.out.println("Update");
		}

		
		SavingsAccount accSave = new SavingsAccount(1014, "Gabriel",1000.0, 0.0);
		BusinessAccount accBusiness  = new BusinessAccount(1012, "Andre Heller", 1000.0, 500.0);
		
		acc.withdraw(200.0);
		accSave.withdraw(200.0);
		accBusiness.withdraw(200.0);
		
		
		
		System.out.println(acc.getBalance());
		System.out.println(accSave.getBalance());
		System.out.println(accBusiness.getBalance());

	}

}
