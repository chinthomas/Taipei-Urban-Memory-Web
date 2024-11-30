import { Link } from 'react-router-dom'
import './HeaderBar.css'

function HeaderBar(){
  return(
    <>
    <div className="header-bar">
      <div>
        <Link className='link-styles' to='/'>臺北城市記憶</Link>
      </div>
      <div>
        <Link className='link-styles' to='/map'>重現寶藏巖</Link>
      </div>
      <div>
        <Link className='link-styles' to='/journal'>寶藏巖大事紀</Link>
      </div>
    </div>
    </>

  );
}

export default HeaderBar;