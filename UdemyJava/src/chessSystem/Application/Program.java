package chessSystem.Application;

import chessSystem.boardgame.Board;
import chessSystem.boardgame.Position;

public class Program {

	public static void main(String[] args) {
		Position position = new Position(1, 6);
		
		System.out.println(position.toString());
		
		Board board = new Board(8,8);

	}

}
