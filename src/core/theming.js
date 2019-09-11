/* @flow */
/* eslint-disable no-redeclare */

import createReactContext, { type Context } from 'create-react-context';
import createThemeProvider, {
  type ThemeProviderType,
} from '@callstack/react-theme-provider/lib/createThemeProvider';
import createWithTheme, {
  type WithThemeType,
} from '@callstack/react-theme-provider/lib/createWithTheme';
import DefaultTheme from '../styles/DefaultTheme';
import type { Theme, ThemeShape } from '../types';

type ThemingType<T, S> = {
  ThemeContext: Context<T>,
  ThemeProvider: ThemeProviderType<T>,
  withTheme: WithThemeType<T, S>,
};

function createTheming<T, S>(defaultTheme: T): ThemingType<T, S> {
  const ThemeContext: Context<T> = createReactContext(defaultTheme);

  const ThemeProvider: ThemeProviderType<T> = createThemeProvider(
    defaultTheme,
    ThemeContext
  );
  const withTheme: WithThemeType<T, S> = createWithTheme(
    ThemeProvider,
    ThemeContext
  );

  return {
    ThemeContext,
    ThemeProvider,
    withTheme,
  };
}

export const {
  ThemeContext,
  ThemeProvider,
  withTheme,
}: ThemingType<?Theme, ThemeShape> = createTheming(DefaultTheme);
