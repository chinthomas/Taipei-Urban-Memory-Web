import { useRef, useEffect, useState } from "react";
import mapElements from "./data/mapElements.json"

function PageMap(){
  const myRefs = useRef([]);
  const [visibleElement, setVisibleElement] = useState(0);

  const onScroll = (el) => {
    const styles = myRefs.current
      .map((myRef, index) => {
        const rect = myRef.getBoundingClientRect();

        return {myRef, rect, index}
      })
      .find((group) => group.rect.bottom >= window.innerHeight * 0.1);
    setVisibleElement(styles.index)
  }
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
    })

    window.addEventListener("scroll", onScroll);

  }, [])

  return(
    <div className="block-container">
      <div className="figure-box">
        <img src={`./map/${visibleElement+1}.png`} alt="" />
      </div>
      {
        mapElements.map((element, i) => {
          return (
            <div key={i} className="text-block" 
            ref={(el) => (myRefs.current[i] = el)}>
              <h3>{element.title}</h3>
              <p>{element.description}</p>
            </div>
          )
        })
      }
    </div>

  );
}

export default PageMap;