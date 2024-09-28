import {Link, useLoaderData, useNavigate} from 'react-router-dom';
import {styles} from '../../style';

/** @param {Object} param0
 * @param {'brand' | 'category'} param0.requestQuery
 * @param {boolean} param0.linkable
 * @param {(param: import('../../env').AutoCompleteList['category'][number]) => void | null} param0.selecting
 * @param {import('../../env').AutoCompleteList['category'][number] | null} param0.selected
 * @returns {JSX.Element}
 */
export const OutlineButtonList = ({requestQuery, linkable, selecting, selected}) => {
  /**
   * @type {{autoCompleteList: import('../../env').AutoCompleteList}}
   */
  const {
    autoCompleteList: {brand, category},
  } = useLoaderData();

  const navigate = useNavigate();

  return (
    <div className={`flex ${requestQuery === 'brand' ? 'flex-nowrap' : 'flex-wrap'} gap-3`}>
      {(requestQuery === 'brand' ? brand : category).map((item) =>
        // <OutlineButton key={item} requestQuery={requestQuery} item={item} linkable={linkable} />
        linkable ? (
          <Link to={`/search-result?${requestQuery}=${item}`}>
            <button
              key={item}
              onClick={() => {
                selecting(item);
                navigate(`/search-result`, {state: {[requestQuery]: item}});
              }}
              className={`${styles.outlineButton} ${selected === item ? 'bg-black border-transparent text-white' : ''}`}>
              <div className='whitespace-nowrap'>{item ?? 'waiting...'}</div>
            </button>
          </Link>
        ) : (
          <label key={item} className={`${styles.outlineButton} ${selected === item ? 'bg-green-primary border-transparent text-white' : ''}`}>
            <div>{item ?? 'waiting...'}</div>
            <input type='radio' name='category' value={item} checked={selected === item} onChange={() => selecting(item)} className='hidden'></input>
          </label>
        )
      )}
    </div>
  );
};
