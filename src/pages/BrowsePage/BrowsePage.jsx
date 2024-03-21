import css from './BrowsePage.module.css'
import { Sidebar } from "components/Sidebar/Sidebar"
import { Catalog } from "components/Catalog/Catalog"

export const BrowsePage = () => {
  return (
    <div className={css.browsepage}>
        <Sidebar></Sidebar>
        <Catalog></Catalog>
    </div>
  )
}
