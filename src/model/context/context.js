import {createContext, useContext} from 'react';

/**
 * @typedef {{isLoggedIn: boolean; setIsLoggedIn:React.Dispatch<React.SetStateAction<boolean>>}} LoggedInStatus
 */

/**
 * @type {React.Context<LoggedInStatus | null> }
 */
export const LoggedInContext = createContext(null);

export const useLoggedInState = () => {
  const isLoggedIn = useContext(LoggedInContext);

  if (!isLoggedIn) throw new Error('Layout state does not has a provider.');

  return isLoggedIn;
};
