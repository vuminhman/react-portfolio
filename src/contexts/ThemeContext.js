import React, { createContext, useContext, useReducer, useEffect  } from 'react';
import { commonVariables, lightTheme, darkTheme } from '../common/theme';

// Initial state
const initialState = {
  theme: 'dark',
};

// Create context
export const ThemeContext = createContext();

// Reducer function to update state
const reducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_THEME':
      return { ...state, theme: state.theme === 'dark' ? 'light' : 'dark' };
    default:
      return state;
  }
};

// Provider component
export const ThemeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const root = document.documentElement;
    const seenProperties = new Set();

    const setProperty = (property, value) => {
      if (seenProperties.has(property)) {
        throw new Error(`Duplicate property detected: ${property}`);
      }
      seenProperties.add(property); // Add the property to the Set
      root.style.setProperty(property, value);
    };

    Object.keys(commonVariables).forEach((property) => {
      setProperty(property, commonVariables[property]);
    });

    const theme = state.theme === 'dark' ? darkTheme : lightTheme;

    // Set the appropriate CSS variables based on the current theme
    Object.keys(theme).forEach((property) => {
      setProperty(property, theme[property]);
    });

  }, [state.theme]);

  return (
    <ThemeContext.Provider value={{ state, dispatch }}>
      {children}
    </ThemeContext.Provider>
  );
};



// Custom hook to use the ThemeContext
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
