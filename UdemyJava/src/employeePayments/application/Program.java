package employeePayments.application;

import java.util.Locale;
import java.util.Scanner;

import employeePayments.entities.Department;
import employeePayments.entities.Worker;
import employeePayments.entities.enums.WorkerLevel;

public class Program {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		Locale.setDefault(Locale.US);

		System.out.print("Enter department's name: ");
		String departmentName = sc.nextLine();
		System.out.println("Enter worker data: ");

		System.out.print("Name:");
		String workerName = sc.nextLine();

		System.out.print("Level:");
		String workerLevel = sc.nextLine();

		System.out.print("Base salary:");
		double workerBaseSalary = sc.nextDouble();

		Worker worker = new Worker(workerName, WorkerLevel.valueOf(workerLevel), workerBaseSalary,
				new Department(departmentName));
		
		System.out.println("ok");
		
		sc.close();

	}

}
