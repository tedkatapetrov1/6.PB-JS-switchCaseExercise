function onTimeForTheExam(input) {
    let hourExam = Number(input[0]);
    let minExam = Number(input[1]);
    let hourArrival = Number(input[2]);
    let minArrival = Number(input[3]);

    let examTotalMinutes = minExam + hourExam * 60;
    let arrivingTotalMinutes = minArrival + hourArrival * 60;
    let minutesDifference = examTotalMinutes - arrivingTotalMinutes;

    if (minutesDifference >= 0 && minutesDifference <= 30) {
        console.log("On time");
    } else if (minutesDifference > 30) {
        console.log("Early");
    } else {
        console.log("Late");
    }

    if (minutesDifference >= 1 && minutesDifference < 60) {
        console.log(`${minutesDifference} minutes before the start`)
    } else if (minutesDifference >= 60) {
        let hoursEarlier = Math.floor(minutesDifference / 60);
        let minutesEarlier = minutesDifference % 60;
        if (minutesEarlier < 10) {
            console.log(`${hoursEarlier}:0${minutesEarlier} hours before the start`);
        } else {
            console.log(`${hoursEarlier}:${minutesEarlier} hours before the start`);
        }
    } else if (minutesDifference <= -1 && minutesDifference > -60) {
        console.log(`${-minutesDifference} minutes after the start`)
    } else if (minutesDifference <= -60) {
        let hoursLate = Math.floor(-minutesDifference / 60);
        let minutesLate = -minutesDifference % 60;
        if (minutesLate < 10) {
            console.log(`${hoursLate}:0${minutesLate} hours after the start`);
        } else {
            console.log(`${hoursLate}:${minutesLate} hours after the start`);
        }
    }
}

onTimeForTheExam(["14",
    "00",
    "13",
    "55"])






