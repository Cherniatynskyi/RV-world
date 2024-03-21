// import css from './HomePage.module.css'
import { Hero } from 'components/Hero/Hero'
import { Info } from 'components/InfoSection/Info'
import { Table } from 'components/Table/Table'

export const HomePage = () => {
  return (
    <div>
      <Hero/>
      <Info/>
      <Table/>
    </div>
  )
}
