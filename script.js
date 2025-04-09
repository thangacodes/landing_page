document.getElementById("deploy-button").addEventListener("click", function() {
    let commands = [
        "Initializing DevOps Pipeline...",
        "Fetching YAML configurations...",
        "Spinning up Kubernetes cluster...",
        "Terraforming Terraform Plan...",
        "Deploying microservices...",
        "🔥 Resume Deployed! Redirecting to LinkedIn..."
    ];

    let outputContainer = document.querySelector(".terminal");
    
    commands.forEach((cmd, index) => {
        setTimeout(() => {
            let newLine = document.createElement("p");
            newLine.classList.add("output");
            newLine.innerHTML = `root@devops:~$ <span class="glitch">${cmd}</span>`;
            outputContainer.appendChild(newLine);
        }, index * 1000);
    });

    setTimeout(() => {
        window.location.href = "https://www.linkedin.com/in/thangadurai-murugan-87958556/";
    }, 6000);
});