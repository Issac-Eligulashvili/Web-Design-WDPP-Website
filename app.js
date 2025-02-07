const app = Vue.createApp({
     data() {
          return {
               message: "Hello World",
          }
     }
})
// jQuery Code LOLZZZZZ

$(document).ready(function () {
     $(".logo").on('click', (event) => {
          $(".logo").removeClass("active"); //removing the class from all elements
          $(event.currentTarget).addClass("active");//adding the box shadow affect to the clicked element
          const index = $(event.currentTarget).data("num-items"); //getting the numitems data to calculate the height of the navbar properly
          // calculating the height of the navbar based on the num items and jQuery
          $(".overlay.web").animate({
               "height": `${100 * index / 6}%`
          }, 200)
          // implementing the navigation system of the Year Projects Carousel
          const previousElementIndex = $(".carouselActive").data("index"); //get the index of the current carousel slide so that you can remove the animation classes after 
          
          $(".carouselActive").addClass("animate__fadeOutDown")//fade out the currnnt year that is clicked 
          $(".carouselActive").removeClass("carouselActive animate__fadeInDown"); //remove the classes and create the element back to the blank slate
          $(`.webCarouselContent[data-index='${$(event.currentTarget).data("year") - 1}']`).addClass("carouselActive animate__fadeInDown"); //target the correct year to show based on the data attr from the button and the data index attr 
          setTimeout(() => {
          $(`.webCarouselContent[data-index='${previousElementIndex}']`).removeClass("animate__fadeOutDown"); //remove the fade down class to reset the animations and bring back to blank slate
          }, 1000)
     })

     // Navigation bar for course progression on mobile
     $(".logoMobile").on('click', (event) => {
          $(".logoMobile").removeClass("active"); //removing the class from all logoMobile elements
          $(event.currentTarget).addClass("active");//adding the box shadow affect to the clicked element
          const index = $(event.currentTarget).data("num-items"); //getting the numitems data to calculate the width  of the navbar properly
          // calculating the width of the navbar based on the num items and jQuery since the navbar is now horizontal
          $(".overlay.mobile").animate({
               "width": `${100 * index / 6}%`
          }, 200)
          // implementing the navigation system of the Year Projects Carousel
          const previousElementIndex = $(".carouselActive").data("index");//get the index of the current carousel slide so that you can remove the animation classes after 
          
          $(".carouselActive").addClass("animate__fadeOutDown"); //fade out the currnnt year that is clicked 
          $(".carouselActive").removeClass("carouselActive animate__fadeInDown"); //remove the classes and create the element back to the blank slate
          $(`.webCarouselContent[data-index='${$(event.currentTarget).data("year") - 1}']`).addClass("carouselActive animate__fadeInDown");//target the correct year to show based on the data attr from the button and the data index attr 
          setTimeout(() => {
          $(`.webCarouselContent[data-index='${previousElementIndex}']`).removeClass("animate__fadeOutDown");//remove the fade down class to reset the animations and bring back to blank slate
          }, 1000)
     })
});