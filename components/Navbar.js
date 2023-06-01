import { useEffect } from 'react';
import Link from 'next/link'

export default function Navbar({children, icon, border, blurFromPx = 72}) {
  // // A workaround for three.js canvas rendering issue
  // let clicked = false;
  // if (shouldScrollToTop) {
  //   useEffect(() => {
  //     setTimeout(function() {
  //       const navbarLink = document.querySelector("#root-link");
  //       navbarLink.click();
  //       clicked = true;
  //       console.log("Clicked the link!")
  //     }, 1000)
  //   }, [clicked]);
  // } else {
  //   console.log("Did not click the link!")
  // }
  const navbarOnTopStyle = "xsm:bg-opacity-0";
  const navbarBelowTopStyleExtraSmall = "xsm:bg-opacity-80";
  const navbarBelowTopStyleSmall = "sm:bg-opacity-50";
  const navbarBackdropFilter = "sm:backdrop-filter";
  const navbarBlur = "sm:backdrop-blur-lg";
  useEffect(() => {
    let navbarElement = document.getElementById("navbar");
    window.onscroll = function(event) {
      "use strict";
      if (document.body.scrollTop >= blurFromPx || document.documentElement.scrollTop >= blurFromPx) {
        // Scrolled below specified coords (default = 72)
        navbarElement.classList.remove(navbarOnTopStyle);
        navbarElement.classList.add(navbarBelowTopStyleExtraSmall);
        navbarElement.classList.add(navbarBelowTopStyleSmall);
        navbarElement.classList.add(navbarBackdropFilter);
        navbarElement.classList.add(navbarBlur);
      } else {
        // Page Y position is lower than specified coords (default = 72) (near top)
        navbarElement.classList.remove(navbarBelowTopStyleExtraSmall);
        navbarElement.classList.remove(navbarBelowTopStyleSmall);
        navbarElement.classList.remove(navbarBackdropFilter);
        navbarElement.classList.remove(navbarBlur);
        navbarElement.classList.add(navbarOnTopStyle);
      }
    };
  });

  return (
    <nav id="navbar" className={`${border} ${'flex flex-wrap items-center justify-between p-3 bg-gray-900 xsm:bg-opacity-0 sticky top-0 z-50 transition-all duration-150 ease-in-out'}`}> { /* backdrop-filter backdrop-blur-lg */ }
      <Link id='root-link' href='/'>
        <span className='inline-flex items-center p-2 mr-4'>
          <svg
            className="text-white w-8 h-8 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={icon}
              />
          </svg>
          <span className='text-xl text-white font-bold uppercase tracking-wide'>
            {children}
          </span>
        </span>
      </Link>
    </nav>
  );
}