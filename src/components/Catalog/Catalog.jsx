import css from './Catalog.module.css'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { getAdvertsThunk } from '../../redux/operations'
import { Card } from './Card'

export const Catalog =({adverts, filters}) =>{
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAdvertsThunk())
    }, [dispatch])


  return (
    <div className={css.catalogWrap}>
      {console.log(filters)}
      {console.log(adverts)}
      {filters ? <ul className={css.catalogList}>
        {adverts && adverts.filter(adv => {
          if(!filters.vehicle){
            return true
          }
          if(adv.form === filters.vehicle){
            return true
          }
          return false
          // if(!filters.vehicle){
          //   return true
          // }     
          // if(filters.location === adv.location.split(', ')[1]){
          //   return true
          // }
          // if(adv.form === filters.vehicle){
          //   if(filters.equip.length ===0) return true
          //   if(filters.equip.length === 1 & adv.details[filters.equip[0]] > 0) return true
          //   if(filters.equip.length=== 2 & adv.details[filters.equip[0]] > 0 & adv.details[filters.equip[1]] > 0) return true
          //   if(filters.equip.length === 3 & adv.details[filters.equip[0]] > 0 & adv.details[filters.equip[1]] > 0 &  adv.details[filters.equip[2]] > 0) return true
          //   if(filters.equip.length > 3) return true
          //   return false
          // }
          // return false
        }).map(adv => {
          return (
            <Card key={adv.id} adv={adv}/>
          )
        })}
        
      </ul> :
      <ul className={css.catalogList}>
      {adverts.map(adv => {
        console.log()
        return (
          <Card key={adv.id} adv={adv}/>
        )
      })}
    </ul>
      }
    </div>
  )
}
