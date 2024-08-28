function calculateCosts() {
    const roomType = document.getElementById('roomType').value;
    const totalDays = parseInt(document.getElementById('totalDays').value);
    const totalPersons = parseInt(document.getElementById('totalPersons').value);
    const advanceAmount = parseFloat(document.getElementById('advanceAmount').value);

    const deluxRate = parseFloat(document.getElementById('deluxRate').value);
    const suiteRate = parseFloat(document.getElementById('suiteRate').value);
    const acRate = parseFloat(document.getElementById('acRate').value);
    const lockerRate = parseFloat(document.getElementById('lockerRate').value);

    const hasAc = document.getElementById('ac').checked;
    const hasLocker = document.getElementById('locker').checked;

    let roomCost = 0;
    if (roomType === 'Delux') {
        roomCost = deluxRate;
    } else if (roomType === 'Suite') {
        roomCost = suiteRate;
    }

    let amenitiesCost = 0;
    if (hasAc) amenitiesCost += acRate;
    if (hasLocker) amenitiesCost += lockerRate;

    let totalRoomCost = roomCost * totalDays;
    let totalCost = totalRoomCost + amenitiesCost;
    
    // Extra person charge if more than 2 persons
    const extraPersonCharge = 1000;
    if (totalPersons > 2) {
        totalCost += (totalPersons - 2) * extraPersonCharge * totalDays;
    }

    const balance = totalCost - advanceAmount;

    document.getElementById('totalCost').value = totalCost.toFixed(2);
    document.getElementById('balance').value = balance.toFixed(2);
}
