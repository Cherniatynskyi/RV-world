import css from './Hero.module.css'
import hero from '../../images/hero.png'
import { NavLink } from 'react-router-dom'

export const Hero = () => {
  return (
    <div className={css.heroWrap}>
        <div>
            <h1 className={css.heroTitle}>BEST RV <br></br> CAMPING WITH <br></br><span className={css.heroThumb}>RV WORLD</span></h1>
            <NavLink to="/catalog"  className={css.heroBtn}>BROWSE</NavLink>
        </div>
        <img className={css.heroImg} src={hero} alt="" />
    </div>
  )
}
