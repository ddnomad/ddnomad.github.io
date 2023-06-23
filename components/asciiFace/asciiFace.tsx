import styles from './asciiFace.module.scss'


export const ASCII_FACES: { [key: string]: string } = {
	alert: '!_!',
	big_look: '0-0',
	blink_all: '=_=',
	blink_left: '=_0',
	blink_right: '0_=',
	confusion_left: '0_o',
	confusion_right: 'o_0',
	cuter_nyan: '^-^',
	fruit_fly_left: '0.o',
	fruit_fly_right: 'o.0',
	lashes: '~_~',
	look: '0_0',
	meh: '¬_¬',
	nyan: '^_^',
	sleep: '-_-',
	shriek: '>_<',
	smol: '._.',
	stare_left: '<_<',
	stare_right: '>_>',
	why: '?_?',
	wink_left: '>_0',
	wink_right: '0_<'
}


type Props = {
	name: string
}


export default function AsciiFace(props: Props) {
	if (!(props.name in ASCII_FACES)) {
		throw new Error(`Unsupported ASCII face name: ${props.name}`)
	}

	let asciiFace = ASCII_FACES[props.name]

	return (
		<div className={styles.root}>
			{asciiFace}
		</div>
	)
}
