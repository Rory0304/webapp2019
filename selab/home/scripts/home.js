// $(document).ready(function() {
// 	var slider = $(".banner").unslider({dots: true,keys: true});
// 	data = slider.data("unslider");
// 	var i = 0;
// 	var b = setInterval(function(){
// 		data.next();
// 		if (i==2) {
// 			clearInterval(b);
// 		}
// 		i++;
// 	}, 3000);
// 	$.ajax({
// 		url :"notice/rss.php",
// 		success: function (xml) {
// 			var i =0;
// 			var info = [];
// 			var month = new Array("Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep","Nov","Dec");
// 			$(xml).find("item").each(function () {
// 				var pubdate = new Date($(this).find("pubDate").text());
// 				var date = new Date();
// 				// if (pubdate > date.setDate(date.getDate()-30)) {
// 					info[i] = "<a href='"+$(this).find("guid").text()
// 					+"'><li class='entry'><span class='title pull-left'>" 
// 					+ $(this).find("title").text() + "</span><span class='pubdate pull-right'>"
// 					+pubdate.getDate()+" "+month[pubdate.getMonth()]+"</span></li></a>";
// 					i++;
// 				// }
// 			});
// 			for(var j=0; j<3; j++){
// 				$("#board").append(info[j]);
// 			}
// 			if (info.length>4){
// 				var j=0;
// 				setInterval(function(){
// 					$("#board").empty();
// 					for (var k = j; k < j+3; k++) {
// 						$("#board").append(info[k]);
// 					}
// 					j++;
// 					if (j==info.length-3) {
// 						j=0;
// 					}
// 				}, 3000);
// 			}
// 		}
// 	});

// });

var Index = 0;

function slider() {
  var i;
  var x = document.getElementsByClassName("imgslide");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  Index++;
  if (Index > x.length) {Index = 1}    
  x[Index-1].style.display = "block";  
  setTimeout(slider, 3000); // Change image every 2 seconds
}