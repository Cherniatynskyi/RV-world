import css from './Info.module.css'
import infoImg1 from '../../images/info1.png'
import infoImg2 from '../../images/info2.png'

export const Info = () => {
  return (
    <div>
        <ul className={css.infoList}>
            <li className={css.infoItem}>
                <div className={css.infoTextWrap}>
                    <h2 className={css.infoTextTitle}>Campgrounds That Rent Campers in Ukraine</h2>
                    <p className={css.infoTextDesc}>RV camping is a great way to spend quality time with the family, while also getting to take in the thrills and beauty of nature. It’s no wonder people are ditching boring hotel rooms to sleep under the stars and between the trees.
                        When planning an RV trip, however, there’s much to think about. Where will you go? What will you pack? Which route will you take? One of the biggest things that come to mind, specifically if you don’t own your own rig is, where can you find RV campers for rent?</p>
                </div>
                <img className={css.infoImg} src={infoImg1} alt="" />
            </li>
            <li className={css.infoItem}>
                <img className={css.infoImg} src={infoImg2} alt="" />
                <div className={css.infoTextWrap}>
                    <h2 className={css.infoTextTitle}>RV WORLD, as the best way to rent a RV</h2>
                    <p className={css.infoTextDesc}>We are the number one service for renting multi-seater, high-quality and equipped RVs. RV WORLD provides a wide selection of vehicles for unforgettable trips. We will be able to choose an RV that will perfectly fit your needs. All our vehicles are perfectly serviced and fully prepared to turn your vacation into unforgettable memories.</p>
                </div>
                
            </li>
            
        </ul>
    </div>
  )
}
