import {Category} from '../category';

// export const Categories = () => {
//   const categories = new Array(11).fill({product: '照相機', price: 100});

//   return (
//     <div className='grid grid-rows-2 grid-flow-col gap-3'>
//       {categories.map(({product, price}) => (
//         <Category product={product} price={price} />
//       ))}
//     </div>
//   );
// };

export const Categories = ({layout, flow}) => {
  // TODO: 接 API
  const categories = new Array(11).fill({product: '照相機', price: 100});

  return (
    <div className={`grid ${layout} ${flow} gap-3`}>
      {categories.map(({product, price}) => (
        <Category product={product} price={price} />
      ))}
    </div>
  );
};
