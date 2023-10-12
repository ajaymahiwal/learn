

//Closures Date 15-08-23

//Papaji was a labourer (Majdur).
// NO knowledge of Books because he was Illiterate, when he was not able to understand some papers or documents then he call me to do some work but he can't directly use my knowledge and no one can call me to work but only my papaji can call me.
//He was working very well and mantaining all work but everyone have a time to do things, And now he is not present.
//But I know everything about papaji like his thoughts and many more.
//I can use papaji thoughts and work to mantain my family.And now outsiders can call me for work.

//some peoples give a name "closure" to this scenario because i am able to use my papaji thought even after him when he is not working.

function papaji(){
    const vichar = "Always help others,then god will  definitely help you.";
    const lastMsg = "I will always with you.EveryThing of me will be yours after me.";
    let home = "Father home";
    
    function I(){
      const name = "Ajay Mahiwal";
      let booksKnowledge = "BooksKnowledge";
      console.log(`I'm ${name}`);
      console.log(`My Papaji vichar :${vichar}`);
      console.log("I have my some special ablities that can i do.")
    }
  
    console.log("PapaJI is Working VeryWell");
    I();//papaji is calling me 
    
    return I;
  }
  
  let newAjay = papaji();
  //Papaji is not working anymore.
  console.log("=========================");
  console.log("=========================");
  newAjay();
  //I am here to work and i have My Knowledge + My father Knowledge.