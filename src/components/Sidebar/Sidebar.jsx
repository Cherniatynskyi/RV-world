import css from './Sidebar.module.css'
import sprite from '../../images/sprite.svg'
import { equipList } from 'utils/equipList'
import { vehicleType } from 'utils/vehicleType'

export const Sidebar =() =>{
  return (
    <div className={css.sidebar}>
        <div>
            <p>Location</p>
            <input type="select" />
        </div>
        <div>
            <p>Filters</p>
            <form action="">
            <fieldset className={css.form}>
                <legend className={css.formTitle}>Vehicle equipment</legend>
                    <div className={css.equipWrap}>
                            {equipList.map(eqp => {
                                return (
                                <label key={eqp.value} className={css.container}>
                                    <input
                                        type="checkbox"
                                        name="equip" 
                                        value={eqp.value}
                                    />
                                    <div className={css.checkmark}>
                                        <span className={css.name}>{eqp.name}</span>
                                        <svg className={css.svg}>
                                            <use href={`${sprite}#icon-${eqp.value}`}/>
                                        </svg>
                                    </div>
                                </label>
                                )
                            })}
                    </div>
            </fieldset>
            <fieldset className={css.form}>
                <legend className={css.formTitle}>Vehicle type</legend>
                    <div className={css.equipWrap}>
                            {vehicleType.map(vhc => {
                                return (
                                <label key={vhc.value} className={css.container}>
                                    <input
                                        type="checkbox"
                                        name="equip" 
                                        value={vhc.value}
                                    />
                                    <div className={css.checkmark2}>
                                        <span className={css.name}>{vhc.name}</span>
                                        <svg className={css.svg}>
                                            <use href={`${sprite}#icon-${vhc.value}`}/>
                                        </svg>
                                    </div>
                                </label>
                                )
                            })}
                    </div>
            </fieldset>
            <button type='submit' className={css.button}>SEARCH</button>
            </form>
        </div>
    </div>
  )
}
