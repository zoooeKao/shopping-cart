import {Link} from 'react-router-dom';
import {styles} from '../../style.js';

/** @param {Object} param0
 * @param {'brand' | 'category'} param0.requestQuery
 * @param {string} param0.item
 * @param {boolean} param0.linkable
 * @returns {JSX.Element}
 */
export const OutlineButton = ({requestQuery, item, linkable}) => {
  return (
    <>
      {linkable ? (
        <Link to='/search-result' state={{[requestQuery]: item}}>
          <button className={`${styles.outlineButton}`}>
            <div className='whitespace-nowrap'>{item ?? 'waiting...'}</div>
          </button>
        </Link>
      ) : (
        <label className={`${styles.outlineButton} `}>
          <div>{item ?? 'waiting...'}</div>
          <input type='radio' name='category' id='category' className='hidden'></input>
        </label>
      )}
    </>
  );
};
