// Select Player Function
const selectAllBtn = document.querySelectorAll(".select_btn");

const selectPlayerList = document.getElementById("select-players");

let counter = 1;

for (const selectBtn of selectAllBtn) {
    selectBtn.addEventListener("click", function (event) {

        const playerName = event.target.parentNode.firstElementChild.innerText;

        if (counter <= 5) {
            counter++

            event.target.setAttribute("disabled", true);
            event.target.classList.add("disable");
            event.target.parentNode.parentNode.classList.add("active");

            const li = document.createElement("li");
            li.classList.add("mb-2")
            li.innerText = playerName;
            selectPlayerList.appendChild(li);
        }
        else {
            alert("Select Only Five Player")
        }
    })
}

// Player budget Function
function getNumberFromFilde(id) {
    const fildeName = document.getElementById(id);
    const stringValue = fildeName.value;
    const convertNumber = parseInt(stringValue);
    return convertNumber;
}

function getValueFromText(id) {
    const fildeName = document.getElementById(id);
    const stringValue = fildeName.innerText;
    const convertNumber = parseInt(stringValue);
    return convertNumber;
}

function setValueById(id, value) {
    const valueId = document.getElementById(id);
    valueId.innerText = value;
}

const playerCost = document.getElementById("player-cost");
playerCost.addEventListener("click", function () {
    const playerCounter = document.querySelectorAll("li");

    const playerCostCount = getNumberFromFilde("per-player-cost");
    const playerCostTotal = playerCostCount * playerCounter.length;
    setValueById("player-expenses", playerCostTotal);
})

const totalCost = document.getElementById("calc-total-btn");
totalCost.addEventListener("click", function () {

    const playerTotalCost = getValueFromText("player-expenses");
    const managerCost = getNumberFromFilde("manager-cost");
    console.log(managerCost);
    const coachCost = getNumberFromFilde("coach-cost");
    console.log(coachCost);
    const finalCost = playerTotalCost + managerCost + coachCost;
    setValueById("totalCost", finalCost);
})

// Alert function
const selectAllInput = document.querySelectorAll("input");
for (const input of selectAllInput) {
    input.addEventListener("keyup", function (event) {
        const number = parseInt(event.target.value);
        if (isNaN(number)) {
            alert("Plase type valid number");
            event.target.value = "";
        }


    })

}