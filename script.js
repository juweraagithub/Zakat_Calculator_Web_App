// Load saved theme
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
}

// Toggle Dark Mode
document.getElementById("themeToggle").onclick = function () {
  document.body.classList.toggle("dark");

  // Save preference
  if (document.body.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
    this.textContent = "☀️";
  } else {
    localStorage.setItem("theme", "light");
    this.textContent = "🌙";
  }
};

// Zakat Calculation
function calculateZakat() {
  let cash = parseFloat(document.getElementById("cash").value) || 0;
  let gold = parseFloat(document.getElementById("gold").value) || 0;
  let silver = parseFloat(document.getElementById("silver").value) || 0;
  let business = parseFloat(document.getElementById("business").value) || 0;
  let owed = parseFloat(document.getElementById("owed").value) || 0;
  let debt = parseFloat(document.getElementById("debt").value) || 0;

  let total = cash + gold + silver + business + owed - debt;

  if (total < 0) total = 0;

  let zakat = total * 0.025;

  document.getElementById("result").textContent = `Zakat: ${zakat.toFixed(2)} Birr`;

  // Save calculation result
  localStorage.setItem("lastZakat", zakat.toFixed(2));
}

// Reset form
function resetForm() {
  document.querySelectorAll("input").forEach(input => input.value = "");
  document.getElementById("result").textContent = "Zakat: 0 Birr";
  localStorage.removeItem("lastZakat");
}
