'use client';

import * as React from 'react';
import styles from './Home.module.scss';
import { Container, Typography } from '@mui/material';

function Home() {
	return (
		<Container maxWidth="lg">
			<Typography variant="h3" component="h1">
				Hello World
			</Typography>
		</Container>
	);
}

export default Home;
