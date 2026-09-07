const fs = require("fs");

const fileName = "test.txt";

// 1. Create / Write File
fs.writeFile(fileName, "Hello, this is the Smart Utility Toolkit!\n", (err) => {
    if (err) {
        console.log("Error creating file:", err);
        return;
    }
    console.log("File created successfully: " + fileName);

    // 2. Read File
    fs.readFile(fileName, "utf-8", (err, data) => {
        if (err) {
            console.log("Error reading file:", err);
            return;
        }
        console.log("File content:", data);

        // 3. Update / Append to File
        fs.appendFile(fileName, "This line was appended.\n", (err) => {
            if (err) {
                console.log("Error updating file:", err);
                return;
            }
            console.log("File updated successfully.");

            // Read again after update
            fs.readFile(fileName, "utf-8", (err, updatedData) => {
                if (err) {
                    console.log("Error reading updated file:", err);
                    return;
                }
                console.log("Updated file content:", updatedData);

                // 4. Delete File
                fs.unlink(fileName, (err) => {
                    if (err) {
                        console.log("Error deleting file:", err);
                        return;
                    }
                    console.log("File deleted successfully: " + fileName);
                });
            });
        });
    });
});
