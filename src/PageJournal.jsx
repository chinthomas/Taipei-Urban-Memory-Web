import Timeline from "./Timeline";
import governmentIcon from "./assets/government.svg"
import residentsIcon from "./assets/residents.svg"
import graduateIcon from "./assets/graduate.svg"
function PageJournal(){
  return(
    <>
      <div className="icon-legend">
        <div>
          <img className="icon" src={governmentIcon} alt="gov" id="gov"/>
          <label htmlFor="gov">政府</label>
        </div>
        <div>
          <img src={residentsIcon} alt="residents" id="residents"/>        
          <label htmlFor="residents">居民</label>
        </div>
        <div>
          <img src={graduateIcon} alt="graduate" id="graduate"/>        
          <label htmlFor="graduate">城鄉所</label>
        </div>
      </div>
        <Timeline />
    </>

  );
}

export default PageJournal;