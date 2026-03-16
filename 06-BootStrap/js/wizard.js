function nextStep(step) {
	let tabTrigger = document.querySelector(
		`button[data-bs-target="#step${step}"]`
	);

	let tab = new bootstrap.Tab(tabTrigger);
	tab.show();
    updateProgress(step);
}

function previousStep(step) {
	let tabTrigger = document.querySelector(
		`button[data-bs-target="#step${step}"]`
	);

	let tab = new bootstrap.Tab(tabTrigger);
	tab.show();
    updateProgress(step);
}

function submitForm() {
    let area = document.getElementById("alert-area");
    let alert = document.createElement("div");

    alert.className = "alert alert-success";
    alert.textContent = "Registration completed successfully";

    area.appendChild(alert);
    setTimeout(() => alert.remove(), 3000);
}

function showAlert(message, type) {
	let area = document.getElementById("alert-area");
	let alert = document.createElement("div");

	alert.className = "alert alert-" + type;
	alert.textContent = message;

	area.appendChild(alert);
	setTimeout(() => alert.remove(), 3000);
}

function validateStep1() {
    let nameValue = document.getElementById("name").value;
    let emailValue = document.getElementById("email").value;

    if (nameValue === '' || emailValue === ''){
        showAlert("Please fill all fields", "danger");
        return false;
    } else {
        nextStep(2);
        return true;
    }
}

function updateProgress(step) {
	let progress = document.getElementById("wizardProgress");
	let percent = (step / 3) * 100;

	progress.style.width = percent + "%";
}