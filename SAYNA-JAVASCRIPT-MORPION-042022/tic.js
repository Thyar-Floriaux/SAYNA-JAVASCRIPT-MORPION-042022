(function() {
    var joueur = {
        nom: "joueur",
        symbole : "X",
        score: 0 


    };

    var CPU = {
        nom : "CPU",
        symbole : "0",
        score : 0
    };

    var gamers = [joueur,CPU];
    var end = false;
    var premiere_tour= Math.floor(Math.random() * 2);
    var tour_des_joueurs = premiere_tour;
    var joueurActuel = tour_des_joueurs;
    //affichage des symboles par choix
    choose1=function(elmt){
        joueur.symbole=elmt.textContent;
        CPU.symbole="O"
        elmt.parentNode.parentNode.style.display="none";
        term();
    }
    choose2=function(elmt){
        joueur.symbole=elmt.textContent;
        CPU.symbole="X";
        elmt.parentNode.parentNode.style.display="none";
        term();
    }
    // Récupération des cases à clicker
    const items = document.getElementsByClassName('grid-item');

    choiseCase = function(id) {
        if( gamers[joueurActuel].nom == "joueur" && document.getElementById(id).classList.contains("actived")==false && end==false)
        {
            document.getElementById(id).textContent = joueur.symbole;
            document.getElementById(id).classList.add("actived");
            conditions(joueur);
            joueurActuel++;
             
        if(joueurActuel >= 2)
        {   
            joueurActuel = 0;
        }
            var occ=0;
            for (let i = 0; i< items.length; i++) {
               if(items[i].classList.contains("actived"))occ++;
            }
            if(occ==9){

            }else{
                CPU_bot();
            }
        }
         
        
    }
      function term(){
        if(gamers[joueurActuel].nom=="CPU"){
            var occ=0;
            for (let i = 0; i< items.length; i++) {
               if(items[i].classList.contains("actived"))occ++;
            }
            if(occ==9){

            }else{
                CPU_bot();
            }
        }
        }   
    CPU_bot = function() {
        if(end ==false && gamers[joueurActuel].nom == "CPU" )
        {
            var CPU_casechoose = Math.floor(Math.random() * 9);
            while(items[CPU_casechoose].classList.contains("actived") ){
                CPU_casechoose = Math.floor(Math.random() * 9);
            }    
            items[CPU_casechoose].textContent = CPU.symbole;
            items[CPU_casechoose].classList.add("actived");
            conditions(CPU);
            joueurActuel++;
            if(joueurActuel >= 2)
            {
                joueurActuel=0;
            }
    
        }

    }
    
function conditions(player){
    var condition1 = items[0].textContent==player.symbole && items[1].textContent==player.symbole && items[2].textContent==player.symbole
    var condition2 = items[3].textContent==player.symbole && items[4].textContent==player.symbole && items[5].textContent==player.symbole
    var condition3 = items[6].textContent==player.symbole && items[7].textContent==player.symbole && items[8].textContent==player.symbole
    var condition4 = items[0].textContent==player.symbole && items[3].textContent==player.symbole && items[6].textContent==player.symbole
    var condition5 = items[1].textContent==player.symbole && items[4].textContent==player.symbole && items[7].textContent==player.symbole
    var condition6 = items[2].textContent==player.symbole && items[5].textContent==player.symbole && items[8].textContent==player.symbole
    var condition7 = items[0].textContent==player.symbole && items[4].textContent==player.symbole && items[8].textContent==player.symbole
    var condition8 = items[2].textContent==player.symbole && items[4].textContent==player.symbole && items[6].textContent==player.symbole
        if (condition1){
             
            end=true;
            player.score++;
            items[0].style.backgroundColor="rgb(248, 217, 44)"
            items[1].style.backgroundColor="rgb(248, 217, 44)"
            items[2].style.backgroundColor="rgb(248, 217, 44)"
            if(player.nom=="joueur"){
                document.querySelector(".you-score").textContent=player.score;
            }else{
                document.querySelector(".cpu-score").textContent=CPU.score;
            }
        }
        else if (condition2){
              
            end=true;
            player.score++;
            items[3].style.backgroundColor="rgb(248, 217, 44)"
            items[4].style.backgroundColor="rgb(248, 217, 44)"
            items[5].style.backgroundColor="rgb(248, 217, 44)"
            if(player.nom=="joueur"){
                document.querySelector(".you-score").textContent=player.score;
            }else{
                document.querySelector(".cpu-score").textContent=CPU.score;
            }
        }
        else if (condition3){
            
            end=true;
            player.score++;
            items[6].style.backgroundColor="rgb(248, 217, 44)"
            items[7].style.backgroundColor="rgb(248, 217, 44)"
            items[8].style.backgroundColor="rgb(248, 217, 44)"
            if(player.nom=="joueur"){
                document.querySelector(".you-score").textContent=player.score;
            }else{
                document.querySelector(".cpu-score").textContent=CPU.score;
            }
        }
        else if (condition4){
            
            end=true;
            player.score++;
            items[0].style.backgroundColor="rgb(248, 217, 44)"
            items[3].style.backgroundColor="rgb(248, 217, 44)"
            items[6].style.backgroundColor="rgb(248, 217, 44)"
            if(player.nom=="joueur"){
                document.querySelector(".you-score").textContent=player.score;
            }else{
                document.querySelector(".cpu-score").textContent=CPU.score;
            }
        }   
        else if (condition5){
         
            end=true;
            player.score++;
            items[1].style.backgroundColor="rgb(248, 217, 44)"
            items[4].style.backgroundColor="rgb(248, 217, 44)"
            items[7].style.backgroundColor="rgb(248, 217, 44)"
            if(player.nom=="joueur"){
                document.querySelector(".you-score").textContent=player.score;
            }else{
                document.querySelector(".cpu-score").textContent=CPU.score;
            }
        }
        else if (condition6){
           
            end=true;
            player.score++;
            items[2].style.backgroundColor="rgb(248, 217, 44)"
            items[5].style.backgroundColor="rgb(248, 217, 44)"
            items[8].style.backgroundColor="rgb(248, 217, 44)"
            if(player.nom=="joueur"){
                document.querySelector(".you-score").textContent=player.score;
            }else{
                document.querySelector(".cpu-score").textContent=CPU.score;
            }
        }
        else if (condition7){
             
            end=true;
            player.score++;
            items[0].style.backgroundColor="rgb(248, 217, 44)"
            items[4].style.backgroundColor="rgb(248, 217, 44)"
            items[8].style.backgroundColor="rgb(248, 217, 44)"
            if(player.nom=="joueur"){
                document.querySelector(".you-score").textContent=player.score;
            }else{
                document.querySelector(".cpu-score").textContent=CPU.score;
            }
        }
        else if (condition8){
             
            end=true;
            player.score++;
            items[2].style.backgroundColor="rgb(248, 217, 44)"
            items[4].style.backgroundColor="rgb(248, 217, 44)"
            items[6].style.backgroundColor="rgb(248, 217, 44)"
            if(player.nom=="joueur"){
                document.querySelector(".you-score").textContent=player.score;
            }else{
                document.querySelector(".cpu-score").textContent=CPU.score;
            }
        }
        
}
    // Vide le contenu de toute les cases
    rest = function() {
        end= false;
        for (var i = 0; i < items.length; i++) {
            items[i].textContent = ''
            items[i].classList.remove("actived");
            items[i].style.backgroundColor = '#fff'
        }
        CPU.score = 0;
        joueur.score = 0;

        tour_des_joueurs++;
        CPU_bot();
        document.querySelector(".you-score").textContent= 0;
        document.querySelector(".cpu-score").textContent = 0;            
    }
})();
