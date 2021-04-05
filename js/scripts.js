      
        // Get the login modal
        var modal = document.getElementById("loginModal");
        // Get the reservation modal
        var modal1 = document.getElementById("reservationModal");

        // Get the button that opens the login modal
        var btn = document.getElementById("myBtn");
        // Get the button that opens the reservation modal
        var btn1 = document.getElementById("myReserveBtn");

        // Get the <span> element that closes the modal
        var closeLoginModal = document.getElementsByClassName("close")[0];
        var closeReserveModal = document.getElementsByClassName("close")[1];

        // When the user clicks the button, open the modal
        btn.onclick = function() {
          modal.style.display = "block";
        }

        btn1.onclick = function() {
          modal1.style.display = "block";
        }

        // When the user clicks on (x), close the login modal
        closeLoginModal.onclick = function() {
          modal.style.display = "none";
        }

        // Click on (x), close the reservation modal 
        closeReserveModal.onclick = function() {
          modal1.style.display = "none";
        }

        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function(event) {
          if (event.target == modal || event.target == modal1) {
            modal.style.display = "none";
            modal1.style.display = "none";
          }
        }

        // Carousel script 
        $("#mycarousel").carousel( { interval: 2000 } );
        
        // Modify the JS code to display the pause and play icon on the same button.
        $("#carouselButton").on("click", function(){
            if ($("#carouselButton").children("span").hasClass('fa-pause')) {
                $("#mycarousel").carousel('pause');
                $("#carouselButton").children("span").removeClass('fa-pause');
                $("#carouselButton").children("span").addClass('fa-play');
            }
            else if ($("#carouselButton").children("span").hasClass('fa-play')){
                $("#mycarousel").carousel('cycle');
                $("#carouselButton").children("span").removeClass('fa-play');
                $("#carouselButton").children("span").addClass('fa-pause');
            }
        });
        
      
