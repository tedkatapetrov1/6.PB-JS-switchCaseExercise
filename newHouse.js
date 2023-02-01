// •	Ако Нели купи повече от 80 Рози - 10% отстъпка от крайната цена
// •	Ако Нели купи повече от 90  Далии - 15% отстъпка от крайната цена
// •	Ако Нели купи повече от 80 Лалета - 15% отстъпка от крайната цена
// •	Ако Нели купи по-малко от 120 Нарциса - цената се оскъпява с 15%
// •	Ако Нели Купи по-малко от 80 Гладиоли - цената се оскъпява с 20%
// Функцията получава 3 аргумента:
// •	Вид цветя - текст с възможности - "Roses", "Dahlias", "Tulips", "Narcissus", "Gladiolus"
// •	Брой цветя - цяло число в интервала [10…1000]
// •	Бюджет - цяло число в интервала [50…2500]


function newHouse(input) {
    let flowersType = input[0];
    let flowersCount = Number(input[1]);
    let budget = Number(input[2]);
    let priceRoses = 0;
    let priceDahlias = 0;
    let priceTulips = 0;
    let priceNarcissus = 0;
    let priceGladiolus = 0;
    let finalPrice = 0;



    switch (flowersType) {
        case "Roses":
            if (flowersCount <= 80) {
                finalPrice = flowersCount * 5;
            } else {
                priceRoses = flowersCount * 5;
                finalPrice = priceRoses * 0.90;
            }
            break;
        case "Dahlias":
            if (flowersCount <= 90) {
                finalPrice = flowersCount * 3.8;
            }
            else {
                priceDahlias = flowersCount * 3.8;
                finalPrice = priceDahlias * 0.85;
            }; break;
        case "Tulips":
            if (flowersCount <= 80) {
                finalPrice = flowersCount * 2.8;
            }
            else {
                priceTulips = flowersCount * 2.8;
                finalPrice = priceTulips * 0.85;
            }; break;
        case "Narcissus":
            if (flowersCount >= 120) {
                finalPrice = flowersCount * 3;
            }
            else {
                priceNarcissus = flowersCount * 3;
                finalPrice = priceNarcissus * 1.15;
            }; break;
        case "Gladiolus":
            if (flowersCount >= 80) {
                finalPrice = flowersCount * 2.5;
            }
            else {
                priceGladiolus = flowersCount * 2.5;
                finalPrice = priceGladiolus * 1.20;
            }; break;
    }
    let priceLeft = budget - finalPrice;
    let priceMore = finalPrice - budget;

    if (finalPrice <= budget) {

        console.log(`Hey, you have a great garden with ${flowersCount} ${flowersType} and ${priceLeft.toFixed(2)} leva left.`)
    }
    else {

        console.log(`Not enough money, you need ${priceMore.toFixed(2)} leva more.`)
    }



}

newHouse(["Roses",
"55",
"250"])




