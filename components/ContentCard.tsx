import Link from "next/link";
import Image from "next/image";

type ContentCardProps = {
  title: string;
  description: string;
  imageSrc: string;
  href: string;
};

export default function ContentCard({
  title,
  description,
  imageSrc,
  href,
}: ContentCardProps) {
  return (
    <Link
      href={href}
      className="block rounded-[18px] border-[4px] border-[#3d675b] bg-[#f7f9f7] p-4 shadow-[4px_4px_0px_#3d675b]"
    >
      <div className="relative h-40 w-full overflow-hidden rounded-xl border-[2px] border-[#3d675b] bg-white">
        <Image src={imageSrc} alt={title} fill className="object-cover" />
      </div>
      <h3 className="mt-3 text-sm font-bold tracking-[0.2em] text-[#3d675b]">
        {title}
      </h3>
      <p className="mt-2 text-sm text-[#3d675b]">{description}</p>
    </Link>
  );
}
