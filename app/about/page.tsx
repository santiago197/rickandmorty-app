import styles from '../page.module.css';
import Link from 'next/link';

export default function About() {
	return (
		<main className={styles.main}>
			<div className={styles.description}>
				<p>
					Get started by editing&nbsp;
					<code className={styles.code}>app/page.tsx</code>
				</p>
			</div>

			<div className={styles.center}>
				Ir a <Link href="/">Home</Link>
			</div>
		</main>
	);
}
