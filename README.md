# Assembler User Interface
This project contains a prototype for the pHILOS Web Interface. It was made by Toni Müller as a final exam for the module "Clientseitige Webanwendungen" in the winter semester 2019/2020 at the MLU.

# Usage
First you have to install the dependencies:  
```sh
npm install
```

Now you have to build the App. Use   
```sh
# watching for changes:
npm run start
```
or
```sh
# build production app:
npm run build
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

2. The UserStories can be found at [the issues list (open and closed ones)](https://gitlab.informatik.uni-halle.de/ajwxf/assembler-user-interface/issues?scope=all&utf8=%E2%9C%93&state=all).

