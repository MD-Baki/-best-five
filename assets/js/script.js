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
            alert("Select Onle Five Player")
        }
    })
}