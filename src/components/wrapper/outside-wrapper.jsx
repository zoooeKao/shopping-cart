/** @type {React.FC<{bgColor:string, children: React.ReactNode}>} */
export const Wrapper = ({bgColor = 'bg-white', children}) => {
  return <div className={`h-full py-4 ${bgColor}`}>{children}</div>;
};

/** @type {React.FC<{children: React.ReactNode}>} */
export const MaxWidth = ({children}) => {
  return <div className='mx-auto max-w-[375px]'>{children}</div>;
};
