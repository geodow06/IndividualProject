// console.log(document.getElementById("A1").check); 

// console.log(result); 
// var result = document.getElementsById("A1").checked; 
// console.log(document.getElementById("A1").checked); 

// function clickMe(e){ 
    
//     console.log("You have clicked button id = "+e.id+" and button value = "+document.getElementById(e.id).value)
// }  
// var result = 1;
// function clickMe(e){ 
    
//     result = document.getElementById(e.id).value; 
//     console.log(result);
// }   



// import java.util.ArrayList; 
// import java.util.Arrays;
// import java.util.List;
// import java.util.Scanner;
// public class Algorithm {
// 	public static void main(String[] args) {

		
// 	}

function Algorithm() {
    // let alg = "U U U U";
//		Scanner algScanner = new Scanner(System.in);
//		console.logln("type in the algroithm : ");
//		String alg = algScanner.nextLine();
    document.getElementById("Algorithm").submit();
    let acceptableAlg = true;
    let individual = (alg.split(" ")); 
    // new ArrayList<String>();
    // individual = alg.split(" ");
    for (let i = 0; i < individual.length; i++) {

        let move = individual[i];
        switch (move) {
        case "U":
            console.log("U"); 
            // Moves.adjustLayer(BuildingCube.faces[0], 1);
            break;
        case "U'":
            console.log("U'");
            break;
        case "U2":
            console.log("U2"); 
            // Moves.adjustLayer(BuildingCube.faces[0], 2);
            break;
        case "F":
            console.log("F");
            break;
        case "F'":
            console.log("F'");
            break;
        case "F2":
            console.log("F2");
            break;
        case "R":
            console.log("R");
            break;
        case "R'":
            console.log("R'");
            break;
        case "R2":
            console.log("R2");
            break;
        case "B":
            console.log("B");
            break;
        case "B'":
            console.log("B'");
            break;
        case "B2":
            console.log("B2");
            break;
        case "L":
            console.log("L");
            break;
        case "L'":
            console.log("L'");
            break;
        case "L2":
            console.log("L2");
            break;
        case "D":
            console.log("D"); 
            // Moves.adjustLayer(BuildingCube.faces[5], 1);
            break;
        case "D'":
            console.log("D'");
            break;
        case "D2":
            console.log("D2"); 
            // Moves.adjustLayer(BuildingCube.faces[5], 2);
            break;
        case "x":
            console.log("x");
            break;
        case "x'":
            console.log("x'");
            break;
        case "y":
            console.log("y");
            break;
        case "y'":
            console.log("y'");
            break;
        case "z":
            console.log("z");
            break;
        case "z'":
            console.log("z'");
            break;
        default:
            console.log("not a move");
            acceptableAlg = false;
            break;

        }
        console.log(" ");

    }
    console.log();
    if (acceptableAlg) {
        console.log("would you like to save this algortithm to your database");
    } 
    // App.printLoop(BuildingCube.faces[0]);
    // App.printLoop(BuildingCube.faces[1]);
    // App.printLoop(BuildingCube.faces[2]);
    // App.printLoop(BuildingCube.faces[3]);
    // App.printLoop(BuildingCube.faces[4]);
    // App.printLoop(BuildingCube.faces[5]);

}
Algorithm();


