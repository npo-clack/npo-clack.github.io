window.addEventListener("load", event=> {

    
    let zahyouX=2;
    let zahyouY=2;

    let timer = setInterval(screen,50);

    const width = 51;
    const height = 31;
    const maze = [];

    const canvas = document.createElement('canvas');
    canvas.width = width*30;
    canvas.height = height*30;
    document.body.appendChild(canvas);
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = 'lightskyblue';
    ctx.fillRect(0,0,width*30,height*30);
    ctx.fillStyle = "blue";

    const ctx_a = canvas.getContext('2d');
    const img = new Image();
    img.src = "blackhole01.png";

    function getRandomInt(n) {
        return Math.floor(Math.random()*n);
    }


    function createMaze(height,width) {
        for(let y=1; y < height+1; y++) {
            maze[y] = [];
            for(let x=1; x < width+1; x++) {
                if(y==1 || y==height || x==1 || x==width) {
                    maze[y][x] = 1;
                }
                else if(y%2==1 && x%2==1) {
                    maze[y][x] = 1;
                }
                else {
                    maze[y][x]=0;
                }
            }
        }
        for(let y=3; y<height; y+=2){
            for(let x=3; x<width; x+=2){
                const direction =["right","down"];
                if(y==3){
                    direction.push("up");
                }
                if(maze[y][x-1]==0){
                    direction.push("left")
                }
                switch(direction[getRandomInt(direction.length)]) {
                    case "up":
                        maze[y-1][x]=1;
                        break;
                    case "right":
                        maze[y][x+1]=1;
                        break;
                    case "left":
                        maze[y][x-1]=1;
                        break;
                    case "down":
                        maze[y+1][x]=1;
                        break;
                }
            }
        }
    }
    function displayMaze(){
        console.log(maze)
        //ctx.scale(630 / width-1, 420 / height-1);
        for(let y = 1; y < height+1; y++){
            for(let x = 1; x < width+1; x++){
                if(maze[y][x]==1){
                    ctx.fillStyle = "blue";
                    ctx.fillRect((x-1)*30,(y-1)*30,30,30);
                }
                else{
                    ctx.fillStyle = 'lightskyblue';
                    ctx.fillRect((x-1)*30,(y-1)*30,30,30);
                }
            }
        }
    }
    createMaze(height,width);

    function screen () {
        ctx_a.font = "30px cursive";
        displayMaze();
        ctx_a.fillStyle = 'red';
        ctx.drawImage(img,width*30-60,height*30-60,30,30);
        ctx_a.fillText("あ!",(zahyouX-1)*30,zahyouY*30);
        if (zahyouX === width-1 && zahyouY ===height-1) {
            ctx.font ="bold 100px cursive";
            ctx.fillText("クリア！",170,200);
            clearInterval(timer);
        }
    };
    
    document.addEventListener('keydown', function (e) {
        if (e.code == 'KeyW' || e.code == 'ArrowUp') {
            if (maze[zahyouY-1][zahyouX]==0){
                zahyouY -= 1;
            }
        } else if (e.code == 'KeyS' || e.code == 'ArrowDown') {
            if (maze[zahyouY+1][zahyouX]==0){
                zahyouY += 1;
            }
        } else if (e.code == 'KeyA' || e.code == 'ArrowLeft') {
            if (maze[zahyouY][zahyouX-1]==0){
                zahyouX -= 1;
            }
        } else if (e.code == 'KeyD' || e.code == 'ArrowRight') {
            if (maze[zahyouY][zahyouX+1]==0){
                zahyouX += 1;
            }
        } 
        //characrer.style.transform = `translate(${zahyouX}px,${zahyouY}px)`;
    })
},false);