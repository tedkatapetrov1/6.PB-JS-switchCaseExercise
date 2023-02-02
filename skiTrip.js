function skiTrip(input) {

    let days = Number(input[0]);
    let type = input[1];
    let grade = input[2];
    let price = 0;
    let nightStay = days - 1;

    switch (type) {
        case "room for one person":
            price = nightStay * 18.00;
            break;
        case "apartment":
            if (days < 10) {
                price = (nightStay * 25.00) * 0.70;
            } else if (days <= 15) {
                price = (nightStay * 25.00) * 0.65;
            } else if (days > 15) {
                price = (nightStay * 25.00) * 0.50;
            }
            break;
        case "president apartment":
            if (days < 10) {
                price = (nightStay * 35.00) * 0.90;
            } else if (days <= 15) {
                price = (nightStay * 35.00) * 0.85;
            } else if (days > 15) {
                price = (nightStay * 35.00) * 0.80;
            }
            break;
        default:
            break;
    }

    if (grade === "positive") {
        price = price + price* 0.25;
    } else if (grade === "negative") {
        price = price - (price * 0.10);
    }

    console.log(`${price.toFixed(2)}`);

}

skiTrip(["12",
"room for one person",
"positive"])




