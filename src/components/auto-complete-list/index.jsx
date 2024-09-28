import {useLoaderData} from 'react-router-dom';
import {AutoCompleteItem} from '../auto-complete-item';

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
  } = useLoaderData();

  return (
    <div className={`grid ${layout} ${flow} gap-4`}>
      {(requestQuery === 'brand' ? brand : category).map((item) => (
        <AutoCompleteItem key={item} requestQuery={requestQuery} item={item} />
      ))}
    </div>
  );
};
