package GeorgeDowne.Individual;

public class TestingMoves { 
	static int[][] faces = BuildingCube.faces;
	public static void main(String[] args) {

//		adjustLayer(BuildingCube.faces[0], 4);   
		initialiseCube();
		adjustLayer(faces[0],4,faces);
		adjustLayer(faces[0],1,faces);
//		printCube();
//		adjustLayer(BuildingCube.faces[5], 4);
//		turnCommand(BuildingCube.faces[0]); 
//		printCube();
		

	}
 
	public static int[][] initialiseCube(){  
		int[] u = BuildingCube.u;
		int[] f = BuildingCube.f;
		int[] r = BuildingCube.r;
		int[] b = BuildingCube.b;
		int[] l = BuildingCube.l;
		int[] d = BuildingCube.d; 
//		changed x[10] and x[12] of d around
		int[][] faces = BuildingCube.faces;
		return faces;
	}
	
	public static int[][] adjustLayer(int[] x, int y, int[][] faces) {

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

			adjustRow(dummy1, faces[x[12]], faces[x[10]], x);
			adjustRow(dummy2, faces[x[14]], faces[x[12]], x);
			adjustRow(dummy3, faces[x[16]], faces[x[14]], x);
			adjustRow(dummy4, faces[x[10]], faces[x[16]], x);

			faces[x[10]] = dummy1;
			faces[x[12]] = dummy2;
			faces[x[14]] = dummy3;
			faces[x[16]] = dummy4; 
			App.printLoop(dummy1); 
			App.printLoop(dummy2); 
			App.printLoop(dummy3); 
			App.printLoop(dummy4); 
			printCube();
//			finalface1 = dummy1; 
			return faces;

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
		App.printLoop(faces[0]);
		App.printLoop(faces[1]);
		App.printLoop(faces[2]);
		App.printLoop(faces[3]);
		App.printLoop(faces[4]);
		App.printLoop(faces[5]);
	}

}
