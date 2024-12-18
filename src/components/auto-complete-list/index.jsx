import {TagIcon} from '@heroicons/react/24/solid';
import {Link, useLoaderData} from 'react-router-dom';

/** @param {Object} param0
 * @param {'brand' | 'category'} param0.requestQuery
 * @param {'grid-rows-2' | 'grid-cols-2'} param0.layout
 * @param {'grid-flow-col' | 'grid-flow-row'} param0.flow
 * @returns {JSX.Element}
 */
export const AutoCompleteList = ({requestQuery, layout, flow}) => {
  /**
   * @type {{autoCompleteList: import('../../env').AutoCompleteList}}
   */
  const {
    autoCompleteList: {brand, category},
  } = /** @type {import('../../page/main').ReturnHomePageLoader} */ (useLoaderData());

  return (
    <div className={`grid ${layout} ${flow} gap-4`}>
      {(requestQuery === 'brand' ? brand : category).map((item) => (
        <Link
          key={item}
          to={`/products-lists?${requestQuery}=${item}`}
          className='w-full'>
          <button className='flex gap-3 items-center justify-center p-4 w-full h-[88px] rounded-2xl bg-light-grey-secondary '>
            <div className='line-clamp-2 text-start'>{item ?? 'waiting...'}</div>
            <div className='flex justify-center items-center  h-full'>
              <TagIcon className='size-10 text-green-primary' />
            </div>
          </button>
        </Link>
      ))}
    </div>
  );
};
