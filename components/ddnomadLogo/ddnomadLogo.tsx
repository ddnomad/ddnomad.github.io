import styles from './ddnomadLogo.module.scss'


export enum LogoStyle {
	Default
}


type Props = {
	logoStyle?: LogoStyle
}


export default function DdnomadLogo(props: Props) {
	let { logoStyle = LogoStyle.Default } = props

	let logoBodyClass = logoStyle === LogoStyle.Default? styles.logoBodyStyleDefault : ''
	let logoShadowClass = logoStyle === LogoStyle.Default? styles.logoShadowStyleDefault : ''

	return (
		<div className={styles.root}>
			<svg className={styles.logo} viewBox="0 0 450 450">
				<path
					className={`${styles.logoShadow} ${logoShadowClass}`}
					// eslint-disable-next-line max-len
					d="M419.241,224.837c0,99.139 -127.702,180.389 -176.548,207.841c-11.626,6.371 -25.715,6.296 -37.273,-0.197c-48.406,-27.868 -174.661,-109.926 -174.661,-207.644c0,-107.276 86.964,-194.241 194.241,-194.241c107.276,0 194.241,86.965 194.241,194.241Z"
				/>
				<path
					className={`${styles.logoBody} ${logoBodyClass}`}
					// eslint-disable-next-line max-len
					d="M42.43,181.71c-5.425,-3.154 -7.959,-9.633 -6.112,-15.631c24.98,-80.462 100.006,-138.902 188.682,-138.902c109.079,0 197.506,88.427 197.506,197.506c-0,100.805 -129.849,183.421 -179.516,211.334c-5.925,3.247 -12.478,4.847 -19.022,4.805c0.178,-0.001 0.356,-0.003 0.534,-0.007l0.497,-142.898c0.015,-4.502 -2.335,-8.681 -6.19,-11.006l-33.477,-20.186c-0.363,-0.227 -0.904,3.357 -3.166,7.577c-1.961,3.658 -5.242,7.805 -9.99,11.415c-9.434,7.171 -32.377,11.164 -44.456,10.566c-58.49,-2.899 -82.049,-53.343 -53.379,-96.016l-31.911,-18.557Zm250.091,23.775c-11.464,11.464 -23.866,34.106 -18.243,57.405c2.108,8.73 9.999,15.07 18.085,17.491c26.79,8.024 50.202,2.067 64.006,-11.048c18.076,-17.176 17.631,-46.217 -0,-63.848c-17.631,-17.631 -46.217,-17.631 -63.848,0Zm-140.855,0c-17.631,-17.631 -46.216,-17.631 -63.847,0c-17.632,17.631 -18.076,46.672 -0,63.848c13.803,13.115 37.215,19.072 64.005,11.048c8.086,-2.421 15.978,-8.761 18.085,-17.491c5.623,-23.299 -6.778,-45.941 -18.243,-57.405Z"
				 />
			</svg>
		</div>
	)
}
