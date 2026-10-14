type ProfileCardProps = {
  title: string;
  value: string;
};

export default function ProfileCard({ title, value }: ProfileCardProps) {
  return (
    <div className="border border-slate-700 bg-slate-800 px-6 py-3 text-center">
      <p className="text-lg font-semibold">{title}</p>
      <p className="mt-1 text-slate-300">{value}</p>
    </div>
  );
}
