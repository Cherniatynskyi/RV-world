import React from 'react'
import css from './Table.module.css'
import sprite from '../../images/sprite.svg'

export const Table = () => {
  return (
    <div>
        <h2 className={css.tableTitle}>Which RV type is right for me?</h2>
        <table>
            <thead>

                <tr>
                    <th className={css.headerStyle} scope="col" rowSpan="3"></th>
                    <th scope="col" colSpan="2">I want to tow my RV</th>
                    <th className={css.headerStyle} scope="col" colSpan="2">I want to drive my RV</th>
                </tr> 
                <tr>
                    <th scope="col" colSpan="2">Provides more flexibility with access to a smaller, secondary car for exploring and more living space.</th>
                    <th className={css.headerStyle} scope="col" colSpan="2">Provides the best rent-and-go option and allows for simplicity when it comes to setting up camp, just shift the RV into park.</th>
                </tr> 
                <tr>
                    <th scope="col">
                        <p>Travel Trailer</p>
                        <svg className={css.cardSvg}>
                            <use href={`${sprite}#icon-trailer`}/>
                        </svg>
                    </th>
                    <th scope="col">
                        <p>Fifth Wheel</p>
                        <svg className={css.cardSvg}>
                            <use href={`${sprite}#icon-fwheel`}/>
                        </svg>
                    </th>
                    <th className={css.headerStyle} scope="col">
                        <p>Class C Motorhome</p>
                        <svg className={css.cardSvg}>
                            <use href={`${sprite}#icon-classC`}/>
                        </svg>
                    </th>
                    <th className={css.headerStyle} scope="col">
                        <p>Class A Motorhome</p>
                        <svg className={css.cardSvg}>
                            <use href={`${sprite}#icon-classA`}/>
                        </svg>
                    </th>
                </tr>
            </thead>
            <tbody>
                    <tr>
                        <th className={css.headerStyle} >HIGHLIGHTS</th>
                        <td>
                            <ul className={css.tableList}>
                                <li>Great option for more amenities</li>
                                <li>Allow for a second car to visit locations nearby</li>
                                <li>Come in many sizes</li>
                            </ul>
                        </td>
                        <td>
                            <ul className={css.tableList}>
                                <li>Has an overbed hitch</li>
                                <li>Can have as many as five slide outs, resembling a home</li>
                                <li>The biggest RV footprint</li>
                            </ul>
                        </td>
                        <td className={css.headerStyle}>
                            <ul className={css.tableList}>
                                <li>Can offer the indulgent amenities of a Class A at a lower price</li>
                                <li>Vary in size</li>
                                <li>The bigger the RV, the lower the gas mileage</li>
                            </ul>
                        </td>
                        <td className={css.headerStyle}>
                            <ul className={css.tableList}>
                                <li>Can be decked out with full-size amenities (such as an oven or bed)</li>
                                <li>Typically the most high-end and luxurious</li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <th className={css.headerStyle}>DRIVING COMFORT LEVEL</th>
                        <td  >Comfortable towing with a truck or a large SUV</td>
                        <td >Comfortable towing with a full-sized pickup</td>
                        <td className={css.headerStyle} >Comfortable driving a truck</td>
                        <td className={css.headerStyle} >Comfortable driving a bus</td>
                    </tr>
                    <tr>
                        <th className={css.headerStyle}>KILOMETERAGE</th>
                        <td >15-30 kpg</td>
                        <td >15-25 kpg</td>
                        <td className={css.headerStyle} >12-20 kpg</td>
                        <td className={css.headerStyle} >9-12 kpg</td>
                    </tr>
                    <tr>
                        <th className={css.headerStyle}>LENGTH</th>
                        <td >7-8 m</td>
                        <td >7-15 m</td>
                        <td className={css.headerStyle} >7-13 m</td>
                        <td className={css.headerStyle} >7-14+ m</td>
                    </tr>
                    <tr>
                        <th className={css.headerStyle}>AMENITIES</th>
                        <td >
                            <p>There is a wide range of amenities and floorplans depending on size of trailer</p>
                            <button className={css.tableBtn}>Search Travel TRailers</button>
                        </td>
                        <td >
                            <p>Full size kitchens with islands and full size master bedrooms are common</p>
                            <button className={css.tableBtn}>Search Fifth Wheels</button>
                        </td>
                        <td className={css.headerStyle} >
                            <p>Can include overhead sleeping space and some full-size features</p>
                            <button className={css.tableBtn}>Search Class C's</button>
                        </td>
                        <td className={css.headerStyle} >
                            <p>Can offer full-size amenities in the kitchen, bedroom, and bathroom</p>
                            <button className={css.tableBtn}>Search Class A's</button>
                        </td>
                    </tr>
            </tbody>
        </table>

    </div>
  )
}
