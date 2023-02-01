function cinema(input) {
    let movieType = input[0];
    let rows = Number(input[1]);
    let cols = Number(input[2]);
    let price = 0;

    let places = rows * cols;

    if (movieType === "Premiere") {
        price = 12.00
    } else if (movieType === "Normal") {
        price = 7.50
    } else if (movieType === "Discount") {
        price = 5.00
    }

    console.log((places * price).toFixed(2));

}

cinema(["Discount", "12", "30"])


