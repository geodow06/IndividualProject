package GeorgeDowne.Individual;

import GeorgeDowne.Individual.App; 
import GeorgeDowne.Individual.BuildingCube;
import GeorgeDowne.Individual.*;
public class Moves {

	public static void main(String[] args) {

//		adjustLayer(BuildingCube.faces[0], 4); 
		adjustLayer(BuildingCube.faces[0],1);
		adjustLayer(BuildingCube.faces[0],1);
		adjustLayer(BuildingCube.faces[0],1);
		adjustLayer(BuildingCube.faces[0],1);
//		adjustLayer(BuildingCube.faces[5], 4);
//		turnCommand(BuildingCube.faces[0]); 
//		printCube();
		

	}

	public static void adjustLayer(int[] x, int y) {

		App.adjustFace(x, y, x[9]);

		int turns = 0;
//		int[] finalface1 = new int[18]; 
//		int[] finalface2 = new int[18]; 
//		int[] finalface3 = new int[18]; 
//		int[] finalface4 = new int[18];
		while (turns < y) {
			turns++;

//			int[] dummy1 = { 1, 1, 1, 1, 1, 1, 1, 1, 1 }; 
			int[] dummy1 = new int[18]; 
			int[] dummy2 = new int[18]; 
			int[] dummy3 = new int[18]; 
			int[] dummy4 = new int[18];
//			int[] dummy2 = { 1, 1, 1, 1, 1, 1, 1, 1, 1 };
//			int[] dummy3 = { 1, 1, 1, 1, 1, 1, 1, 1, 1 };
//			int[] dummy4 = { 1, 1, 1, 1, 1, 1, 1, 1, 1 };

			adjustRow(dummy1, BuildingCube.faces[x[12]], BuildingCube.faces[x[10]], x);
			adjustRow(dummy2, BuildingCube.faces[x[14]], BuildingCube.faces[x[12]], x);
			adjustRow(dummy3, BuildingCube.faces[x[16]], BuildingCube.faces[x[14]], x);
			adjustRow(dummy4, BuildingCube.faces[x[10]], BuildingCube.faces[x[16]], x);

			BuildingCube.faces[x[10]] = dummy1;
			BuildingCube.faces[x[12]] = dummy2;
			BuildingCube.faces[x[14]] = dummy3;
			BuildingCube.faces[x[16]] = dummy4; 
			App.printLoop(dummy1); 
			App.printLoop(dummy2); 
			App.printLoop(dummy3); 
			App.printLoop(dummy4);
//			finalface1 = dummy1;

		}  
//		App.printLoop(BuildingCube.faces[x[10]]); 
		
//		BuildingCube.faces[x[10]]=finalface1;
//		BuildingCube.faces[x[12]]=finalface2;
//		BuildingCube.faces[x[14]]=finalface3;
//		BuildingCube.faces[x[16]]=finalface4;
		
	}

//	public static void adjustRow(int[] z, int[] y, int[] a, int[] s) {
//		if (s[9] == 0) {
//			for (int i = 0; i < 3; i++) {
//				// int[][] dummyMatrix = {{1,1,1},{1,1,1},{1,1,1}} ;
//				z[i] = y[i];
//				z[i + 3] = a[i + 3];
//				z[i + 6] = a[i + 6];
//			}
//
//		} else if (s[9] == 5) {
//			for (int i = 0; i < 3; i++) {
//
//				z[i] = a[i];
//				z[i + 3] = a[i + 3];
//				z[i + 6] = y[i + 6];
//			}
//		}
//	} 
	public static void adjustRow(int[] toFace, int[] fromFace, int[] calibratorFace, int[] rotatingFace) {
		if (rotatingFace[9] == 0) {
			for (int i = 0; i < 3; i++) {
				// int[][] dummyMatrix = {{1,1,1},{1,1,1},{1,1,1}} ;
				toFace[i] = fromFace[i];
				toFace[i + 3] = calibratorFace[i + 3];
				toFace[i + 6] = calibratorFace[i + 6];
			}

		} 
		else if (rotatingFace[9]==5) { 
			for (int i = 0; i < 3; i++) { 
				toFace[i] = calibratorFace[i];
				toFace[i +3] = calibratorFace[i + 3];
				toFace[i + 6] = fromFace[i + 6];
			}
		}
	} 
	public static void turnCommand(int[] x) { 
		int rowToChange = 0;
		if(x[10]==1) {
		
			rowToChange=x[10];
//			return rowToChange;  
			System.out.println(rowToChange);
		} 
		else {  
			
			rowToChange=x[0];
//			return rowToChange; 
			System.out.println(rowToChange);
		}
	} 
	public static void printCube() { 
		App.printLoop(BuildingCube.faces[0]);
		App.printLoop(BuildingCube.faces[1]);
		App.printLoop(BuildingCube.faces[2]);
		App.printLoop(BuildingCube.faces[3]);
		App.printLoop(BuildingCube.faces[4]);
		App.printLoop(BuildingCube.faces[5]);
	}

}
