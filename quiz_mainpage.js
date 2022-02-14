function send(){
    no1=document.getElementById("no1").value;
    no2=document.getElementById("no2").value;
    actual_answer=parseInt(no1)* parseInt(no2);

    question_no="<h4>" + no1 + " X " + no2 + "</h4";

    input_box="<br><br><center>Answer: <input type='text' id='input_check_box'>";
    check_button="<br><br><button class='btn btn-info' onclick='check()'> Check </button></center>";

    row=question_no+input_box+check_button;
    document.getElementById("output").innerHTML=row;
    document.getElementById("no1").value="";
    document.getElementById("no2").value="";
}
question_turn="p1";
answer_turn="p2";

function check(){
    get_ans=document.getElementById("input_check_box").value;
     if (answer == actual_answer){
         if(answer_turn == "p1"){
             player1_score=player1_score+1;
             document.getElementById("player1_score").innerHTML=player1_score;
         }
         else{
             player2_score=player2_score+1;
             document.getElementById("player2_score").innerHTML=player2_score;
         }
 
     }
     if(question_turn == "p1"){
         question_turn ="p2";
         document.getElementById("player_question").innerHTML="Question Turn - " + player2_name;
     }
     else{
         question_turn= "p1";
         document.getElementById("player_question").innerHTML="Question Turn - "+ player1_name;
     }
 
     if(answer_turn == "p1"){
         answer_turn= "p2";
         document.getElementById("player_answer").innerHTML="Answer Turn - "+ player2_name;
     }
     else{
         answer_turn= "p1";
         document.getElementById("player_answer").innerHTML="Answer Turn - " + player1_name;
     }
 
     document.getElementById("output").innerHTML="";
 }
 