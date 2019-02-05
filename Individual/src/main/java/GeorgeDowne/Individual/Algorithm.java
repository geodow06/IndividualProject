package GeorgeDowne.Individual;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Scanner;
public class Algorithm {
	public static void main(String[] args) {

		Algorithm();
	}

	public static void Algorithm() {
		String alg = "U U U U";
//		Scanner algScanner = new Scanner(System.in);
//		System.out.println("type in the algroithm : ");
//		String alg = algScanner.nextLine();
		boolean acceptableAlg = true;
		List<String> individual = Arrays.asList(alg.split(" "));// new ArrayList<String>();
		// individual = alg.split(" ");
		for (int i = 0; i < individual.size(); i++) {

			String move = new String(individual.get(i));
			switch (move) {
			case "U":
				System.out.print("U"); 
				Moves.adjustLayer(BuildingCube.faces[0], 1);
				break;
			case "U'":
				System.out.print("U'");
				break;
			case "U2":
				System.out.print("U2"); 
				Moves.adjustLayer(BuildingCube.faces[0], 2);
				break;
			case "F":
				System.out.print("F");
				break;
			case "F'":
				System.out.print("F'");
				break;
			case "F2":
				System.out.print("F2");
				break;
			case "R":
				System.out.print("R");
				break;
			case "R'":
				System.out.print("R'");
				break;
			case "R2":
				System.out.print("R2");
				break;
			case "B":
				System.out.print("B");
				break;
			case "B'":
				System.out.print("B'");
				break;
			case "B2":
				System.out.print("B2");
				break;
			case "L":
				System.out.print("L");
				break;
			case "L'":
				System.out.print("L'");
				break;
			case "L2":
				System.out.print("L2");
				break;
			case "D":
				System.out.print("D"); 
				Moves.adjustLayer(BuildingCube.faces[5], 1);
				break;
			case "D'":
				System.out.print("D'");
				break;
			case "D2":
				System.out.print("D2"); 
				Moves.adjustLayer(BuildingCube.faces[5], 2);
				break;
			case "x":
				System.out.print("x");
				break;
			case "x'":
				System.out.print("x'");
				break;
			case "y":
				System.out.print("y");
				break;
			case "y'":
				System.out.print("y'");
				break;
			case "z":
				System.out.print("z");
				break;
			case "z'":
				System.out.print("z'");
				break;
			default:
				System.out.print("not a move");
				acceptableAlg = false;
				break;

			}
			System.out.print(" ");

		}
		System.out.println();
		if (acceptableAlg) {
			System.out.println("would you like to save this algortithm to your database");
		} 
		App.printLoop(BuildingCube.faces[0]);
		App.printLoop(BuildingCube.faces[1]);
		App.printLoop(BuildingCube.faces[2]);
		App.printLoop(BuildingCube.faces[3]);
		App.printLoop(BuildingCube.faces[4]);
		App.printLoop(BuildingCube.faces[5]);

	}

}
