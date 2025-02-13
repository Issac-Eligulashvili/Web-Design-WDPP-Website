const app = Vue.createApp({
     data() {
          return {
               carousel: [
                    {
                         header: "Year 1", 
                         description: "This is the year 1 description of what is learned",
                         // projects per year to change please follow the following directions: 

                         /* 
                              1. Replace the image link with the link to the preferred screenshot of the project you would like to showcase. 
                              2. Provide the name of the project that you are showcasing preferrably from classroom. 
                              3. Use ONLY the abbriviation for the languages you used. 

                              Language to Abbreviations are as follows:
                              HTML- HTML
                              CSS - CSS
                              BootStrap - BS
                              JavaScript - JS
                              jQuery - jQ
                              Vue - Vue

                              
                              see the first project slide for the example of where to change items. 
                         */
                         projects: [ 
                              {
                                   image: 'https://picsum.photos/600/300', //Here is the link for the image please be organized and put the image into the project photos folder
                                   name: 'Project Name', //Here is the name of the project. Use the classroom name to maintain unity across all sites incase project is used elsewhere 
                                   languages: ['HTML', 'CSS', 'BS'], //Here is the array of abbreviations for the languages. Simply add the abbreviation of the language to the array and the code will take care of the rest. DO NOT CHANGE FROM BEING AN ARRAY EVEN IF ONE ELEMENT!!!!
                              },
                              {
                                   image: 'https://picsum.photos/600/300',
                                   name: 'Project Name',
                                   languages: ['HTML', 'CSS'],
                              },
                              {
                                   image: 'https://picsum.photos/600/300',
                                   name: 'Project Name',
                                   languages: ['HTML', 'CSS', 'BS'],
                              },
                         ]
                    },
                    {
                         header: "Year 2", 
                         description: "This is the year 2 description of what is learned",
                         projects: [
                              {
                                   image: 'https://picsum.photos/600/300',
                                   name: 'Project Name',
                                   languages: ['HTML', 'CSS', 'BS'],
                              },
                              {
                                   image: 'https://picsum.photos/600/300',
                                   name: 'Project Name',
                                   languages: ['HTML', 'CSS'],
                              },
                              {
                                   image: 'https://picsum.photos/600/300',
                                   name: 'Project Name',
                                   languages: ['HTML', 'CSS', 'BS'],
                              },
                         ]
                    },
                    {
                         header: "Year 3", 
                         description: "This is the year 3 description of what is learned",
                         projects: [
                              {
                                   image: 'https://picsum.photos/600/300',
                                   name: 'Project Name',
                                   languages: ['HTML', 'CSS', 'BS'],
                              },
                              {
                                   image: 'https://picsum.photos/600/300',
                                   name: 'Project Name',
                                   languages: ['HTML', 'CSS'],
                              },
                              {
                                   image: 'https://picsum.photos/600/300',
                                   name: 'Project Name',
                                   languages: ['HTML', 'CSS', 'BS'],
                              },
                         ]
                    }
               ]
          }
     }
})
// jQuery Code

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
          if (previousElementIndex != $(event.currentTarget).data("year") - 1) {
               $(".carouselActive").addClass("animate__fadeOutDown")//fade out the currnnt year that is clicked 
               $(".carouselActive").removeClass("carouselActive animate__fadeInDown"); //remove the classes and create the element back to the blank slate
               $(".webCarouselContent").addClass("d-none");
               $(`.webCarouselContent[data-index='${$(event.currentTarget).data("year") - 1}']`).removeClass("d-none").addClass("carouselActive animate__fadeInDown d-block"); //target the correct year to show based on the data attr from the button and the data index attr 
               setTimeout(() => {
               $(`.webCarouselContent[data-index='${previousElementIndex}']`).removeClass("animate__fadeOutDown"); //remove the fade down class to reset the animations and bring back to blank slate
               }, 1000)
          }
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
          if (previousElementIndex != $(event.currentTarget).data("year") - 1) {
               $(".carouselActive").addClass("animate__fadeOutDown")//fade out the currnnt year that is clicked 
               $(".carouselActive").removeClass("carouselActive animate__fadeInDown"); //remove the classes and create the element back to the blank slate
               $(".webCarouselContent").addClass("d-none");
               $(`.webCarouselContent[data-index='${$(event.currentTarget).data("year") - 1}']`).removeClass("d-none").addClass("carouselActive animate__fadeInDown d-block"); //target the correct year to show based on the data attr from the button and the data index attr 
               setTimeout(() => {
               $(`.webCarouselContent[data-index='${previousElementIndex}']`).removeClass("animate__fadeOutDown"); //remove the fade down class to reset the animations and bring back to blank slate
               }, 1000)
          }
     })
});