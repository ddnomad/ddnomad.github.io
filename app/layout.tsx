import { faAngleDown, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './globals.scss'
import styles from './layout.module.scss'

import DdnomadLogo, { LogoStyle } from '@/components/ddnomadLogo/ddnomadLogo'
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
							<div className={styles.headerContentLogo}>
								<DdnomadLogo logoStyle={LogoStyle.Default} />
								<div className={styles.headerContentLogoBreak}>::</div>
								<div className={styles.headerContentLogoText}>ddnomad</div>
							</div>
							<div className={styles.headerContentNavigation}>
								<span className={styles.headerContentNavigationMenuText}>Menu</span>
								<FontAwesomeIcon className={styles.headerContentNavigationAngleDown} icon={faAngleDown} />
							</div>
							<div className={styles.headerContentSearch}>
								<FontAwesomeIcon className={styles.headerContentSearchIcon} icon={faMagnifyingGlass} />
							</div>
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
