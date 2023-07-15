import { classNames } from 'shared/lib/classNames/classNames';
import { ButtonHTMLAttributes, FC } from 'react';
import cls from './Button.module.scss';

export enum ThemeButton {
  CLEAR = 'clear',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  type?: 'submit' | 'reset' | 'button';
  className?: string;
  theme?: ThemeButton;
}

export const Button: FC<ButtonProps> = (
  {
    type = 'button',
    className,
    children,
    theme,
    ...otherProps
  },
) => (
  <button
    type={type}
    className={classNames(cls.Button, {}, [className, cls[theme]])}
    {...otherProps}
  >
    {children}
  </button>
);
