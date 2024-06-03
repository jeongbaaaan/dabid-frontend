export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "DA:Bid",
  description: "6조 최종 프로젝트",
  navItems: [
    {
      label: "경매",
      href: "/bidding",
    },
    {
      label: "마이페이지",
      href: "/mypage",
    },
  ],
  navMenuItems: [
    {
      label: "경매",
      href: "/bidding",
    },
    {
      label: "마이페이지",
      href: "/mypage",
    },
  ],
  links: {
    github: "https://github.com/nextui-org/nextui",
    twitter: "https://twitter.com/getnextui",
    docs: "https://nextui.org",
    discord: "https://discord.gg/9b6yyZKmH4",
    sponsor: "https://patreon.com/jrgarciadev",
  },
};
