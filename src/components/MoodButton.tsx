'use client';
import Link from 'next/link';

type Props = { slug: string; label: string };

export default function MoodButton({ slug, label }: Props) {
  return (
    <Link
      href={`/practice/${slug}`}
      className="rounded bg-sky-600 hover:bg-sky-700 px-4 py-3 text-white text-center"
    >
      {label}
    </Link>
  );
}
