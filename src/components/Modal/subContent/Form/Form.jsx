import css from './From.module.css'

import React from 'react'

export const Form = () => {

  const handleFocus = (event) => {
    event.target.type = 'date';
  };

  const handleBlur = (event) => {
    if (!event.target.value) {
      event.target.type = 'text';
    }
  };

  return (
    <form className={css.form}>
      <div>
        <h3 className={css.formTitle}>Book your campervan now</h3>
        <p className={css.formSubTitle}>Stay connected! We are always ready to help you.</p>
      </div>
      <div className={css.formWrap}>
      <label htmlFor="">
          <input type="text" name='name' placeholder='Name'/>
        </label>
        <label htmlFor="">
          <input type="email" name='email' placeholder='Email' />
        </label>
        <label htmlFor="">
          <input style={{cursor: "pointer"}} name='date' type="text" placeholder="Booking date" onFocus={handleFocus}  onBlur={handleBlur}/>
        </label>
        <label htmlFor="">
          <textarea type="text" name='comment' placeholder='Comment'/>
        </label>
      </div>
        <button className={css.formBtn}>Send</button>
      </form>
  )
}
