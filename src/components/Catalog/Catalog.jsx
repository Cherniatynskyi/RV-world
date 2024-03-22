import css from './Catalog.module.css'
import sprite from '../../images/sprite.svg'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { getAdvertsThunk } from '../../redux/operations'

export const Catalog =() =>{
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAdvertsThunk())
    }, [dispatch])

  const adverts = useSelector(state => state.adverts.adverts)

  return (
    <div className={css.catalogWrap}>
      {console.log(adverts)}
      <ul className={css.catalogList}>
        {adverts && adverts.map(adv => {
          return (
            <li className={css.catalogItem}>
              <div style={{backgroundImage: `url(${adv.gallery[0]})`}} className={css.catalogImg} src={adv.gallery[0]} alt="" ></div>
              <div className={css.catalogInfoWrap}>
                <div className={css.mainInfo}>
                  <span className={css.name}>{adv.name}</span>
                  <div>
                    <span className={css.price}>€{adv.price}.00</span>
                    <button className={css.likeBtn}>
                      <svg  className={css.subInfoSvg}>
                        <use href={`${sprite}#icon-heart`}/>
                      </svg>
                    </button>
                  </div>
                </div>
                <div className={css.subInfo}>
                  <span style={{textDecoration: "underline", textUnderlineOffset: "3px"}} className={css.subInfoTitle}>
                    <svg style= {{fill: "#FFC531", stroke:"transparent"}} className={css.equipSvg}>
                      <use href={`${sprite}#icon-star`}/>
                    </svg>
                    {`${adv.rating} (${adv.reviews.length} Reviews)`}
                  </span>
                  <a href={`https://www.google.com/maps/search/?api=1&query=${adv.location}`}>
                  <span className={css.subInfoTitle}>
                    <svg  className={css.subInfoSvg}>
                      <use href={`${sprite}#icon-pin`}/>
                    </svg>
                    {adv.location}
                  </span>
                  </a>
                </div>
                <p className={css.descr}>{adv.description.slice(0, 55)}...</p>
                <ul className={css.equipList}>
                  <li className={css.equipWrap}>
                    <svg  className={css.equipSvg}>
                      <use href={`${sprite}#icon-adults`}/>
                    </svg>
                    {adv.adults} Adults
                  </li>
                  <li className={css.equipWrap}>
                    <svg  className={css.equipSvg}>
                      <use href={`${sprite}#icon-child`}/>
                    </svg>
                    {adv.children} Children
                  </li>
                  <li className={css.equipWrap}>
                    <svg style={{fill: "transparent"}}  className={css.equipSvg}>
                      <use href={`${sprite}#icon-auto`}/>
                    </svg>
                    {adv.transmission}
                  </li>
                  <li className={css.equipWrap}>
                    <svg  className={css.equipSvg}>
                      <use href={`${sprite}#icon-petrol`}/>
                    </svg>
                    {adv.engine}
                  </li>
                  {adv.details.kitchen > 0 &&
                    <li className={css.equipWrap}>
                      <svg style={{fill: "transparent"}}   className={css.equipSvg}>
                        <use href={`${sprite}#icon-kitchen`}/>
                      </svg>
                      Kitchen
                  </li>
                  }
                  {adv.details.bathroom > 0 &&
                    <li className={css.equipWrap}>
                      <svg  className={css.equipSvg}>
                        <use href={`${sprite}#icon-shower`}/>
                      </svg>
                      Bathroom
                  </li>
                  }
                  <li className={css.equipWrap}>
                    <svg  className={css.equipSvg}>
                      <use href={`${sprite}#icon-bedroom`}/>
                    </svg>
                    {adv.details.beds > 1 ? `${adv.details.beds} Beds`: ` ${adv.details.beds} Bed`}
                  </li>
                  {adv.details.airConditioner > 0 &&
                    <li className={css.equipWrap}>
                      <svg  className={css.equipSvg}>
                        <use href={`${sprite}#icon-conditioner`}/>
                      </svg>
                      AC
                  </li>
                  }
                </ul>
                <button className={css.equipBtn}>Show more</button>
              </div>
            </li>
          )
        })}
        
      </ul>
    </div>
  )
}
