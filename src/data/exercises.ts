// All breathing-exercise content lives here.
// Add new moods by appending another key–value pair.
export const exercises = {
  calm: {
    title: 'Box Breathing',
    steps: [
      { text: 'Inhale',  seconds: 4 },
      { text: 'Hold',    seconds: 4 },
      { text: 'Exhale',  seconds: 4 },
      { text: 'Hold',    seconds: 4 }
    ],
    resources: [
      { label: 'Navy SEAL guide', url: 'https://youtu.be/0BNejY1e9ik' },
      { label: 'Research article', url: 'https://pubmed.ncbi.nlm.nih.gov/33267922/' }
    ]
  },
  anxious: {
    title: '4-7-8 Breathing',
    steps: [
      { text: 'Inhale', seconds: 4 },
      { text: 'Hold',   seconds: 7 },
      { text: 'Exhale', seconds: 8 }
    ],
    resources: [
      { label: 'Dr Weil demonstration', url: 'https://youtu.be/yrmUNF5Y138' }
    ]
  }
} as const;
export type SymptomKey = keyof typeof exercises;
