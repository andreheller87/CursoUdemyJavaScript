package productNote.application;

import productNote.entities.OrderItem;
import productNote.entities.Product;

public class Program {

	public static void main(String[] args) {

		Product p1 = new Product("TV", 1000.0);
		Product p2 = new Product("TV", 1000.0);

		OrderItem oi1 = new OrderItem(1, 1000.0, p1);
		System.out.println(oi1);

	}

}
