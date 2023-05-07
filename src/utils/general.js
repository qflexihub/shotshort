import { useEffect, useState } from "react";

export function useOutsideClick(ref, actionToPerform, params = []) {
  return useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        // alert("You clicked outside of me!");
        params.length ? actionToPerform(...params) : actionToPerform();
      }
    }

    // Bind the event listener
    window.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      window.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, params]);
}

export const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    setIsMobile(mediaQuery.matches);

    const handleResize = () => {
      setIsMobile(mediaQuery.matches);
    };

    mediaQuery.addListener(handleResize);

    return () => {
      mediaQuery.removeListener(handleResize);
    };
  }, []);

  return isMobile;
};
