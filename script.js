function clock() {
    var hours=document.getElementById("hours");
    var minutes=document.getElementById("minutes");
    var seconds=document.getElementById("seconds");
    var am=document.getElementById("am")

    var time=new Date();
    var hour=time.getHours();
    var minute=time.getMinutes();
    var second=time.getSeconds();
    var ampm = hour>=12 ? "PM" : "AM";

    am.innerHTML = ampm;
    hour = hour%12;
    hour = hour ? hour:12;
    if(hour<10){
        hour = "0"+hour;
    }
    hours.innerHTML = hour;
    if(minute<10){
        minute = "0"+minute;
    }
    minutes.innerHTML = minute;
    if(second<10){
        second = "0" + second;
    }
    seconds.innerHTML = second
}

setInterval(clock,1000);

function Makediv() {
    var invalue=document.getElementById('wake_time1');
    var invalue2=document.getElementById('lunch_time1');
    var invalue3=document.getElementById('nap_time1');
    var value1=invalue.options[invalue.selectedIndex].text;
    document.getElementById("greet_text").innerHTML="Wake Up Time "+value1;
    var value2=invalue2.options[invalue2.selectedIndex].text;
    document.getElementById("greet_text").innerHTML="Have Some Lunch Please "+value2;
    var value3=invalue3.options[invalue3.selectedIndex].text;
    document.getElementById("greet_text").innerHTML="Breakfast Time: "+value1+"<br>Lunch Time: "+value2+"<br>Dinner Time: "+value3;
}

function settimehere() {
    var i=document.getElementById("wake_time1").value;
    var j=document.getElementById("lunch_time1").value;
    var k=document.getElementById("nap_time1").value;
    var tim1=new Date;
    var hourrr=tim1.getHours();

    if(i==hourrr){
        document.getElementById("text_right").innerHTML="WAKE UP!!";
        document.getElementById("image_right").style.backgroundImage="url(./wakeup_image.png)";
    }

    else if(j==hourrr){
        document.getElementById("text_right").innerHTML="LETS HAVE SOME Lunch!!";
        document.getElementById("image_right").style.backgroundImage="url(./lunch_image.png)";
    }
    else if(k=hourrr){
        document.getElementById("text_right").innerHTML="GOOD NIGHT!!";
        document.getElementById("image_right").style.backgroundImage="url(./goodnight_image.png)";
    }

    Makediv();
}