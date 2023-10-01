/* eslint-disable @next/next/no-img-element */
'use client';

/** @jsxRuntime classic */
/** @jsx jsx */

import { useTheme, jsx } from '@emotion/react';
import Link from 'next/link';
import { Users, UserPlus, Star } from 'react-feather';

const navigation = [
  {
    icon: <Users size={16} />,
    label: 'Contacts',
    url: '/contact'
  },
  {
    icon: <UserPlus size={16} />,
    label: 'Create',
    url: '/contact/create'
  },
  {
    icon: <Star size={16} />,
    label: 'Favorite',
    url: '/favorite'
  }
];

export const Sidebar = () => {
  const { colors } = useTheme();

  return (
    <aside
      css={{
        display: 'flex',
        flexDirection: 'column',
        gap: 8,
        padding: 32,
        background: '#10172a',
        width: '12%'
      }}
    >
      <div
        css={{
          marginBottom: 32,
          display: 'flex',
          alignItems: 'flex-end',
          gap: 8,
          color: colors.secondary
        }}
      >
        <img
          src="/logo.svg"
          alt="logo"
          css={{
            width: 24,
            height: 24
          }}
        />

        <p>PhoneBookQL</p>
      </div>

      {navigation.map((nav) => (
        <Link
          key={nav.url}
          href={nav.url}
          css={{
            color: colors.secondary,
            fontWeight: 600,
            padding: '4px 0',
            textDecoration: 'none',
            display: 'flex',
            gap: 12,
            alignItems: 'center'
          }}
        >
          {nav.icon} {nav.label}
        </Link>
      ))}
    </aside>
  );
};
