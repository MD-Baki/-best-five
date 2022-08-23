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
            li.innerText = playerName;
            selectPlayerList.appendChild(li);
        }
        else {
            alert("Select Only Five Player")
        }
    })
}

function getNumberFromFilde(id) {
    const fildeName = document.getElementById(id);
    const stringValue = fildeName.value;
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
    const managerCost = getElementById("manager-cost");
    const coachCost = getElementById("coach-cost");
    const finalCost = playerTotalCost + managerCost + coachCost;
    setTextById("total", finalCost);
})