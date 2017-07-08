# Library
A manager that allows you to save, edit, and share your favorite learning resources to localStorage.
  
### NOTICE
After building the angular version of this app I've realized that some of the naming and structural conventions seem a bit odd. I'll go back and clean up at a later date. It's actually kind of cool to see two different frameworks used in various ways to accomplish almost the same thing. It's also neat to see progress over time.
  
#### Quick Start
* Install dependencies with [npm](https://www.npmjs.com/): ```$ npm install```
* Run the development server with: ```$ npm run dev```

#### Notes:
1. Choose to use an event bus rather than vuex to store the state of the modals. This helped by making the modals decoupled from vuex.
2. No specific css property order was used.
3. No css practice was used (BEM, etc.).
4. No validation on form elements.
5. The grid centers all items. 
6. Minimal responsiveness
