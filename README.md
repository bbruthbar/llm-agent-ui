# Welcome

The purpose of this repository is to build an interface provided by the design team. The UI will display nodes with a question and edges (represented by arrows) that connect them together in a sequence. Clicking the “Add Node” button should append a new node to the end of the sequence.

Below is the initial design:
![the initial design](assets/workflow-ui.png)

## Building blocks
- This React + Typescript project was scaffolded using [Vite](https://vite.dev/)
- Vite requires [Node.js](https://nodejs.org/en/) version 20.19+, 22.12+. 
- [Shadcn/ui](https://ui.shadcn.com/) and [Tailwind CSS](https://tailwindcss.com/) - I chose these because I wanted to learn them.
- Required Iconography the [Lucide icon set](https://lucide.dev).

[View this project in action](https://www.ruthcirillo.info/llm-agent-ui)

## Getting Started
- Install the dependencies using `yarn install`
- Start the project `yarn dev`

## To Do
This was a time boxed activity, so a few items still need polish. Here are some items I would improve upon (no particular order)
* [ ] Add focus to node after "Add Node" button is clicked so a screen reader can announce the content.
* [ ] Add Component test case.
* [ ] Add Hover style on "Add Node" button.
* [ ] Add theme colors for interactions.
* [ ] Need clarification on display of nodes. Should the newly added node be displayed in the middle of the screen? Withthe current implementation, the last node added is at the bottom of the screen and the user would have to scroll to view it. 

