import css from './Catalog.module.css'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { getAdvertsThunk } from '../../redux/operations'
import { Card } from './Card'
import { useState } from 'react'
import { useAutoAnimate } from '@formkit/auto-animate/react'

export const Catalog =({adverts, filters}) =>{
  const dispatch = useDispatch()
  const [page, setPage] = useState(1)
  const [animation] = useAutoAnimate()

  useEffect(() => {
    dispatch(getAdvertsThunk())
    }, [dispatch])


  const handlePageChange = ()=> {
    setPage(prev => prev+=1)
  }

  const filteredAdverts = adverts?.filter(adv => {
    if(!filters?.vehicle){
      return true
    }
    if(adv.form === filters?.vehicle){
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
  })
  return (
    <div className={css.catalogWrap}>
      {filters ? <ul className={css.catalogList} ref={animation}>
        {adverts && filteredAdverts.map((adv, i) => {
          if(i < page * 4){
            return <Card key={adv.id} adv={adv}/>
          }
          return null
        })}
      </ul> :
      <ul className={css.catalogList} ref={animation}>
      {adverts.map(adv => {
        return (
          <Card key={adv.id} adv={adv}/>
        )
      })}
    </ul>
      }
      {(filteredAdverts.length > 4)  && <button className={css.loadMoreBtn} onClick={handlePageChange}>Load more</button>}
      {console.log(filteredAdverts.length, adverts.length)}
    </div>
  )
}
