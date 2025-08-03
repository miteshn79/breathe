// src/app/practice/[symptom]/page.tsx
/**
 * Dynamic Practice Page
 * ---------------------
 * Renders breathing-exercise instructions for any mood (symptom) slug,
 * e.g. /practice/calm or /practice/anxious.
 *
 * The slug is read from the URL, looked up in the `exercises` object,
 * and the corresponding steps + resources are displayed.
 */

import type { PageProps } from 'next';
import { notFound } from 'next/navigation';

import { exercises, SymptomKey } from '@/data/exercises';
import ExerciseStep from '@/components/ExerciseStep';

export default function PracticePage({
  params,
  /* Next.js includes searchParams in PageProps; we ignore it for now */
}: PageProps<{ symptom: string }>) {
  /* Extract the slug from the URL */
  const slug = params.symptom as SymptomKey;

  /* Look up the exercise data */
  const exercise = exercises[slug];

  /* If slug unknown → 404 */
  if (!exercise) return notFound();

  return (
    <main className="flex min-h-screen flex-col items-center p-6">
      {/* Title */}
      <h1 className="text-2xl font-semibold mb-6">{exercise.title}</h1>

      {/* Breathing steps with live timer circles */}
      <section className="space-y-8">
        {exercise.steps.map((step, i) => (
          <ExerciseStep key={i} step={step} />
        ))}
      </section>

      {/* External resources */}
      <h2 className="mt-10 mb-2 text-xl">Learn more</h2>
      <ul className="list-disc list-inside">
        {exercise.resources.map((res, i) => (
          <li key={i}>
            <a
              href={res.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sky-700 underline"
            >
              {res.label}
            </a>
          </li>
        ))}
      </ul>
    </main>
  );
}
