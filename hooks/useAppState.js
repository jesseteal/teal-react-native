import React from 'react';
import { AppState } from 'react-native';

export const useAppState = (settings) => {
  const { onChange, onForeground, onBackground } = settings || {};
  const [appState, setAppState] = React.useState(AppState.currentState);

  React.useEffect(() => {
    function handleAppStateChange(nextAppState) {
      if (nextAppState === 'active') {
        isValidFunction(onForeground) && onForeground();
      } else if (appState === 'active' && nextAppState.match(/inactive|background/)) {
        isValidFunction(onBackground) && onBackground();
      }
      setAppState(nextAppState);
      isValidFunction(onChange) && onChange(nextAppState);
    }
    AppState.addEventListener('change', handleAppStateChange);

    return () => AppState.removeEventListener('change', handleAppStateChange);
  }, [onChange, onForeground, onBackground, appState]);

  // settings validation
  function isValidFunction(func) {
    return func && typeof func === 'function';
  }
  return { appState };
}

export default useAppState
