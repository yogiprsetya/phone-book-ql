/* eslint-disable @next/next/no-img-element */
'use client';

import Link from 'next/link';
import { Users, UserPlus, Star } from 'react-feather';
import tw, { styled } from 'twin.macro';

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

const AsideStyled = styled('aside')([
  tw`w-full md:w-[240px] md:h-screen md:p-8 px-4 py-5 fixed`,
  {
    display: 'flex',
    flexDirection: 'column',
    gap: 8,
    background: '#10172a'
  }
]);

const LogoStyled = styled('div')((props) => [
  tw`md:mb-8 flex items-end gap-2`,
  {
    color: props.theme.colors.secondary
  }
]);

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
      <LogoStyled>
        <img src="/logo.svg" alt="logo" className="w-6 h-6" />
        <p>PhoneBookQL</p>
      </LogoStyled>

      {/* <div className="flex flex-col">
        {navigation.map((nav) => (
          <LinkStyled key={nav.url} href={nav.url}>
            {nav.icon} {nav.label}
          </LinkStyled>
        ))}
      </div> */}
    </AsideStyled>
  );
};
