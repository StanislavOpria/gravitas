import React from 'react';
import clsx from 'clsx';
import { NavLink } from 'react-router-dom';

import styles from './Menu.module.scss';

const links = [
  {
    to: '/',
    title: 'Main',
  },
  {
    to: '/news',
    title: 'News',
  },
  {
    to: '/clients',
    title: 'Clients',
  },
  {
    to: '/contacts',
    title: 'Contacts',
  },
  {
    to: '/partners',
    title: 'Partners',
  },
  {
    to: '/practices',
    title: 'Practices',
  },
];

function Menu() {
  return (
    <menu className={styles.Wrapper}>
      {links.map((link) => (
        <div key={link.to}>
          <NavLink
            to={link.to}
            className={({ isActive, isPending }) => clsx(styles.Link, {
              [styles.Link___active]: isActive,
              [styles.Link___pending]: isPending,
            })}
          >
            {link.title}
          </NavLink>
        </div>
      ))}
    </menu>
  );
}

export default Menu;
