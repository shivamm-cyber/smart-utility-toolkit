# Smart Utility Toolkit

## Project Description

The **Smart Utility Toolkit** is a simple backend development project built using **Node.js** and its built-in core modules. The main purpose of this project is to understand the fundamentals of Node.js and learn how backend programs work outside the browser. The project is designed without using any external npm packages, Express.js, databases, or third-party frameworks.

The toolkit contains multiple small utilities that demonstrate different features of Node.js. The first utility is a **CLI-based calculator** that uses the `process.argv` object to accept input directly from the terminal. It can perform basic mathematical operations such as addition, subtraction, multiplication, and division. It also handles invalid operations and inputs.

The second part of the project demonstrates **custom modules and code reusability**. A custom `isEven` module is created to check whether a number is even or odd. A `logger` module is also created to display messages in the terminal. These modules are exported using `module.exports` and imported into another file using `require()`.

The project also includes a **basic HTTP server** created using Node.js's `http` module. The server runs on a local port and provides different responses for different routes. For example, the `/` route displays a welcome message, `/about` displays information about the project, and `/contact` displays contact information. Invalid routes return a **404 error message**.

Another important feature is the **File Manager**, which uses the `fs` module. It demonstrates file operations such as creating, reading, updating, and deleting files. Proper error handling and console messages are used to understand the execution process.

Finally, the project contains a **Random Dice Generator** using the `crypto` module. It generates random numbers between 1 and 6 to simulate dice rolls.

Overall, the **Smart Utility Toolkit** provides practical experience with Node.js core modules, command-line programming, modular programming, HTTP routing, file management, randomness, and debugging. It helps students develop a strong foundation in backend development and understand how Node.js operates internally.

## Project Structure

```
smart-utility-toolkit/
│
├── calculator.js       → CLI calculator using process.argv
├── app.js              → Uses custom modules (isEven, logger)
├── server.js           → HTTP server using http module
├── fileManager.js      → File CRUD operations using fs module
├── dice.js             → Random dice generator using crypto module
├── test.txt            → File used for fs operations
│
├── modules/
│   ├── isEven.js       → Custom module to check even/odd
│   └── logger.js       → Custom logging module
│
└── README.md           → Project documentation
```

## How to Run

```bash
node calculator.js add 10 5
node app.js
node server.js
node fileManager.js
node dice.js
```

## Modules Used

| Module | Purpose |
|---|---|
| `process.argv` | Takes command-line arguments |
| `http` | Creates HTTP server |
| `fs` | Handles files |
| `crypto` | Generates secure random values |
| `module.exports` | Exports custom functionality |
| `require()` | Imports a module |
