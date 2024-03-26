// import css from './HomePage.module.css'
import { Hero } from 'components/Hero/Hero'
import { Info } from 'components/InfoSection/Info'
import { Table } from 'components/Table/Table'
import {motion} from 'framer-motion'

export const HomePage = () => {
  return (
    <motion.div
      initial={{x: -2000}}
      animate={{x: 0}}
    >
      <Hero/>
      <Info/>
      <Table/>
    </motion.div>
  )
}
