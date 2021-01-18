import React, { BackgroundImage, Wrapper } from "./photo-viewer-styles";
import {useState, useRef, useEffect} from 'react';


const PhotoViewer = ()=> {
    const imagePos = JSON.parse(localStorage.getItem("image-position")) ?? {top: 0, left: 0};
    const imageRef = useRef(null);
    const [imageTop, setImageTop] = useState(0);
    const [imageLeft, setImageLeft] = useState(0);
    let [pos1, pos2, pos3, pos4] = [0,0,0,0];

    useEffect(
        () => {
            setImageTop(imagePos.top);
            setImageLeft(imagePos.left);
        },
        []
      );

        function dragMouseDown(e) {
          e = e || window.event;
          e.preventDefault();
          // get the mouse cursor position at startup:
          pos3 = e.clientX;
          pos4 = e.clientY;
          document.onmouseup = closeDragElement;
          // call a function whenever the cursor moves:
          document.onmousemove = elementDrag;
        }
      
        function elementDrag(e) {
          e = e || window.event;
          e.preventDefault();
          // calculate the new cursor position:
          pos1 = pos3 - e.clientX;
          pos2 = pos4 - e.clientY;
          pos3 = e.clientX;
          pos4 = e.clientY;
          // set the element's new position:
          const top = (imageRef.current.offsetTop - pos2) + "px";
          const left = (imageRef.current.offsetLeft - pos1) + "px";
          imageRef.current.style.top = top;
          imageRef.current.style.left =left;
          localStorage.setItem("image-position", JSON.stringify({top: top, left: left}))
        }
      
        function closeDragElement() {
          /* stop moving when mouse button is released:*/
          document.onmouseup = null;
          document.onmousemove = null;
        }
    return (
        <Wrapper>
            <BackgroundImage ref={imageRef} onMouseDown={dragMouseDown} src="https://www.gstatic.com/webp/gallery/1.webp" top={imageTop} left={imageLeft}/>
        </Wrapper>
    );
}
export default PhotoViewer