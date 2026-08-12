type SectionLabelProps = {
  number: string;
  children: React.ReactNode;
};

export default function SectionLabel({
  number,
  children,
}: SectionLabelProps) {
  return (
    <div
      className="
        flex items-center gap-4
        text-sm font-semibold
        uppercase
        tracking-[0.16em]
        text-[#5A7C99]
      "
    >
      <span
        className="
          font-mono
          text-xs
          font-medium
          text-[#00B8E6]
        "
      >
        /{number}
      </span>

      <span>{children}</span>
    </div>
  );
}