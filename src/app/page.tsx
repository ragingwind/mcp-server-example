import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
	return (
		<div className={styles.page}>
			<div className={styles.hero}>
				<h1>Example Domain</h1>
				This domain is for use in illustrative examples in documents. You may
				use this domain in literature without prior coordination or asking for
				permission.
			</div>
		</div>
	);
}
