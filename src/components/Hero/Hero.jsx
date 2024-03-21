import css from './Hero.module.css'
import hero from '../../images/hero.png'

export const Hero = () => {
  return (
    <div className={css.heroWrap}>
        <div>
            <h1 className={css.heroTitle}>BEST RV <br></br> CAMPING WITH <br></br><span className={css.heroThumb}>RV WORLD</span></h1>
            <button className={css.heroBtn}>BROWSE</button>
        </div>
        <img className={css.heroImg} src={hero} alt="" />
    </div>
  )
}
