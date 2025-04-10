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

    function typeCommand(command, index) {
        let newLine = document.createElement("p");
        newLine.classList.add("output");
        newLine.innerHTML = `root@td:~$ <span class="glitch"></span>`;
        outputContainer.appendChild(newLine);

        let glitchElement = newLine.querySelector(".glitch");

        let i = 0;
        let typingInterval = setInterval(() => {
            glitchElement.innerHTML += command[i++];
            if (i >= command.length) {
                clearInterval(typingInterval);
            }
        }, 100); // Typing speed (adjust as needed)
    }

    commands.forEach((cmd, index) => {
        setTimeout(() => {
            typeCommand(cmd, index);
        }, index * 2000); // Delay before each command starts typing
    });

    setTimeout(() => {
        window.location.href = "https://www.linkedin.com/in/thangadurai-murugan-87958556/";
    }, commands.length * 2000 + 2000); // Wait until last command completes
});
