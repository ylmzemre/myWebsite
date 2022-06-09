function initMap() {
  
    const uluru = { lat: 40.33810634002563,  lng: 27.936086532301303 };
    
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 15,
      center: uluru,
    });
    
    const marker = new google.maps.Marker({
      position: uluru,
      map: map,
    });
  }
      
  
      document.getElementById("myButton").onclick = function () {
          location.href = "home/home.html";
      };
      document.getElementById("myButton2").onclick = function () {
          location.href = "makale/makaleler.html";
      };
      document.getElementById("myButton3").onclick = function () {
          location.href = "index/index.html";
      };
      document.getElementById("myButton4").onclick = function () {
          location.href = "home.html";
      };
  
      
function showTime(){
                var date = new Date();
                var h = date.getHours(); // 0 - 23
                var m = date.getMinutes(); // 0 - 59
                var s = date.getSeconds(); // 0 - 59
                var session = "AM";
                
                if(h == 0){
                    h = 12;
                }
                
                if(h > 12){
                    h = h - 12;
                    session = "PM";
                }
                
                h = (h < 10) ? "0" + h : h;
                m = (m < 10) ? "0" + m : m;
                s = (s < 10) ? "0" + s : s;
                
                var time = h + ":" + m + ":" + s + " " + session;
                document.getElementById("MyClockDisplay").innerText = time;
                document.getElementById("MyClockDisplay").textContent = time;
                
                setTimeout(showTime, 1000);
                
            }
  
            showTime();
