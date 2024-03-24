import css from './BrowsePage.module.css'
import { Sidebar } from "components/Sidebar/Sidebar"
import { Catalog } from "components/Catalog/Catalog"
import { useSelector } from 'react-redux'

export const BrowsePage = () => {
  const adverts = useSelector(state => state.adverts.adverts)
  const filters = useSelector(state => state.adverts.filters)
  return (
    <div className={css.browsepage}>
        <Sidebar/>
        <Catalog adverts={adverts} filters={filters}></Catalog>
    </div>
  )
}
