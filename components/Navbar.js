import { useEffect } from 'react';
import Link from 'next/link'

export default function Navbar({children, icon, border, shouldScrollToTop}) {
  // A workaround for three.js canvas rendering issue
  let clicked = false;
  if (shouldScrollToTop) {
    useEffect(() => {
      setTimeout(function() {
        const navbarLink = document.querySelector("#root-link");
        navbarLink.click();
        clicked = true;
        console.log("Clicked the link!")
      }, 1000)
    }, [clicked]);
  } else {
    console.log("Did not click the link!")
  }

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