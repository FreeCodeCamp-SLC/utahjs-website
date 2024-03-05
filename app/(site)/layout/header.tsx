'use client';

import Link from 'next/link';
import Image from 'next/image';
import { getHeaderData, getPrimaryMenuData } from '@/utils/sanityFetch-utils';
import { getImageDimensions } from '@/utils/helperFunctions';

export default async function Header() {
	const headerData = await getHeaderData();
	const primaryMenuData = await getPrimaryMenuData();
	const headerLogo = headerData.logo;
	const headerLogoDimensions = getImageDimensions(headerLogo.url);

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
							<Image
								src={headerLogo.url}
								alt={headerLogo.alt}
								width={headerLogoDimensions.width}
								height={headerLogoDimensions.height}
							/>
						</Link>
						<Link href="/">
							<p>{headerData.title}</p>
						</Link>
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
