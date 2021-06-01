import React from "react";

import javascript from '../../assets/Svg/javascript.svg';
import gatsby from '../../assets/Svg/gatsby.svg';
import github from '../../assets/Svg/github.svg';
import html from '../../assets/Svg/html.svg';
import linkedin from '../../assets/Svg/linkedin.svg';
import nodejs from '../../assets/Svg/nodejs.svg';
import react from '../../assets/Svg/react.svg';
import typescript from '../../assets/Svg/typescript.svg';

const Icon: React.FC<{
  color?: string;
  size: string;
  icon: 'javascript' | 'gatsby' | 'github' | 'html' | 'linkedin' | 'nodejs' | 'react' | 'typescript';
  className?: string;
}> = props => {
  const { color, size, icon, className = "" } = props;

 const icons = {
   javascript,
   gatsby,
   github,
   html,
   linkedin,
   nodejs,
   react,
   typescript
 }

  return (
    <div 
      dangerouslySetInnerHTML={{__html: icons[icon]}}
      style={{color: color, height: size, width: size, display: 'flex', alignItems: 'center', justifyContent: 'center'}}
      className={className}
    />
  );
};

export default Icon;
