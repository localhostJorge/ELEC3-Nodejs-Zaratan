
/*
Name: RJ Joshua C. Zaratan
Section: IV-BSIT B
Activity: ELEC 3 - N3
Date: November 27, 2026
*/

// Import built-in modules
const fs = require("fs");
const path = require("path");

// Folder where text files are stored
const filesDirectory = path.join(__dirname, "files");

// Create a file
function createFile(filename, content) {
    const filePath = path.join(filesDirectory, filename);

    if (fs.existsSync(filePath)) {
        console.log("File already exists.");
        return;
    }

    fs.writeFileSync(filePath, content);
    console.log("File created successfully:", filename);
}

// Read a file
function readFile(filename) {
    const filePath = path.join(filesDirectory, filename);

    try {
        const content = fs.readFileSync(filePath, "utf8");
        console.log("\nFile content:");
        console.log(content);
    } catch (error) {
        if (error.code === "ENOENT") {
            console.log("Error: File not found.");
        } else {
            console.log("Error:", error.message);
        }
    }
}

// Update a file by appending content
function updateFile(filename, content) {
    const filePath = path.join(filesDirectory, filename);

    try {
        fs.appendFileSync(filePath, content);
        console.log("File updated successfully:", filename);
    } catch (error) {
        if (error.code === "ENOENT") {
            console.log("Error: File not found.");
        } else {
            console.log("Error:", error.message);
        }
    }
}

// Delete a file
function deleteFile(filename) {
    const filePath = path.join(filesDirectory, filename);

    try {
        fs.unlinkSync(filePath);
        console.log("File deleted successfully:", filename);
    } catch (error) {
        if (error.code === "ENOENT") {
            console.log("Error: File not found.");
        } else {
            console.log("Error:", error.message);
        }
    }
}

// List files and display their details
function listFiles() {
    const filenames = fs.readdirSync(filesDirectory);

    if (filenames.length === 0) {
        console.log("No files found.");
        return;
    }

    console.log("\nFiles in directory:");

    filenames.forEach((filename) => {
        const filePath = path.join(filesDirectory, filename);
        const stats = fs.statSync(filePath);

        if (stats.isFile()) {
            const content = fs.readFileSync(filePath, "utf8");

            console.log("\nFull Path:", filePath);
            console.log("Filename:", path.basename(filePath));
            console.log("Extension:", path.extname(filePath));
            console.log("Contents:");
            console.log(content);
        }
    });
}

// Display menu
function showMenu() {
    console.log("\n===== N3 FILE MANAGER =====");
    console.log("1. Create File");
    console.log("2. Read File");
    console.log("3. Update File");
    console.log("4. Delete File");
    console.log("5. List Files");
    console.log("6. Exit");
}

// Main menu
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function askQuestion(question) {
    return new Promise((resolve) => {
        rl.question(question, resolve);
    });
}

async function startFileManager() {
    console.log("Name: RJ Joshua C. Zaratan");
    console.log("Section: IV-BSIT B");

    let running = true;

    while (running) {
        showMenu();

        const choice = await askQuestion("Enter your choice: ");

        switch (choice) {
            case "1": {
                const filename = await askQuestion("Enter filename: ");
                const content = await askQuestion("Enter file content: ");
                createFile(filename, content);
                break;
            }
            case "2": {
                const filename = await askQuestion("Enter filename to read: ");
                readFile(filename);
                break;
            }
            case "3": {
                const filename = await askQuestion("Enter filename to update: ");
                const content = await askQuestion("Enter content to append: ");
                updateFile(filename, "\n" + content);
                break;
            }
            case "4": {
                const filename = await askQuestion("Enter filename to delete: ");
                deleteFile(filename);
                break;
            }
            case "5":
                listFiles();
                break;
            case "6":
                console.log("Exiting File Manager. Goodbye!");
                running = false;
                break;
            default:
                console.log("Invalid choice. Please select 1-6.");
        }
    }

    rl.close();
}

startFileManager();
