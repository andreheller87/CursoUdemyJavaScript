package chessSystem.Application;

import chessSystem.Chess.ChessMatch;

public class Program {

	public static void main(String[] args) {

		ChessMatch chessMatch = new ChessMatch();
		UI.printBoard(chessMatch.getpieces());
	}

}
