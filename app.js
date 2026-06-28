// Storage for terminal commands matching the assignment criteria
const commands = {
    create: 'npm create vite@latest my-react-app -- --template react',
    install: 'cd my-react-app && npm install',
    run: 'npm run dev'
};

/**
 * Updates the terminal box content based on selected step
 * @param {string} step - Key identifying the target command
 */
function showCmd(step) {
    const displayElement = document.getElementById('cmd-display');
    if (commands[step]) {
        displayElement.innerText = commands[step];
    }
}