function hotelRoom(input) {
    let month = input[0];
    let overnightStays = Number(input[1]);
    let priceStudio = 0;
    let priceApartment = 0;

    switch (month) {
        case "May":
        case "October":
            priceStudio = overnightStays * 50;
            priceApartment = overnightStays * 65;
            if (overnightStays > 14) {  
                priceStudio = priceStudio * 0.70;
                priceApartment = priceApartment * 0.90;
            } else  if(overnightStays > 7) {
                priceStudio = priceStudio * 0.95;
            }
            break;
        case "June":
        case "September":
            priceStudio = overnightStays * 75.20;
            priceApartment = overnightStays * 68.70;
            if (overnightStays > 14) {
                priceStudio = priceStudio * 0.80;
                priceApartment = priceApartment * 0.90;
            }
            break;
        case "July":
        case "August":
            priceStudio = overnightStays * 76;
            priceApartment = overnightStays * 77;
            if (overnightStays > 14) {
                priceApartment = priceApartment * 0.90;
            }
            break;

        default:
            break;
    }

    console.log(`Apartment: ${priceApartment.toFixed(2)} lv.`);
    console.log(`Studio: ${priceStudio.toFixed(2)} lv.`);

}

hotelRoom(["August",
"20"])








