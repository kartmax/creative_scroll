document.addEventListener('DOMContentLoaded', function() {

   gsap.registerPlugin(ScrollTrigger, ScrollSmoother)


   // if not mobile device
   if (ScrollTrigger.isTouch !== 1) {

      ScrollSmoother.create({
         wrapper: '.wrapper-scroll',
         content: '.content-scroll',
         smooth: 1.5,
         effects: true // react to data attributes in html (data-speed, data-lag, ...)
      })

      gsap.fromTo('.hero-section',
         // from
         {
            opacity: 1
         },

         // to
         {
            opacity: 0,
            scrollTrigger: {
               trigger: '.hero-section',
               start: 'center',
               end: 'bottom',
               scrub: true
            }
         }
      )

      const animatGalleryItem = function(item, startX) {
         gsap.fromTo(item,
            // from
            {
               x: startX,
               opacity: 0
            },

            // to
            {
               x: 0,
               opacity: 1,
               scrollTrigger: {
                  trigger: item,
                  start: '-500',
                  end: '100',
                  scrub: true
               }
            }
         )
      }

      const galleryLeftItems = gsap.utils.toArray('.gallery__left .gallery__item'),
            galleryRightItems = gsap.utils.toArray('.gallery__right .gallery__item');
            
      galleryLeftItems.forEach(item => {
         animatGalleryItem(item, -50)
      })
      galleryRightItems.forEach(item => {
         animatGalleryItem(item, 50)
      })

   }
})
