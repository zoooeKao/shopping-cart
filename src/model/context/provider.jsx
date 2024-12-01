import {useState} from 'react';
import {LoggedInContext} from './context';

/**
 * @type {React.FC<{children: React.ReactNode}>}
 */
export const LoggedInContextProvider = ({children}) => {
  const [isLoggedIn, setIsLoggedIn] = useState(/** @type {boolean} */ (false));

  return <LoggedInContext.Provider value={{isLoggedIn, setIsLoggedIn}}>{children}</LoggedInContext.Provider>;
};
