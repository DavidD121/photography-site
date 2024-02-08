
const HomePageRow = ({image, text, flip=false, imageAlt=''}) => {
  const rowClass = flip ? "homeRow reverse" : "homeRow"; 
  return <div className={rowClass}>
    <img className="rowImage" src={image} alt={imageAlt} />
    <div className="rowCard">
      <h2>{text}</h2>
      <button className='btn'> See More </button>
    </div>
  </div>
}

export default HomePageRow;