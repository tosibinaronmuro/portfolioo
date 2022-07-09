import React from "react";
import styles from "../styles/Home.module.css";

function Cursor() {
  const cursorRef = React.useRef(null);
  const cursorRef2 = React.useRef(null);
  React.useEffect(() => {
    document.addEventListener("mousemove", (e) => {
      const { clientX, clientY } = e;
      const mouseX = clientX - cursorRef.current.clientWidth / 2;
      const mouseY = clientY - cursorRef.current.clientHeight / 2;
       const mouseXx = clientX - cursorRef2.current.clientWidth / 2;
      const mouseYy = clientY - cursorRef2.current.clientHeight / 2;
      
      cursorRef.current.style.transform= `translate3d(${mouseX}px,${mouseY}px,0)`;
      cursorRef2.current.style.transform= `translate3d(${mouseXx}px,${mouseYy}px,0)`
    });
  }, []);

  return(
    <>
   <div className={styles.custonCursor} ref={cursorRef}> </div>
   <div ref={cursorRef2} className={styles.custonCursor2}  > </div>
   </>
   )
}

export default Cursor;
