function submitAnswers(){
    var total=5;
    var score= 0;
    
    var q1 = document.forms["quizForm"]["q1"].value;
    var q2 = document.forms["quizForm"]["q2"].value;
    var q3 = document.forms["quizForm"]["q3"].value;
    var q4 = document.forms["quizForm"]["q4"].value;
    var q5 = document.forms["quizForm"]["q5"].value;
    
  
    //for loop validation
    for(var i=1  ;i<=total;i++){
       if(eval('q'+i) ==null||eval('q'+i)==''){
          alert("You Missed Question Q"+i);
           return false;   
       }
    }
    //answers
    var answers=["a","a","a","a","a"];
    
    //check answers
    for(i=1;i<=total;i++){
        if(eval('q'+i)==answers[i-1]){
            score++;
        }
    }    
    //display result
    var results=document.getElementById("results");
    results.innerHTML = "<h3>Your score is <span>"+score+"</span> out of </span>"+total+"</span></h3>";
    alert(score);
    
    return false;
}