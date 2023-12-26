import './Rating.scss';
export default function Rating({id}) {
  return (
    <div className="container">
      <div className="container__items">
        <input type="radio" name="stars" id={`st5-${id}`} className='st5'/>
        <label htmlFor={`st5-${id}`}>
          <div className="star-stroke">
            <div className="star-fill"></div>
          </div>
          <div className="label-description" data-content="Excellent"></div>
        </label>
        <input type="radio" name="stars" id={`st4-${id}`} className='st4'/>
        <label htmlFor={`st4-${id}`}>
          <div className="star-stroke">
            <div className="star-fill"></div>
          </div>
          <div className="label-description" data-content="Good"></div>
        </label>
        <input type="radio" name="stars" id={`st3-${id}`} className='st3'/>
        <label htmlFor={`st3-${id}`}>
          <div className="star-stroke">
            <div className="star-fill"></div>
          </div>
          <div className="label-description" data-content="OK"></div>
        </label>
        <input type="radio" name="stars" id={`st2-${id}`} className='st2'/>
        <label htmlFor={`st2-${id}`}>
          <div className="star-stroke">
            <div className="star-fill"></div>
          </div>
          <div className="label-description" data-content="Bad"></div>
        </label>
        <input type="radio" name="stars" id={`st1-${id}`} className='st1'/>
        <label htmlFor={`st1-${id}`}>
          <div className="star-stroke">
            <div className="star-fill"></div>
          </div>

          <div className="label-description" data-content="Terrible"></div>
        </label>
      </div>
    </div>
  );
}
