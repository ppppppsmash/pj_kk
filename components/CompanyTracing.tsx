"use client";

import React from "react";
import Image from "next/image";
import { TracingBeam } from "./ui/tracing-beam";

export function CompanyTracing() {
  return (
    <TracingBeam className="px-6">
      <div className="max-w-2xl mx-auto antialiased pt-4 relative">
        {dummyContent.map((item, index) => (
          <div key={`content-${index}`} className="mb-10">
            <h2 className="bg-black text-white rounded-full text-sm w-fit px-4 py-1 mb-4">
              {item.badge}
            </h2>

            <p className="text-xl mb-4">
              {item.title}
            </p>

            <div className="text-sm  prose prose-sm dark:prose-invert">
              {item?.image && (
                <Image
                  src={item.image}
                  alt="blog thumbnail"
                  height="1000"
                  width="1000"
                  className="rounded-lg mb-10 object-cover"
                />
              )}
              {item.description}
            </div>
          </div>
        ))}
      </div>
    </TracingBeam>
  );
}

const dummyContent = [
  {
    title: "2012年（平成24年）",
    description: (
      <>
        <p>
          恒佳株式会社が発足。​
        </p>
      </>
    ),
    badge: "起業",
  },
  {
    title: "2015年",
    description: (
      <>
        <p>
          東洋新薬株式会社と提携し、「金の青汁」シリーズ製品の販売を開始。​
        </p>
      </>
    ),
    badge: "",
  },
  {
    title: "2016年",
    description: (
      <>
        <p>
          インフィニティ株式会社と提携し、「230酵素」などの健康食品や健康補助食品を販売。
        </p>
      </>
    ),
    badge: "",
  },
  {
    title: "2017年",
    description: (
      <>
        <p>
          百年の漢方薬メーカーである建林松鹤堂の漢方薬シリーズを販売し、数多くの漢方薬イベントを主催しました。また、日中展示会にも多数出展。
        </p>
      </>
    ),
    badge: "",
  },
  {
    title: "2020年",
    description: (
      <>
        <p>
        建林松鶴堂の正規特約店に認定されました。​
        </p>
      </>
    ),
    badge: "",
  },
  {
    title: "2021年",
    description: (
      <>
        <p>
        伊段シリーズ製品は、日本の専門チームにより開発され、GMP & ISO22000食品安全管理認証を取得した百年の工場で生産されています。
        </p>
      </>
    ),
    badge: "「伊段（いだん）」ブランドの創設",
  },
  {
    title: "2023年",
    description: (
      <>
        <p>
          伊段バターコーヒースリムが「第6回アジア金星大賞商品部門」で金賞を受賞。
        </p>
        <p>
          恒佳株式会社が日本美容企業大賞を受賞しました。​
        </p>
      </>
    ),
    badge: "アジア金星大賞",
  },
  {
    title: "2022年～2024年",
    description: (
      <>
        <p>
          連続3年間、伊段バターコーヒーが「国際モンドセレクション」で連続受賞。
        </p>
      </>
    ),
    badge: "モンドセレクション賞",
  },
];
