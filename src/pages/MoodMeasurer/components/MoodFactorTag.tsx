interface MoodFactorTagProps {
  tag: string;
}

const MoodFactorTag = ({ tag }: MoodFactorTagProps) => {
  return (
    <div
      className={`text-primary-dark rounded-2xl bg-[#9234EA] px-5 py-1 text-xs font-semibold`}
    >
      {tag}
    </div>
  );
};

export default MoodFactorTag;
