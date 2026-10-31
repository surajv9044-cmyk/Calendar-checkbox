const monthYear = 
document.getElementById("month-year");
const dates = 
document.getElementById("dates");
const prev = 
document.getElementById("prev");
const next = 
document.getElementById("next");
let currentDate = new Date();
function renderCalender() {
    let year = currentDate.getFullYear();
    let month = currentDate.getMonth();
    monthYear.innerText = 
    currentDate.toLocaleDateString("en-US", {
        month: "long",
        year: "numeric"
    });
    let firstDay = new Date(year, month, 1).getDay();
    let totalDays = new Date(year, month + 1, 0).getDate();
    dates.innerHTML = "";
    for (let i = 0; i < firstDay; i++) {
        dates.innerHTML += "<div></div>";
    }
    for (let day = 1; day <= totalDays; day++){
        let dateBox = 
        document.createElement("div");
         dateBox.classList.add("date");
         let today = new Date();
         if (
            day === today.getDate() &&
            month === today.getMonth() &&
            year === today.getFullYear()
         ) {
            dateBox.classList.add("today");
         }
         dateBox.innerHTML = `
         <span>${day}</span>
         <input type="checkbox">
         `;
         let checkbox = 
         dateBox.querySelector("input");
         let dateKey = `${year}-${month + 1}-${day}`;
         checkbox.checked = 
         localStorage.getItem(dateKey) === "true";
         checkbox.addEventListener("change", function() {
            localStorage.setItem(dateKey, checkbox.checked);
         });
         dates.appendChild(dateBox);
    }
}
prev.addEventListener("click", function()
{
    currentDate = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth() - 1, 1
    );
    renderCalender();
});
next.addEventListener("click", function()
{
    currentDate = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth() + 1, 1
    );
    renderCalender();
});
renderCalender();