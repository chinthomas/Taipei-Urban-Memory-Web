import governmentIcon from "./assets/government.svg"
import residentsIcon from "./assets/residents.svg"
import graduateIcon from "./assets/graduate.svg"
import './Timeline.css'
import timelinelist from "./data/timelineElements.json"
import ModalWrapper from "./components/ModalWrapper"
import { useState } from "react"
// import RandomImage from "./assets/a.jpg"
function Timeline(){
  const [isOpen, setIsOpen] = useState(false);
  const [list, setList] = useState(
    timelinelist.find((obj) => {
      return obj.id === 1;
    })
  )
  const chooseIcon = (iconName) =>{
    switch(iconName){
      case "\u653f\u5e9c":
        return(
          <img src={governmentIcon} alt="gov" id="gov"/>
        )
      case "\u5c45\u6c11":
        return(
          <img src={residentsIcon} alt="residents" id="residents"/>
        )
      case "\u57ce\u9109\u6240":
        return(
          <img src={graduateIcon} alt="graduate" id="graduate"/>
        )
      default:
        return(
          <img alt="none" id="none"/>
        )
  }}

  return(
  <>
    <div className='timeline'>
      {
        timelinelist.map((element) => {
          console.log(element.image)
          return (
            <div className={`container ${(element.id%2)?'left-container':'right-container'}`} key={element.id} onClick={() => {
              setList(    
                timelinelist.find((obj) => {
                  return obj.id === element.id;
                })
              ),
              setIsOpen(true),
              console.log(element.id)
            }}>
              <div className="text-box">
                <div>{element.year}</div>
                <div>{element.description}</div>
                <div>
                  <img src={`image/${element.image}`} alt="waiting..." />
                </div>
              </div>
              <div className="icon-box">
                {chooseIcon(element.members)}
              </div>
              <span className={`${(element.id%2)?'left':'right'}-container-arrow`}></span>
            </div>
          );
        })
      }
    </div>
    <ModalWrapper 
      isVisible = {isOpen}
      year={list.year}
      description={list.description}
      source={list.source}
      images={`image/${list.image}`}
      onCloseRequest={()=>{setIsOpen(false)}}
    />
  </>
  );
}

export default Timeline;