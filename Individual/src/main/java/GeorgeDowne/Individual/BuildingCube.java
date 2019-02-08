package GeorgeDowne.Individual;

public class BuildingCube {
	static int[] u = { 1, 2, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 2, 0, 3, 0, 4, 0 };
	static int[] f = { 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 0, 3, 2, 1, 4, 2, 5, 3 };
	static int[] r = { 3, 3, 3, 3, 3, 3, 3, 3, 3, 2, 0, 2, 1, 2, 3, 1, 5, 2 };
	static int[] b = { 4, 4, 4, 4, 4, 4, 4, 4, 4, 3, 0, 0, 2, 2, 4, 1, 5, 0 };
	static int[] l = { 5, 5, 5, 5, 5, 5, 5, 5, 5, 4, 0, 1, 1, 1, 3, 2, 5, 1 };
	static int[] d = { 6, 5, 6, 6, 6, 6, 6, 6, 6, 5, 4, 3, 3, 3, 2, 3, 1, 3 }; 
//	changed x[10] and x[12] of d around
	static int[][] faces = { u, f, r, b, l, d };

	
}
