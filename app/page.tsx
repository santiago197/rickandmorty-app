import styles from './page.module.css';
import Link from 'next/link';

export default function Home() {
	return (
		<main className={styles.main}>
			<div className={styles.description}>
				<p>
					Get started by editing&nbsp;
					<code className={styles.code}>app/page.tsx</code>
				</p>
			</div>

			<div className={styles.center}>
				<h1>
					Ir a <Link href="/about">About</Link>
				</h1>
				Ir a <Link href="/about">About</Link>
			</div>
		</main>
	);
}
