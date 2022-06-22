import React from 'react'

import Image from 'next/image'
import NextLink from 'next/link'
import { useTheme as useNextTheme } from 'next-themes';
import { Spacer, Switch, Text, useTheme, Link } from '@nextui-org/react'
import { BsFillBrightnessHighFill, BsMoonStarsFill } from 'react-icons/bs'


export const Navbar = () => {
    const { theme, isDark } = useTheme()
    const { setTheme } = useNextTheme()

    return (
        <div style={{
            display: 'flex',
            width: '100%',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'start',
            padding: ' 0 21px',
            backgroundColor: theme?.colors.gray50.value,
        }}>
            <Image
                src="https://res.cloudinary.com/dbjzts2r9/image/upload/v1655762283/580b57fcd9996e24bc43c31e_i14q8w.png"
                alt="icon app"
                width={24}
                height={24}
            />

            <NextLink href={'/'} passHref>
                <Link >
                    <Text css={{ marginLeft: '$4'}} h2>P</Text>
                    <Text css={{ letterSpacing: '$wide'}} h4>okemon</Text>
                </Link>
            </NextLink>

            <Spacer css={{ flex: 1 }} />

            <NextLink href="/favorites" passHref>
                <Text >
                    <Link block color="text">
                        Favorites
                    </Link>
                </Text>
            </NextLink>

            <Switch
                size={'xs'}
                color="secondary"
                checked={isDark}
                iconOn={<BsMoonStarsFill />}
                iconOff={<BsFillBrightnessHighFill />}
                onChange={(e) => setTheme(e.target.checked ? 'dark' : 'light')}
            />

        </div>
    )
}
