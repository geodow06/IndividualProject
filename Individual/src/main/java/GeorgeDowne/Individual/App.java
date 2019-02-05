package GeorgeDowne.Individual;



import GeorgeDowne.Individual.BuildingCube;

public class App {

	static int turns = 0;

	public static void main(String[] args) {

		adjustFace(BuildingCube.faces[5], 2, BuildingCube.faces[5][9]);  
		adjustFace(BuildingCube.faces[5], 2, BuildingCube.faces[5][9]);  
		adjustFace(BuildingCube.faces[5], 2, BuildingCube.faces[5][9]); 
		printLoop(BuildingCube.faces[5]);

	}

	public static void adjustFace(int[] x, int z, int r) {
		int turns = 0;
		while (turns < (z)) {

			turns++;

			int[] dummyMatrix = new int[18];
			
			dummyMatrix[0] = x[6];
			dummyMatrix[2] = x[0];
			dummyMatrix[8] = x[2];
			dummyMatrix[6] = x[8];

			dummyMatrix[4] = x[4];
			dummyMatrix[1] = x[3];
			dummyMatrix[5] = x[1];
			dummyMatrix[7] = x[5];
			dummyMatrix[3] = x[7];

			x = dummyMatrix;
			BuildingCube.faces[r] = x;

		}

	}

	public static void printLoop(int[] g) {
		int k = 0;
		for (int j = 0; j < 9; j++) {

			if (k == 2 | k == 5 | k == 8) {

				System.out.println(g[j]);
			} else {
				System.out.print(g[j] + " ");

			}
			k++;

		}
		System.out.println();
	}

}
