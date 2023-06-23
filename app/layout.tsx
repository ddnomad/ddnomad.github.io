import './globals.scss'
import styles from './layout.module.scss'

import { Providers } from './providers'



export const metadata = {
	title: 'Terminal stage of console | ddnomad.net',
	description: 'dd\'s personal website',
}


export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body className={styles.body}>
				<Providers>
					<header className={styles.header}>
						<div className={styles.headerContent}>
							Header hello hello? halo!
						</div>
					</header>
					<main className={styles.main}>
						{children}
					</main>
					<footer className={styles.footer}>
						Footer
					</footer>
				</Providers>
			</body>
		</html>
	)
}
