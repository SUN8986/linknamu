import LinkCard from "@/components/LinkCard";

export type LinkItem = {
  id: string;
  title: string;
  url: string;
};

type LinkListProps = {
  links: LinkItem[];
};

export default function LinkList({ links }: LinkListProps) {
  return (
    <ul className="flex w-full flex-col gap-4">
      {links.map((link) => (
        <li key={link.id}>
          <LinkCard title={link.title} url={link.url} />
        </li>
      ))}
    </ul>
  );
}
