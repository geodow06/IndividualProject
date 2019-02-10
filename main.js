let formInput = document.querySelectorAll('#Algorithm');

document.querySelector('form.form-inline').addEventListener('submit', function (e) {
    e.preventDefault();
    console.log(formInput[0].value);
});

function Algorithm() {


    let acceptableAlg = true;
    let individual = formInput[0].value.split(" ");
    

    for (let i = 0; i < individual.length; i++) {

        let move = individual[i].toString();


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

                break;
            case "D'":
                console.log("D'");
                break;
            case "D2":
                console.log("D2");

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
                console.log(move.checked);
                break;

        }
        console.log(" ");


    }
    
    if (acceptableAlg) {
        console.log("would you like to save this algortithm to your database");
    }


}


document.querySelector('form.form-inline').addEventListener('submit', function (e) {
    e.preventDefault();
    Algorithm();
    console.log(formInput[0].value);
});