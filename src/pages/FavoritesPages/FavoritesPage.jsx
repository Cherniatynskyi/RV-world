import { useSelector } from "react-redux"
import { Catalog } from "components/Catalog/Catalog"

export const FavoritesPage = () => {
  const adverts = useSelector(state => state.adverts.adverts)
  const favorites = adverts.filter(adv => adv.favorite === "true")
  
  return (
    <div style={{paddingTop: "30px"}}>
        <Catalog adverts={favorites}/>
    </div>
  )
}
