import './Timeline.css'
// import timelineElements from "./data/timelineElements";
import timelinelist from "./data/timelineElements.json"
function Timeline(){
  const chooseIcon = (iconName) =>{
    switch(iconName){
      case "\u653f\u5e9c":
        return(
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-landmark"><line x1="3" x2="21" y1="22" y2="22"/><line x1="6" x2="6" y1="18" y2="11"/><line x1="10" x2="10" y1="18" y2="11"/><line x1="14" x2="14" y1="18" y2="11"/><line x1="18" x2="18" y1="18" y2="11"/><polygon points="12 2 20 7 4 7"/></svg>
        )
        case "\u5c45\u6c11":
          return(
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-users"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
          )
        case "\u57ce\u9109\u6240":
          return(
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-graduation-cap"><path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"/><path d="M22 10v6"/><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"/></svg>
          )
        default:
        return(
          <svg></svg>
        )
      }}

  return(
  <div className='timeline'>
      {
        timelinelist.map((element) => {
          return (
            <div className={`container ${(element.id%2)?'left-container':'right-container'}`} key={element.id}>
              <div className="text-box">
                <div>{element.year}</div>
                <div className="vertical-timeline-element-title">{element.description}</div>
                <div>{element.source}</div>
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

  );
}

export default Timeline;