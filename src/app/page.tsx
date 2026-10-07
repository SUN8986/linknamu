import LinkList, { type LinkItem } from "@/components/LinkList";
import ProfileHeader from "@/components/ProfileHeader";

const profile = {
  name: "PiGCHO_o",
  bio: "게으른 완벽주의자 | 요즘에는 AI코딩에 관심이 많아요",
  imageUrl: "/profile.jpg",
};

const links: LinkItem[] = [
  { id: "blog", title: "✍️ 블로그", url: "https://blog.naver.com/pigcho_o" },
  { id: "instagram", title: "📸 인스타그램", url: "https://www.instagram.com/pigcho_o/" },
  { id: "github", title: "🐙 깃허브", url: "https://github.com/sun8986" },
];

export default function Home() {
  return (
    <main className="mx-auto flex w-full max-w-md flex-1 flex-col items-center gap-10 px-6 py-16 sm:py-24">
      <ProfileHeader
        name={profile.name}
        bio={profile.bio}
        imageUrl={profile.imageUrl}
      />
      <LinkList links={links} />
    </main>
  );
}
