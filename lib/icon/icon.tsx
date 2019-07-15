import * as React from 'react';
import './importAllIcons';
import './icon.scss';
import classes from '../helper/classes';

interface IconProps extends React.SVGAttributes<SVGElement> {
  name: string;
}

const Icon: React.FunctionComponent<IconProps> = ({className, name, ...restProps}) => {
  return (
    <svg
      className={classes('icon', className)}
      {...restProps}
    >
      <use xlinkHref={`#${name}`}/>
    </svg>
  );
};

export default Icon;