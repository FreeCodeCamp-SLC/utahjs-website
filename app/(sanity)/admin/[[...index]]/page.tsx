// This page lets us run sanity studio at /admin
'use client';

import config from '@/sanity.config';
import { NextStudio } from 'next-sanity/studio';

export default function AdminPage() {
	return <NextStudio config={config} />;
}
