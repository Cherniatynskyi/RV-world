import { Suspense} from "react";
import { NavLink, Outlet } from "react-router-dom";
import logo from '../images/logo.png'
import logo2 from '../images/logo2.png'
import css from './Layout.module.css'

export const Layout = () => {
  return (
    <>
      <nav className={css.nav}>
        <NavLink to='/'><img className={css.navLogo} src={logo} alt="" /></NavLink>
        <ul className={css.navList}>
          <NavLink to='/' className={css.navLink}>Home</NavLink>
          <NavLink to="/catalog" className={css.navLink}>Browse</NavLink>
          <NavLink to="/favorites" className={css.navLink}>Favorites</NavLink>
        </ul>
      </nav>
      <main className={css.main}>
        <Suspense fallback={<div>Loading.....</div>}>
              <Outlet/>
        </Suspense>
      </main>
      <footer className={css.footer}>
        <div>
          <img width='100px' src={logo2} alt="" />
        </div>
        <div className={css.listsWrap}>
          <ul>
            <li>RV World</li>
            <li>Lorem, ipsum dolor.</li>
            <li>Lorem, ipsum.</li>
            <li>Lorem ipsum dolor sit.</li>
          </ul>
          <ul>
            <li>Explore</li>
            <li>Lorem, ipsum dolor.</li>
            <li>Lorem, ipsum.</li>
            <li>Lorem ipsum dolor sit.</li>
          </ul>
          <ul>
            <li>Socials</li>
            <li>Lorem, ipsum dolor.</li>
            <li>Lorem, ipsum.</li>
            <li>Lorem ipsum dolor sit.</li>
          </ul>
        </div>
      </footer>
    </>
    
  )
}
