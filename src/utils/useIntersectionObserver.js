import { useEffect, useState } from 'react';

export const useIntersectionObserver = (containerRef) => {
  //trigger animation once container in view
  const [isInView, setIsInView] = useState(false);

  //observe intersections with viewport
   useEffect(() => {
     //create a new IntersectionObserver object
     const observer = new IntersectionObserver((entries) => {

       // entry object provides information about a single intersection between 
       // a target element and its root container
       entries.forEach((entry) => {

         // if observed element is currently intersecting with the root container
         if (entry.isIntersecting) {
           //change isInView state, trigger map animations
           setIsInView(true);
           // from the list of elements being observed by the observer
           observer.unobserve(entry.target);
         }
       });
     });
 
     //if images parent exists start observing
     if (containerRef.current) {
      const currentlyObserving = containerRef.current;
      observer.observe(currentlyObserving);
    } 
 
     return (currentlyObserving) => { // clean up
       if (currentlyObserving) {
         //stop observing once unmounted
         observer.unobserve(currentlyObserving);
       }
     };
   }, []);

   //main function -------------------------------------------
   return isInView;
};

