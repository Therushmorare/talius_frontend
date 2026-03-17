function createAlert(message, type="info", duration=4000){

    const container = document.getElementById("alertContainer");

    const alert = document.createElement("div");
    alert.className = `alert-component alert-${type}`;
    alert.innerHTML = `
        <span>${message}</span>
        <button class="alert-close">&times;</button>
    `;

    container.appendChild(alert);

    const removeAlert = () => {
        alert.classList.add("alert-hide");
        setTimeout(()=>alert.remove(),400);
    }

    alert.querySelector(".alert-close").onclick = removeAlert;

    setTimeout(removeAlert, duration);
}