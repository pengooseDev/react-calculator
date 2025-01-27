import { Parser } from '../../utils/parser';
import { ButtonProps } from './button.type';

export const Button = ({ onClick, classNames, children }: ButtonProps) => {
  return (
    <button className={Parser.classNames(classNames)} onClick={onClick}>
      {children}
    </button>
  );
};
