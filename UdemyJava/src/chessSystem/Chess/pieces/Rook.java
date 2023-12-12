package chessSystem.Chess.pieces;

import chessSystem.Chess.ChessPiece;
import chessSystem.Chess.Color;
import chessSystem.boardgame.Board;

public class Rook extends ChessPiece{

	public Rook(Board board, Color color) {
		super(board, color);
	}

	@Override
	public String toString() {
		return "R";
	}
	
	

}
