import React from 'react'
import css from './subContent.module.css'
import sprite from '../../../images/sprite.svg'

export const Reviews = ({reviews}) => {
  return (
    <ul className={css.reviewsList}>
        {reviews.map(review => {
            return (
                <li className={css.reviewsItem}>
                    <div className={css.reviewsMainWrap}>
                        <div className={css.reviewsImg}>{review.reviewer_name[0]}</div>
                        <div className={css.reviewsInfo}>
                            <h3 className={css.reviewerName}>{review.reviewer_name}</h3>
                            <div className={css.starsList}>
                                <svg  className={css.equipSvg2}>
                                    <use href={`${sprite}#icon-newstar`}/>
                                </svg>
                                <svg  className={css.equipSvg2}>
                                    <use href={`${sprite}#icon-newstar`}/>
                                </svg>
                                <svg  className={css.equipSvg2}>
                                    <use href={`${sprite}#icon-newstar`}/>
                                </svg>
                                <svg  className={css.equipSvg2}>
                                    <use href={`${sprite}#icon-newstar`}/>
                                </svg>
                                <svg  className={css.equipSvg2}>
                                    <use href={`${sprite}#icon-newstar`}/>
                                </svg>
                            </div>
                            <div className={css.progress}>
                                <div style={{width: `${review.reviewer_rating * 20}%`}} className={css.bar}></div>
                            </div>
                        </div>
                    </div>
                    <p className={css.reviewsComment}>{review.comment}</p>
                </li>
            )
        })}
    </ul>
  )
}
