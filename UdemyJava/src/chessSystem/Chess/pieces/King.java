package chessSystem.Chess.pieces;

import chessSystem.Chess.ChessPiece;
import chessSystem.Chess.Color;
import chessSystem.boardgame.Board;

public class King extends ChessPiece {

	public King(Board board, Color color) {
		super(board, color);
	
	}

	@Override
	public String toString() {
		return "K";
	}

}
