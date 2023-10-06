/* eslint-disable @next/next/no-img-element */
'use client';

import { useOutsideEvent } from 'hooks/useOutsideEvent';
import Link from 'next/link';
import { useState } from 'react';
import { Users, UserPlus, Star, Menu } from 'react-feather';
import tw, { styled } from 'twin.macro';

const navigation = [
  {
    icon: <Users size={16} />,
    label: 'Contacts',
    url: '/'
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
  tw`w-full relative md:w-[240px] md:h-screen md:p-8 px-4 py-5 max-md:fixed flex md:flex-col max-md:justify-between z-10`,
  {
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

const ButtonMenu = styled('button')((props) => [
  tw`md:hidden`,
  {
    color: props.theme.colors.secondary
  }
]);

const MobileMenu = styled('div')((props) => [
  tw`flex flex-col absolute top-full left-0 w-full px-4 pb-4 shadow-2xl`,
  {
    background: props.theme.colors.text.dark
  }
]);

export const Sidebar = () => {
  const [mobileToggle, setMobileToggle] = useState<boolean>(false);
  const menuRef = useOutsideEvent(() => setMobileToggle(false));

  return (
    <AsideStyled ref={menuRef}>
      <LogoStyled>
        <img src="/logo.svg" alt="logo" className="w-6 h-6" />
        <p>PhoneBookQL</p>
      </LogoStyled>

      <ButtonMenu onClick={() => setMobileToggle(!mobileToggle)}>
        <Menu />
      </ButtonMenu>

      <div className="flex flex-col max-md:hidden">
        {navigation.map((nav) => (
          <LinkStyled key={nav.url} href={nav.url}>
            {nav.icon} {nav.label}
          </LinkStyled>
        ))}
      </div>

      {mobileToggle && (
        <MobileMenu>
          {navigation.map((nav) => (
            <LinkStyled key={nav.url} href={nav.url}>
              {nav.icon} {nav.label}
            </LinkStyled>
          ))}
        </MobileMenu>
      )}
    </AsideStyled>
  );
};
