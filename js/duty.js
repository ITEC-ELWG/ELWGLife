var weekArray=["星期日","星期一","星期二","星期三","星期四","星期五","星期六"];
var H;
$(document).ready(function() {
    getDay();     
    getTime();
    $('.nextweek').hide();
    $('#nextweekButton').click(function() {
        $('.nextweek').toggle();
    });

    $('.loginButton').click(function() {
        $login = $('.login');
        $.post('../page/ajax/login.php', {
            username: $login.find('input[name=username]').val(),
            password: $login.find('input[name=password]').val()
        }, function(response) {
            console.log(response);
            if (response === 'ok') {
                $(".login").hide("slow");
                $(".manage_container").fadeIn("slow");
            };
        }); 
    });
});
   
function getTime(){   
    var time=new Date();
    var H=time.getHours();
    var M=time.getMinutes();
    var S=time.getSeconds();
    M=checkTime(M);
    S=checkTime(S);
    document.getElementById("headertime").innerHTML =H+':'+M+':'+S;
    setTimeout("getTime()", 500); 
}  
function getDay(){
    var time=new Date();
    var week=time.getDay();
    document.getElementById("weekday").innerHTML = weekArray[week];
}  

function checkTime(t){
if (t<10) 
  t="0" + t;
  return t;
}
