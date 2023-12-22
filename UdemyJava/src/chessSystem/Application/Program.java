package chessSystem.Application;

import java.util.Scanner;

import chessSystem.Chess.ChessMatch;
import chessSystem.Chess.ChessPiece;
import chessSystem.Chess.ChessPosition;

public class Program {

	// git // java chessSystem/Application/Program

	public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
		ChessMatch chessMatch = new ChessMatch();
		while (true) {
			UI.printBoard(chessMatch.getpieces());
			System.out.println();
			System.out.println("Source: ");
			ChessPosition source = UI.redChessPosition(sc);
			System.out.println("Target: ");
			ChessPosition target = UI.redChessPosition(sc);
			
			ChessPiece capturedPiece =  chessMatch.performChessMove(source, target);
		}
		
	}

}
