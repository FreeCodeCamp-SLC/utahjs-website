'use client';

import Link from 'next/link';
import Image from 'next/image';
import { getPrimaryMenuData } from '@/utils/sanityFetch-utils';

export default async function Header() {
	const primaryMenuData = await getPrimaryMenuData();

	const headerLogo = primaryMenuData.headerLogo;
	const match = headerLogo.url.match(/-(\d+)x(\d+)\./);

	let logoWidth = 0;
	let logoHeight = 0;
	if (match) {
		logoWidth = Number(match[1]);
		logoHeight = Number(match[2]);
	}

	function handleHamburgerClick() {
		const body = document.querySelector('body');
		body?.classList.toggle('nav-active');
	}

	function handleNavLinkClick() {
		const body = document.querySelector('body');
		body?.classList.remove('nav-active');
	}

	return (
		<header className="header">
			<div className="title-row">
				<div className="container">
					<div className="brand-container">
						<Link href="/">
							<Image src={headerLogo.url} alt={headerLogo.alt} width={logoWidth} height={logoHeight} />
						</Link>
						<h1>{primaryMenuData.headerTitle}</h1>
					</div>
					<button onClick={handleHamburgerClick}>
						<div className="bar"></div>
						<div className="bar"></div>
						<div className="bar"></div>
					</button>
				</div>
			</div>
			<nav>
				<ul className="top-nav">
					{primaryMenuData.links.map((item) => (
						<li className={item.nestedLinks ? 'parent-link' : ''} key={item._key}>
							<Link target={item.openInNewTab ? '_blank' : ''} href={item.slug} onClick={handleNavLinkClick}>
								{item.title}
							</Link>
							{item.nestedLinks && (
								<ul className={`dropdown`}>
									{item.nestedLinks.map((nestedItem) => (
										<li className="nested-link" key={nestedItem._key}>
											<Link
												target={nestedItem.openInNewTab ? '_blank' : ''}
												href={nestedItem.slug}
												onClick={handleNavLinkClick}
											>
												{nestedItem.title}
											</Link>
										</li>
									))}
								</ul>
							)}
						</li>
					))}
				</ul>
			</nav>
		</header>
	);
}
