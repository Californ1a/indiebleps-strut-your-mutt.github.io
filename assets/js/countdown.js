<!--

dateFuture = new Date(Date.UTC(2016,4,7,13,00,00)); // 2016,4,7,9,00,00
streamEnd = new Date(Date.UTC(2016,4,8,13,00,00));

function GetCount(){

        dateNow = new Date(); //grab current date
		localTime = dateNow.getTime();
		localOffset = dateNow.getTimezoneOffset() * 60000; //convert time offset to milliseconds
		utc = localTime+localOffset;
		amount = dateFuture.getTime() - dateNow.getTime(); //calc milliseconds between dates
        delete dateNow;

        // time is already past
        if(amount < 0){
			//button above timer
			var str = "Watch Stream";
			var result = str.link("https://www.twitch.tv/fork_h");
			document.getElementById('countbox').innerHTML = result;
			
			//button inside jumbotron
			/*var watchhere = "Watch Stream";
			var results = watchhere.link("https://www.twitch.tv/fork_h");
			var att = document.createAttribute("class");
			att.value = "btn";
			var watch = document.getElementById('watch');
			watch.setAttributeNode(att);
			document.getElementById('watch').innerHTML = results*/
			
			GetDown(); //start second countdown
        }
        // date is still good
        else{
                days=0;hours=0;mins=0;secs=0;out="";

                amount = Math.floor(amount/1000);//kill the "milliseconds" so just secs

                days=Math.floor(amount/86400);//days
                amount=amount%86400;

                hours=Math.floor(amount/3600);//hours
                amount=amount%3600;

                mins=Math.floor(amount/60);//minutes
                amount=amount%60;

                secs=Math.floor(amount);//seconds

                if(days != 0){out += days +" day"+((days!=1)?"s":"")+", ";}
                if(days != 0 || hours != 0){out += hours +" hour"+((hours!=1)?"s":"")+", ";}
                if(days != 0 || hours != 0 || mins != 0){out += mins +" minute"+((mins!=1)?"s":"")+", ";}
                out += secs +" seconds";
                document.getElementById('countbox').innerHTML="Time until stream:<br/>"+out;

                setTimeout("GetCount()", 1000);
        }
}

function GetDown(){ //second countdown
	currentTime = new Date();
	amount2 = streamEnd.getTime() - currentTime.getTime();
	delete currentTime;
	
	if(amount2 < 0){
		document.getElementById('countbox').innerHTML = null; //remove live button
		str = "Distathon is over!";
		result = str.link("http://www.distathon.com");
		document.getElementById('countbox2').innerHTML = result; //insert finished button
	}
	
	else{
		days=0;hours=0;mins=0;secs=0;out="";
		
		amount2 = Math.floor(amount2/1000);//kill the "milliseconds" so just secs

		days=Math.floor(amount2/86400);//days
		amount2=amount2%86400;

		hours=Math.floor(amount2/3600);//hours
		amount2=amount2%3600;

		mins=Math.floor(amount2/60);//minutes
		amount2=amount2%60;

		secs=Math.floor(amount2);//seconds

		if(days != 0){out += days +" day"+((days!=1)?"s":"")+", ";}
		if(days != 0 || hours != 0){out += hours +" hour"+((hours!=1)?"s":"")+", ";}
		if(days != 0 || hours != 0 || mins != 0){out += mins +" minute"+((mins!=1)?"s":"")+", ";}
		out += secs +" seconds";
		document.getElementById('countbox2').innerHTML="Distathon is live! Time remaining:<br/>"+out;

		setTimeout("GetDown()", 1000);
	}
}

window.onload=function(){GetCount();}//call when everything has loaded

//-->