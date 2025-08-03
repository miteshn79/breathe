'use client';
import { useEffect, useState } from 'react';

type Step = { text: string; seconds: number };

export default function ExerciseStep({ step }: { step: Step }) {
  const [count, setCount] = useState(step.seconds);

  useEffect(() => {
    const id = setInterval(() => {
      setCount((c) => (c === 1 ? step.seconds : c - 1));
    }, 1_000);
    return () => clearInterval(id);
  }, [step.seconds]);

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="h-32 w-32 rounded-full border-4 border-sky-600 flex items-center justify-center text-2xl">
        {count}
      </div>
      <p className="mt-2 text-lg">{step.text}</p>
    </div>
  );
}
