export default function SectionDivider() {
  return (
    <div className="max-w-[1440px] mx-auto px-5">
      <div className="flex items-center">
        <div className="flex-1 h-[2px] bg-dark-card" />
        <div className="w-[30px] h-[30px] md:w-[50px] md:h-[50px] bg-foreground rounded-full" />
        <div className="flex-1 h-[2px] bg-dark-card" />
      </div>
    </div>
  );
}
