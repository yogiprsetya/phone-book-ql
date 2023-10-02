/* eslint-disable @next/next/no-img-element */
'use client';

import Link from 'next/link';
import { Users, UserPlus, Star } from 'react-feather';
import { styled } from 'twin.macro';

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

const AsideStyled = styled('aside')((props) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: 8,
  padding: 32,
  background: '#10172a',
  width: '12%',
  height: '100vh',

  '& > div': {
    marginBottom: 32,
    display: 'flex',
    alignItems: 'flex-end',
    gap: 8,
    color: props.theme.colors.secondary,

    '& > img': {
      width: 24,
      height: 24
    }
  }
}));

const LinkStyled = styled(Link)((props) => ({
  color: props.theme.colors.secondary,
  fontWeight: 600,
  padding: '4px 0',
  textDecoration: 'none',
  display: 'flex',
  gap: 12,
  alignItems: 'center'
}));

export const Sidebar = () => {
  return (
    <AsideStyled>
      <div>
        <img src="/logo.svg" alt="logo" />
        <p>PhoneBookQL</p>
      </div>

      {navigation.map((nav) => (
        <LinkStyled key={nav.url} href={nav.url}>
          {nav.icon} {nav.label}
        </LinkStyled>
      ))}
    </AsideStyled>
  );
};
