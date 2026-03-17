const notify = (() => {
    const container = document.getElementById("modalContainer");

    function create({title="", message="", type="info", actions=[], autoClose=0}) {
        const backdrop = document.createElement("div");
        backdrop.className = "modal-backdrop";

        const modal = document.createElement("div");
        modal.className = `modal-component modal-${type}`;

        modal.innerHTML = `
            <div class="modal-header">
                <span>${title}</span>
                <button class="modal-close">&times;</button>
            </div>
            <div class="modal-body">${message}</div>
            <div class="modal-actions"></div>
        `;

        // Actions
        const actionsContainer = modal.querySelector(".modal-actions");
        actions.forEach(action => {
            const btn = document.createElement("button");
            btn.className = "modal-btn " + (action.class || "");
            btn.textContent = action.label;
            btn.onclick = () => {
                if(action.callback) action.callback();
                close();
            };
            actionsContainer.appendChild(btn);
        });

        // Close button
        modal.querySelector(".modal-close").onclick = close;

        // Append modal
        backdrop.appendChild(modal);
        container.appendChild(backdrop);

        // Auto-close
        if(autoClose > 0){
            setTimeout(close, autoClose);
        }

        function close() {
            modal.style.animation = "modalFadeOut 0.2s forwards";
            setTimeout(()=> backdrop.remove(), 200);
        }

        return {close};
    }

    return {show:create};
})();

/*
// Example API response
fetch("/api/notify")
    .then(res => res.json())
    .then(data => {
        notify.show({
            title: data.title,
            message: data.message,
            type: data.type,
            actions: [
                {label: "View", class:"modal-btn-primary", callback: ()=> console.log("View clicked")},
                {label: "Dismiss", class:"modal-btn-secondary"}
            ],
            autoClose: 5000
        });
    });
*/