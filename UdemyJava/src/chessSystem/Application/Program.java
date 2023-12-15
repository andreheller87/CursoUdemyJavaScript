package chessSystem.Application;

import chessSystem.Chess.ChessMatch;

public class Program {

	// git // java chessSystem/Application/Program

	public static void main(String[] args) {

		ChessMatch chessMatch = new ChessMatch();
		UI.printBoard(chessMatch.getpieces());
	}

}
