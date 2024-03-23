import css from './Modal.module.css'
import { useEffect, useRef } from 'react';
import { useLockBodyScroll } from '@uidotdev/usehooks';
import { ModalContent } from './ModalContent';

export const Modal =({onClose, card})=> {

    const firstRender = useRef(false);
    useLockBodyScroll();

    useEffect(() => {
        if (firstRender.current === false) {
          window.addEventListener('keydown', handleKeyDown);
        }
    
        return () => {
          firstRender.current = false;
          window.removeEventListener('keydown', handleKeyDown);
        };
      });
    
      const handleKeyDown = e => {
        if (e.code === 'Escape') {
          onClose()
        }
      };
    
      const backdropClose = e => {
        if (e.target === e.currentTarget) {
          //ЗАКРИТТЯ НА БЕКДРОП
            onClose()
        }
      };
    
      const handleBtnClose = () =>{
        onClose()
      }

  return (
    <div onClick={e => backdropClose(e)} className={css.modalBackdrop}>
      <div
        className={css.modalBody}
      >
        <button onClick={handleBtnClose} className={css.closeButton}>
        {/* <svg width="20" height="20" className={css.buttonIcon}>
              <use href={`${sprite}#icon-close`} />
        </svg> */}
        </button>
        <ModalContent card={card}/>
      </div>
    </div>
  )
}
