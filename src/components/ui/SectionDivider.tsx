export default function SectionDivider() {
  return (
    <div className="flex items-center justify-center py-8">
      <div className="flex-1 h-px bg-border" />
      <div className="w-3 h-3 bg-foreground rounded-full mx-4" />
      <div className="flex-1 h-px bg-border" />
    </div>
  );
}
