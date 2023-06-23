import styles from './page.module.scss'

import AsciiFace from '@/components/asciiFace/asciiFace'


export default function Page() {
	return (
		<div className={styles.main}>
			<AsciiFace name="look" />
		</div>
	)
}
