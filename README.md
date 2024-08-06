# notepad

## Table of contents

- [Overview](#overview)
  - [Notepad features](#notepad-features)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Acknowledgments](#acknowledgments)

## Overview

### Notepad features

Users are able to:

- create notes
- save notes to local storage
- display list of all notes
- open and close note


### Screenshot

![](./assets/screenshots/Screen%20Shot%202024-08-06%20at%2013.11.41.png)

![](./assets/screenshots/Screen%20Shot%202024-08-06%20at%2013.11.47.png)

![](./assets/screenshots/Screen%20Shot%202024-08-06%20at%2013.12.01.png)

### Links

- Code URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- JavaScript

### What I learned

getting an HTML attribute

```js
item.getAttribute('id')
```
saving and retrieving from local storage:

```js
//saving notes
localStorage.setItem('notes', JSON.stringify(notes))
//retrieving notes
const notes = JSON.parse(localStorage.getItem("notes")) || [];
```

### Continued development
Users should be able to:

- edit text and text files
  - create
  - edit
  - delete
- save changes
  - manually
  - automatically
- display list of all notes
- Undo and Redo changes
- cut, copy, paste
- file management, organize files notes in a hierarchical folder structure

Other features to add down the line:
- dark theme
- image insertion
- voice to text
- help and feedback
- search  and filter
- formatting options
- sharing and export
- customization
- checklist
- cloud storage
- note recovery
- audio recording and playback
- password protection


### Useful resources

- [How to code a better To-Do List - Tutorial](youtube.com/webdevsimplified) 
  - This helped me with the clear elements function to avoid redundancy on the lists and when displaying notes.
  - listing all the note titles
  - using find() to match the id of list items with id of note object.
  - saving to local storage

## Acknowledgments
- I got a lot of inspiration from the [How to code a better To-Do List - Tutorial] from youtube.com/webdevsimplified.
- I got the README template from https://www.frontendmentor.io