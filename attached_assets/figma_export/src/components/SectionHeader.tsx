interface SectionHeaderProps {
  title: string;
  score?: string;
}

export function SectionHeader({ title, score }: SectionHeaderProps) {
  return (
    <div className="bg-black text-white px-8 py-6 -mx-8 mb-8 flex items-center justify-between">
      <h2>{title}</h2>
      {score && <span className="text-xl">{score}</span>}
    </div>
  );
}
