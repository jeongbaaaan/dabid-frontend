import React from "react";
import { subtitle } from "@/components/primitives";
import TodayRecommend from "@/components/recommendSection/todayRecommend";
import SeasonRecommend from "@/components/recommendSection/seasonRecommend";
import YoutubeRecommend from "@/components/recommendSection/youtubeRecommend";
import ShortRecommendation from "@/components/recommendSection/shortRecommendation";
const Home = () => {
  return (
    <main className="flex flex-col items-center justify-center">
      <h1 className={subtitle()}>오늘의 경매</h1>
      <TodayRecommend />
      <h1 className={subtitle()}>곧 마감되는 경매</h1>
      <SeasonRecommend />
      <h1 className={subtitle()}>경매 YouTube</h1>
      <YoutubeRecommend />
      <h1 className={subtitle()}>경매 YouTube Shorts</h1>
      <ShortRecommendation />
    </main>
  );
};

export default Home;
