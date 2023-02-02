function journey(input) {

    let budget = Number(input[0]);
    let season = input[1];
    let destination = "";
    let placeForHoliday = "";
    let price = 0;

    switch (season) {
        case "summer":
            if(budget <= 100){
                destination = "Bulgaria";
                price = budget * 0.30;
                placeForHoliday = "Camp";
            }else if(budget <= 1000){
                destination = "Balkans";
                price = budget * 0.40;
                placeForHoliday = "Camp";
            } else if(budget > 1000){
                destination = "Europe";
                price = budget * 0.90;
                placeForHoliday = "Hotel";
            }
            break;
        case "winter":
            if(budget <= 100){
                destination = "Bulgaria";
                price = budget * 0.70;
                placeForHoliday = "Hotel";
            }else if(budget <= 1000){
                destination = "Balkans";
                price = budget * 0.80;
                placeForHoliday = "Hotel";
            } else if(budget > 1000){
                destination = "Europe";
                price = budget * 0.90;
                placeForHoliday = "Hotel";
            }
            break;
    
        default:
            break;
    }

    console.log(`Somewhere in ${destination}`);
    console.log(`${placeForHoliday} - ${price.toFixed(2)}`);
    
}

journey(["1500", "summer"])