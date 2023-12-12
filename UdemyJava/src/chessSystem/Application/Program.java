package chessSystem.Application;

import chessSystem.Chess.ChessMatch;
import chessSystem.boardgame.Board;
import chessSystem.boardgame.Position;

public class Program {

	public static void main(String[] args) {

		ChessMatch chessMatch = new ChessMatch();
		UI.printBoard(chessMatch.getpieces());
	}

}
