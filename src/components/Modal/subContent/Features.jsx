import css from './subContent.module.css'
import sprite from '../../../images/sprite.svg'

import React from 'react'

export const Features =({card})=> {
  return (
    <div className={css.featuresWrap}>
        <ul className={css.equipList}>
                  <li className={css.equipWrap}>
                    <svg  className={css.equipSvg}>
                      <use href={`${sprite}#icon-adults`}/>
                    </svg>
                    {card.adults} Adults
                  </li>
                  <li className={css.equipWrap}>
                    <svg  className={css.equipSvg}>
                      <use href={`${sprite}#icon-child`}/>
                    </svg>
                    {card.children} Children
                  </li>
                  <li className={css.equipWrap}>
                    <svg style={{fill: "transparent"}}  className={css.equipSvg}>
                      <use href={`${sprite}#icon-automatic`}/>
                    </svg>
                    {card.transmission}
                  </li>
                  <li className={css.equipWrap}>
                    <svg  className={css.equipSvg}>
                      <use href={`${sprite}#icon-petrol`}/>
                    </svg>
                    {card.engine}
                  </li>
                  {card.details.kitchen > 0 &&
                    <li className={css.equipWrap}>
                      <svg style={{fill: "transparent"}}  className={css.equipSvg}>
                        <use href={`${sprite}#icon-kitchen`}/>
                      </svg>
                      Kitchen
                  </li>
                  }
                  {card.details.bathroom > 0 &&
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
                    {card.details.beds > 1 ? `${card.details.beds} Beds`: ` ${card.details.beds} Bed`}
                  </li>
                  {card.details.airConditioner > 0 &&
                    <li className={css.equipWrap}>
                      <svg  className={css.equipSvg}>
                        <use href={`${sprite}#icon-conditioner`}/>
                      </svg>
                      AC
                  </li>
                  }
                  {card.details.radio > 0 &&
                    <li className={css.equipWrap}>
                      <svg  className={css.equipSvg}>
                        <use href={`${sprite}#icon-radio`}/>
                      </svg>
                      Radio
                  </li>
                  }
                  {card.details.hob > 0 &&
                    <li className={css.equipWrap}>
                      <svg  className={css.equipSvg}>
                        <use href={`${sprite}#icon-hob`}/>
                      </svg>
                      {card.details.hob > 1 ? `${card.details.hob} Hobs` : `1 Hob`}
                  </li>
                  }
                  {card.details.CD > 0 &&
                    <li className={css.equipWrap}>
                      <svg  className={css.equipSvg}>
                        <use href={`${sprite}#icon-cd`}/>
                      </svg>
                      CD
                  </li>
                  }
        </ul>
        <div>
          <h3 className={css.detailsTitle}>Vehicle details</h3>
          <ul className={css.detailsList}>
              <li className={css.detailsItem}>
                <span className={css.detailsText}>Form</span>
                <span className={css.detailsText}>{card.form}</span>
              </li>
              <li className={css.detailsItem}>
                <span className={css.detailsText}>Length</span>
                <span className={css.detailsText}>{card.length}</span>
              </li>
              <li className={css.detailsItem}>
                <span className={css.detailsText}>Width</span>
                <span className={css.detailsText}>{card.width}</span>
              </li>
              <li className={css.detailsItem}>
                <span className={css.detailsText}>Height</span>
                <span className={css.detailsText}>{card.height}</span>
              </li>
              <li className={css.detailsItem}>
                <span className={css.detailsText}>Tank</span>
                <span className={css.detailsText}>{card.tank}</span>
              </li>
              <li className={css.detailsItem}>
                <span className={css.detailsText}>Consumption</span>
                <span className={css.detailsText}>{card.consumption}</span>
              </li>
          </ul>
        </div>
    </div>
  )
}
