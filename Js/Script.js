window.addEventListener("scroll", function(){
    var offset = this.window.pageYOffset;
    var section = this.document.getElementsByClassName("parallaxSection")
    for(var i in section){
        var sectionHeight = section[i].offsetHeight;
        section[i].style.backgroundPositionY = (offset / sectionHeight * -100) + "%";
    }
    
});

$(document).ready(function(){
    // Activate Carousel
    $("#riseValueCarousel").carousel();
      
    // Enable Carousel Indicators
    $(".item1").click(function(){
      $("#riseValueCarousel").carousel(0);
    });
    $(".item2").click(function(){
      $("#riseValueCarousel").carousel(1);
    });
    $(".item3").click(function(){
      $("#riseValueCarousel").carousel(2);
    });
    $(".item4").click(function(){
      $("#riseValueCarousel").carousel(3);
    });
      
    // Enable Carousel Controls
    $(".left").click(function(){
      $("#riseValueCarousel").carousel("prev");
    });
    $(".right").click(function(){
      $("#riseValueCarousel").carousel("next");
    });
  
    $("#riseValueCarousel").on('slide.bs.carousel', function (){
      alert('A new slide is about to be shown!');
    });
  });