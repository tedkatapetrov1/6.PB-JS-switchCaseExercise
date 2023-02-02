function fishingBoat(input) {
    let budget = Number(input[0]);
    let season = input[1];
    let fishersCount = Number(input[2]);
    let price = 0;

    switch (season) {
        case "Spring":
            price = 3000;
            break;
        case "Summer":
        case "Autumn":
            price = 4200;
            break;
        case "Winter":
            price = 2600;
            break;
        default:
            break;
    }

    if (fishersCount <= 6){
        price = price * 0.90;
    }else if(fishersCount <= 11){
        price = price * 0.85;
    }else {
        price = price * 0.75;
    }

    if(fishersCount % 2 === 0 && season !== "Autumn"){
        price = price * 0.95;
    }

    if(budget >= price){
        let moneyLeft = (budget - price).toFixed(2);
        console.log(`Yes! You have ${moneyLeft} leva left.`);
    }else {
        let moneyNeeded = (price - budget).toFixed(2);
        console.log(`Not enough money! You need ${moneyNeeded} leva.`);
    }

}

fishingBoat(["3600", "Autumn", "6"])

