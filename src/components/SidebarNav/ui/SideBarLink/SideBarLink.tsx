import { NavLink } from 'react-router-dom';
import classes from './SideBarLink.module.scss';

interface PT {
  text: string;
  to: string;
}

function SideBarLink({ to, text }: PT) {
  return (
    <div className={classes.root}>
      <NavLink
        to={to}
        style={({ isActive, isPending }) => {
          return {
            color: isActive ? '#A85809' : '',
          };
        }}
      >
        {text}
      </NavLink>
    </div>
  );
}

export default SideBarLink;
