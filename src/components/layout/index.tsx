import React, { forwardRef } from 'react';
import { Box, BoxProps, Flex } from '@chakra-ui/react';

export const Layout = forwardRef<HTMLDivElement, BoxProps>(({ sx, ...rest }, ref) => (
	<Flex
		ref={ref}
		sx={{
			flexDirection: 'column',
			alignItems: 'center',
			width: '100%',
			minHeight: '100vh',
			bg: 'grey',
			...sx,
		}}
		{...rest}
	/>
));

export const Header = forwardRef<HTMLDivElement, BoxProps>(({ sx, ...rest }, ref) => (
	<Box
		as="header"
		ref={ref}
		sx={{
			position: 'relative',
			width: '100%',
			bg: 'blue',
			...sx,
		}}
		{...rest}
	/>
));

export const Main = forwardRef<HTMLDivElement, BoxProps>(({ sx, ...rest }, ref) => (
	<Flex
		as="main"
		ref={ref}
		sx={{
			display: 'flex',
			flexDirection: 'column',
			position: 'relative',
			justifyContent: 'center',
			width: '100%',
			maxWidth: '1440px',
			flexGrow: 1,
			bg: 'red',
			...sx,
		}}
		{...rest}
	/>
));
