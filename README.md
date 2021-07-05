# Assembler User Interface
This project contains a prototype for the pHILOS Web Interface. It was made by Toni Müller as a final exam for the module "Clientseitige Webanwendungen" in the winter semester 2019/2020 at the MLU.

# Usage
First you have to install the dependencies:  
```sh
npm install
```

Now you have to build the App. You can use one of the following. However, I recommend to build the app one time (`npm run build`). This enables building the css file... As soon as it exists, you can use whatever you want. 
```sh
# build production app:
npm run build
```
or
```sh
# watching for changes:
npm run start
```

You can now access the webapp by running `npx http-server` and visit http://localhost:8080 in your browser.


# Documentation
The documentation was done with jsdoc. It can be created by running
```sh
npm run jsdoc
```
You can access the documentation by opening the `doc/jsdoc/index.html` file in your browser.


# Additional Information
1. The low-fidelity-prototype can be found in the `doc/` folder.

2. The UserStories were implementet as issues on gitlab. They got lost on the move to github.

3. To use the WebApp together with an actual backend you have to consider the following. Currently we have some fixed programs stored in `src/javascript/data/samplePrograms.js`. We access this file only in the Demo class in `src/javascript/data/samplePrograms.js`. So you will have to only edit these two files. My suggestion would be to implement two endpoints. One for compiling the program and sending error messages if there were any errors. The other one is for executing the next step of the program. It will need the commands of the program (see `src/javascript/classes/program.js` and the current programm state aka values of registers, line numbers, etc. (see `src/javascript/classes/programState.js`).

4. The app is aria conform, meaning you can tab through every important element. If you focus the editor and tab doesn't work anymore, please press `Esc`. Now you can continue tabbing.


# About the Modeling
One of the questions was to think about how we model the data and which datastructures we use. My thoughts are the following:

1. Program: The program is stored in a class in `src/javascript/classes/program.js`. We store the commands of the program as an array of strings. We also store the current status, error messages and the name of the program there.
2. ProgramState: A program can have different states (registers, number of next line, etc.). These are stored in a class in `src/javascript/classes/programState.js`.
3. A Register is basically a Map (NOT an object, Map keeps the order) of registernames and registervalues. We store these in a class in `src/javascript/classes/registerList.js`.
4. Because we want to move forwards and backwards in a program, we need a history. This is implemented in `src/javascript/classes/programStateHistory.js`. There we save all the states that occured so far. This allows us to never do the same request twice.
5. All other data (breakpoints, information about the views, etc.) is stored directly in the components and passed around in the WebApp.
