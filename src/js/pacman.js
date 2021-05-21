class Pacman {

    construcor(stage, xpos, ypos, mouthOpen) {
        this.stage = stage;
        this.xpos = xpos;
        this.ypos = ypos;
        this.mouthOpen = mouthOpen;
    }

    render() {
        const pac = document.querySelector("div");
        pac.className = "entity entity--pac pacboy-active-light";
     
        
        document.addEventListener('keydown', (event) => {
            if(event.code === 'ArrowRight') {
            this.moveRight();
                
            } else if (event.code === "ArrowLeft") {
               this.moveLeft();
            } else if (event.code === "ArrowUp") {
                this.moveUp();
            } else {
                    if (event.code === "ArrowDown") {
                         this.moveDown();
                    }
                }

                this.update();
            });
            return pac;
        };

        mount(parent) {
            this.element = this.render();
            parent.appendChild(this.element);

            this.update();
        };

        moveRight = () => {
            if(this.xpos < this.stage.width - 1) {
            this.xpos++;
            }
            console.log(this.stage.width);
            if (this.mouthOpen) {
             this.element.pac.style.backgroundPositionX = "0px";
             this.element.pac.style.backgroundPositionY = "0px";
            } else {
                this.element.pac.style.backgroundPositionX = "90px";
                this.element.pac.style.backgroundPositionY = "0px";

            }

            this.update();
        }

        moveLeft = () => {
            if(this.xpos > 0) {
                this.xpos -= 1;
            }
            if (this.mouthOpen) {
                this.element.pac.style.backgroundPositionX = "0px";
                this.element.pac.style.backgroundPositionY = "-80px";
            } else {
                this.element.pac.style.backgroundPositionX = "90px";
                this.element.pac.style.backgroundPositionY = "-80px";

            }

            this.update();
            
        }

        moveUp = () => {
            if(this.ypos > 0) {
                this.ypos--;
            }
            if(this.mouthOpen) {
               this.element.pac.style.backgroundPositionX = "0px";
               this.element.pac.style.backgroundPositionY = "100px";
            } else {
               this.element.pac.style.backgroundPositionX = "90px";
               this.element.pac.style.backgroundPositionY = "100px";
            }

            this.update();
        }

        moveDown = () => {
            if(this.ypos < this.stage.height - 1) {
               this.ypos++;
            } 
            if(this.mouthOpen) {
                this.element.pac.style.backgroundPositionX = "90px";
                this.element.pac.style.backgroundPositionY = "65px";
            } else {
                this.element.pac.style.backgroundPositionX = "90px";
                this.element.pac.style.backgroundPositionY = "65px";
            }
            
            this.update();
        }

        update() {
            this.element.style.left = this.xpos * TILE_SIZE + "px";
            this.element.style.top = this.ypos * TILE_SIZE + "px";
            this.mouthOpen = !this.mouthOpen;

            console.log(this.mouthOpen)
        }

    };
