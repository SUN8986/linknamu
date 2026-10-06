import LinkList, { type LinkItem } from "@/components/LinkList";
import ProfileHeader from "@/components/ProfileHeader";

// TODO: 보여주기용 더미 값입니다. 실제 내용으로 교체하세요.
const profile = {
  name: "초돼지",
  bio: "게으른 완벽주의자",
  imageUrl: "/profile.svg",
};

const links: LinkItem[] = [
  { id: "github", title: "GitHub", url: "https://github.com/" },
  { id: "linkedin", title: "LinkedIn", url: "https://www.linkedin.com/" },
  { id: "blog", title: "Blog", url: "https://example.com/" },
];

export default function Home() {
  return (
    <main className="mx-auto flex w-full max-w-md flex-1 flex-col items-center gap-8 px-4 py-12">
      <ProfileHeader
        name={profile.name}
        bio={profile.bio}
        imageUrl={profile.imageUrl}
      />
      <LinkList links={links} />
    </main>
  );
}
