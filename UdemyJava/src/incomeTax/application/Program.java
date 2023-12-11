package incomeTax.application;

import java.util.ArrayList;
import java.util.List;
import java.util.Locale;
import java.util.Scanner;

import incomeTax.entities.Company;
import incomeTax.entities.Individual;
import incomeTax.entities.TaxPayer;

public class Program {

	public static void main(String[] args) {

		Locale.setDefault(Locale.US);
		Scanner sc = new Scanner(System.in);

		List<TaxPayer> list = new ArrayList<>();

		System.out.print("Enter the number of taxpayers: ");
		int N = sc.nextInt();

		for (int i = 1; i <= N; i++) {
			System.out.println("Taxpayer #" + i + " data:");
			System.out.print("Individual or company (i/c)?");
			char type = sc.next().charAt(0);
			System.out.print("Name: ");
			String name = sc.next();
			System.out.print("Anual income: ");
			double anualIncome = sc.nextDouble();

			if (type == 'i') {
				System.out.print("Health expenditures: ");
				Double health = sc.nextDouble();
				list.add(new Individual(name, anualIncome, health));
			} else {
				System.out.print("Number of employees: ");
				Integer employees = sc.nextInt();
				list.add(new Company(name, anualIncome, employees));
			}
		}
		System.out.println();
		System.out.println("TAXES PAID:");

		Double totalTax = 0.0;
		for (TaxPayer taxPayer : list) {
			System.out.println(taxPayer.getName() + ": $ " + String.format("%.2f", taxPayer.tax()));
			totalTax += taxPayer.tax();
		}

		System.out.println();
		System.out.println("TOTAL TAXES: $ " + String.format("%.2f", totalTax));
		sc.close();

	}

}
