import { notFound } from 'next/navigation';
import ExerciseStep from '@/components/ExerciseStep';
import { exercises, SymptomKey } from '@/data/exercises';

type Props = { params: { symptom: string } };

export default function PracticePage({ params }: Props) {
  const key = params.symptom as SymptomKey;
  const exercise = exercises[key];
  if (!exercise) return notFound();

  return (
    <main className="flex min-h-screen flex-col items-center p-6">
      <h1 className="text-2xl font-semibold mb-6">{exercise.title}</h1>

      <section className="space-y-8">
        {exercise.steps.map((s, i) => (
          <ExerciseStep key={i} step={s} />
        ))}
      </section>

      <h2 className="mt-10 mb-2 text-xl">Learn more</h2>
      <ul className="list-disc list-inside">
        {exercise.resources.map((r, i) => (
          <li key={i}>
            <a href={r.url} target="_blank" rel="noopener noreferrer" className="text-sky-700 underline">
              {r.label}
            </a>
          </li>
        ))}
      </ul>
    </main>
  );
}
