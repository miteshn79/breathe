import MoodButton from '@/components/MoodButton';
import { exercises } from '@/data/exercises';

export default function Home() {
  const moods = Object.entries(exercises).map(([slug, data]) => ({
    slug,
    label: `Feeling ${slug}`
  }));

  return (
    <main className="flex min-h-screen flex-col items-center p-6">
      <h1 className="text-3xl font-semibold mb-4">How are you feeling?</h1>

      <p className="mb-6 text-sm text-gray-600">
        This site collects <strong>zero analytics</strong>. Your selections never leave your browser.
      </p>

      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2">
        {moods.map((m) => (
          <MoodButton key={m.slug} slug={m.slug} label={m.label} />
        ))}
      </div>
    </main>
  );
}
