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
          const previousElementIndex = $(".carouselActive").data("index");
          
          $(".carouselActive").addClass("animate__fadeOutDown")
          $(".carouselActive").removeClass("carouselActive animate__fadeInDown"); 
          $(`.webCarouselContent[data-index='${$(event.currentTarget).data("year") - 1}']`).addClass("carouselActive animate__fadeInDown");
          console.log(previousElementIndex);
          setTimeout(() => {
          $(`.webCarouselContent[data-index='${previousElementIndex}']`).removeClass("animate__fadeOutDown");
          }, 1000)
     })
});