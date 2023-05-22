import { useEffect, useRef, useState } from 'react';
import selectDark from '../../../assets/images/selectDark.svg';
import selectWhite from '../../../assets/images/selectWhite.svg';
import classes from './SelectorCreated.module.scss';

const SelectorCreated = (props) => {
  const [active, setActive] = useState(false);
  let menuRef = useRef();

  useEffect(() => {
    let handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setActive(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => {
      document.removeEventListener('mousedown', handler);
    };
  });

  return (
    <div className="selector-created" ref={menuRef}>
      <div
        className={
          active ? classes.selector_created__block : classes.isActive_block
        }
        onClick={() => setActive(!active)}
      >
        <p>Created</p>
        {props.theme === 'light' ? (
          <img src={selectWhite} alt="selectWhite" />
        ) : (
          <img src={selectDark} alt="selectDark" />
        )}
      </div>
      <div className={classes.selector_created__input}>
        <div
          className={
            active ? classes.selector_created__filter : classes.isActive
          }
        >
          <input
            value={props.filterCreated[0]}
            onChange={(e) =>
              props.setFilterCreated([e.target.value, props.filterCreated[1]])
            }
            type="number"
            placeholder="from"
          />
          <div></div>
          <input
            value={props.filterCreated[1]}
            onChange={(e) =>
              props.setFilterCreated([props.filterCreated[0], e.target.value])
            }
            type="number"
            placeholder="before"
          />
        </div>
      </div>
    </div>
  );
};
export default SelectorCreated;
