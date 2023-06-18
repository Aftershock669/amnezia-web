import { ReactNode } from 'react';

interface PT {
  children?: ReactNode;
}

const Card = ({ children }: PT) => {
  return <div className="">{children}</div>;
};

export default Card;
