        let box1 = document.getElementById("box1");
        let box2 = document.getElementById("box2");
        let box3 = document.getElementById("box3");
        let box4 = document.getElementById("box4");
        let Info = document.getElementById("gameInfo");
        let score = document.getElementById("scoreBoard");
        let level = document.getElementById("levelBoard");

        let container = document.getElementById("container");

        let scorePoints = 0;
        let levelPoints = 1;
        let start=0;

        Info.innerHTML="Simon Say Game <br> Click On BlinkBox And Start Playing"; 

        
        setTimeout(function(){
            
            computer();
            // score.innerText=`Your Score: ${scorePoints}`
            // level.innerText=`Current Level: ${levelPoints}`

        },2000);

        let userInstruction=[];
        let computerInstruction=[];
        let allScore=[];

        function randomNumber(){
            let random = Math.ceil(Math.random()*4);
            // console.log(random);
            return random;
        }
        // let randomBox=null;
        function computer(){
             let randomBox = randomNumber();
            //push in array
            computerInstruction.push(randomBox);
            switch(randomBox){
                case 1: box1.classList.add("blink"); break;
                case 2: box2.classList.add("blink"); break;
                case 3: box3.classList.add("blink"); break;
                case 4: box4.classList.add("blink"); break;
            }
        }

        function gameStarted(event){
            Info.innerHTML="";
            console.log(event);
            this.classList.remove("blink");
            this.classList.add("blinked");
            setTimeout(()=>{
                this.classList.remove("blinked");
            },500);
            switch(event.target.id){
                case 'box1':userInstruction.push(1); break;
                case 'box2':userInstruction.push(2); break;
                case 'box3':userInstruction.push(3); break;
                case 'box4':userInstruction.push(4); break;
            }
            console.log(userInstruction);
            console.log(computerInstruction);
            let clickCheck = isValidClick();
            console.log(clickCheck);
            if(clickCheck){
                if(userInstruction.length==computerInstruction.length){
                    userInstruction.splice(0,userInstruction.length);
                    //(0 index se sare element delete kerdo)
                    //splice(stIdx, deleteCount, new....);
                    if(start==1){
                        scorePoints+=10;
                        levelPoints+=1;
                    }
                    score.innerText=`Your Score: ${scorePoints}`
                    level.innerText=`Current Level: ${levelPoints}`

                    setTimeout(function(){
                        computer();
                    },900);
                    start=1;
                }
                //Scrore Update & GO For Next Level
                scorePoints+=1;
                score.innerText=`Your Score: ${scorePoints}`
                
            }else{
                    Info.innerText="Ooops, Wrong Click So Game Over.";
                    allScore.push(score);
                    console.log(allScore);
                    resetAll();
                }
                
        }
        box1.addEventListener("click",gameStarted);
        box2.addEventListener("click",gameStarted);
        box3.addEventListener("click",gameStarted);
        box4.addEventListener("click",gameStarted);

        function isValidClick(){
            // if(userInstruction.length!=computerInstruction.length){
            //     return false;
            // }
            for(let i=0;i<userInstruction.length;i++){
                if(userInstruction[i]!=computerInstruction[i]){
                    return false;
                }
            }

            return true;
        }

        function resetAll(){
            scorePoints=0;
            levelPoints=1;
        }