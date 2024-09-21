export const Wrapper = ({bgColor = 'bg-white', children}) => {
  return <div className={`h-full py-4 ${bgColor}`}>{children}</div>;
};

export const WrapperWithNav = ({bgColor = 'bg-white', children}) => {
  return <div className={`h-dvh pb-[102px] ${bgColor}`}>{children}</div>;
};
