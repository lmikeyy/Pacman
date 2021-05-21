'use strict';

let container = document.querySelector(".container")

const stage = new Stage(5, 5)
stage.mount(container);

let stage1 = document.querySelector(".stage")

const pacman = new Pacman(stage, 0, 0, true);
 pacman.mount(stage1);



