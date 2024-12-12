import "./ModalWrapper.css"

const ModalWrapper = ({
  isVisible = false,
  year,
  description,
  source,
  images,
  onCloseRequest,
}) => {
  if (!isVisible) {
    return null;
  }
  return (
    <div className="modal">
      <div className="journal-modal">
      <span className="close-svg" onClick={onCloseRequest}>
        <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m15 9-6 6m0-6 6 6m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>
      </span>
      <div className="images">
        <img src={images} alt="wait ..." />
      </div>
      <div className="text-container">
        <div className="year">{year}</div>
        <div className="description">{description}</div>
        <div className="source">資料來源:{source}</div>
      </div>
      </div>
    </div>
  )};

export default ModalWrapper;