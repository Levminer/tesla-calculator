import Head from "next/head"
import Link from "next/link"

const index = () => {
	return (
		<>
			<Head>
				<link rel="stylesheet" href="https://cdn.levminer.com/css/dragonfly/dragonfly@1.4.0.min.css" />
			</Head>
			<div className="center">
				<h1>Tesla Calculator</h1>
				<Link href="/en">
					<a className="button1">English</a>
				</Link>
			</div>
		</>
	)
}

export default index
