const saveScoreBtn = document.getElementById("saveScoreBtn");
const finalScore = document.getElementById('finalScore');
const mostRecentScore = localStorage.getItem('mostRecentScore');



finalScore.innerText = mostRecentScore;

username.addEventListener("keyup", () =>{
    saveScoreBtn.disabled = !username.value;
});


    
