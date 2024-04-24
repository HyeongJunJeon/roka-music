export default function CategoryTab({ label }: { label: string }) {
  return (
    <button className="bg-secondary w-fit py-1 px-3 rounded-lg hover:opacity-80">
      <p className="cursor-pointer">{label}</p>
    </button>
  );
}
