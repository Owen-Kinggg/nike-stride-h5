import React, { useMemo, useState } from "react";

const ORANGE = "#ff5a00";

const schools = [
  {
    id: "tsinghua",
    short: "01",
    name: "清华大学",
    role: "中枢示范",
    pressure: "资源最优",
    place: "北京 · 校园环线",
    route: "2.5 km / 7个打卡点",
    line: "经二校门 → 大礼堂 → 荷塘 → 图书馆 → 近春园",
    headline: "把成熟定向经验，转化成可复制工具包",
    desc: "清华作为设计与验证源头，先跑通鞋尖路标、行远护照、女生短视频、QR打卡与故事地图的完整链路，再向附中、附小和乡村试点辐射。",
    gradient: "from-orange-500 via-red-500 to-yellow-400",
    bg: "bg-orange-500",
    videos: [
      { title: "中枢示范｜一条步道如何被设计出来", point: "01 二校门起点", time: "03:58", type: "步道诞生记" },
      { title: "女生共创｜我们把校园路线变成工具包", point: "04 图书馆", time: "04:21", type: "女生共创记" },
    ],
    crafts: ["清华图案旧鞋徽章", "鞋带方向手环", "荷塘路线明信片", "工具包样板吊牌"],
    points: [
      { no: "01", name: "二校门起点", video: "中枢示范｜一条步道如何被设计出来", story: "从起点理解Nike Stride的路线、规则和打卡方式。", qr: "NS-THU-01" },
      { no: "02", name: "大礼堂", video: "清华文化点位讲述", story: "女生讲述校园文化如何变成步道叙事节点。", qr: "NS-THU-02" },
      { no: "03", name: "荷塘", video: "地方文化探索记", story: "用校园景观训练故事采集与镜头表达。", qr: "NS-THU-03" },
      { no: "04", name: "图书馆", video: "女生共创｜我们把校园路线变成工具包", story: "把清华经验沉淀为可复制的学校上手模板。", qr: "NS-THU-04" },
    ],
  },
  {
    id: "weizhou",
    short: "02",
    name: "广西北海涠洲岛西角小学",
    role: "海岛双轨",
    pressure: "中等资源 / 游客支撑",
    place: "广西 · 火山岛",
    route: "3 km学校线 + 2 km游客延伸线",
    line: "西角小学 → 盛塘天主教堂 → 火山地质点 → 五彩滩",
    headline: "学生免费使用，游客护照反哺运营",
    desc: "涠洲岛验证双轨模式：学校线服务女生体育课，游客线承接文旅流量，通过护照、打卡和商户联动反哺步道维护。",
    gradient: "from-orange-500 via-amber-500 to-stone-300",
    bg: "bg-amber-500",
    videos: [
      { title: "海岛双轨｜我们的步道也给游客讲故事", point: "01 盛塘天主教堂", time: "04:05", type: "地方风物型" },
      { title: "火山岛旧鞋再生｜黑色岩石和奔跑的女孩", point: "04 火山地质点", time: "03:46", type: "环保公益型" },
    ],
    crafts: ["火山岩纹步道徽章", "旧鞋底压纹挂件", "海岛双语护照", "五彩滩鞋带吊饰"],
    points: [
      { no: "01", name: "盛塘天主教堂", video: "海岛双轨｜我们的步道也给游客讲故事", story: "女生从学校线出发，介绍海岛文化与游客延伸线。", qr: "NS-WZ-01" },
      { no: "02", name: "海风村道", video: "海岛路线测试记", story: "记录学生线与游客线如何分流，避免互相干扰。", qr: "NS-WZ-02" },
      { no: "03", name: "火山土农业点", video: "岛屿教育短片", story: "把火山土、农作物和生态教育做成步道故事。", qr: "NS-WZ-03" },
      { no: "04", name: "火山地质点", video: "火山岛旧鞋再生｜黑色岩石和奔跑的女孩", story: "旧鞋材料与火山岩肌理结合，展示环保文创。", qr: "NS-WZ-04" },
    ],
  },
  {
    id: "jishou",
    short: "03",
    name: "湖南湘西吉首市民族中学",
    role: "山区极端案例",
    pressure: "资源最缺",
    place: "湖南湘西 · 山区民族中学",
    route: "2 km校内主步道 + 3 km校外拓展段",
    line: "操场 → 废弃花坛 → 树下急救角 → 半山腰平台 → 学校后门",
    headline: "如果吉首跑得起来，就能在更多农村学校复制",
    desc: "吉首验证最困难条件下的去专业化运营：没有女体育老师、体育时间被压缩、学校依山而建。女生步道小组用学生自主定线和轻量维护机制，把地形劣势变成运动资源。",
    gradient: "from-orange-600 via-red-600 to-fuchsia-500",
    bg: "bg-red-600",
    videos: [
      { title: "山区极端案例｜出校门就是未被看见的步道", point: "03 半山腰平台", time: "04:33", type: "人物故事型" },
      { title: "民族文化展板｜把苗绣纹样放进路线", point: "04 学校后门", time: "03:52", type: "地方文化型" },
    ],
    crafts: ["苗绣纹旧鞋徽章", "山路反光鞋带", "堆肥花园钥匙扣", "民族文化路线卡"],
    points: [
      { no: "01", name: "操场起点", video: "山区极端案例｜出校门就是未被看见的步道", story: "女生第一次说明为什么这条路需要被设计出来。", qr: "NS-JS-01" },
      { no: "02", name: "废弃花坛", video: "堆肥花园教育短片", story: "把校园闲置角落变成可持续教育点位。", qr: "NS-JS-02" },
      { no: "03", name: "树下急救角", video: "急救技能挑战", story: "在运动挑战中学习CPR、止血和结伴规则。", qr: "NS-JS-03" },
      { no: "04", name: "民族文化展板", video: "民族文化展板｜把苗绣纹样放进路线", story: "女生讲述民族文化如何成为步道视觉系统。", qr: "NS-JS-04" },
    ],
  },
];

function QR({ code = "NS-QR" }) {
  const filled = new Set([0, 1, 2, 3, 6, 12, 18, 24, 30, 31, 32, 33, 35, 41, 47, 48, 49, 50, 7, 14, 21, 28, 45, 39, 16, 22, 27]);
  return (
    <div className="relative h-24 w-24 shrink-0 rounded-2xl bg-white p-2 shadow-[0_0_30px_rgba(255,90,0,.45)]">
      <div className="grid h-full w-full grid-cols-7 grid-rows-7 gap-1">
        {Array.from({ length: 49 }).map((_, i) => (
          <div key={i} className={`rounded-[2px] ${filled.has(i) ? "bg-neutral-950" : "bg-neutral-200"}`} />
        ))}
      </div>
      <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-orange-500 px-2 py-0.5 text-[9px] font-black text-black">{code}</div>
    </div>
  );
}

function SectionTitle({ kicker, title, right }) {
  return (
    <div className="mb-4 flex items-end justify-between gap-4">
      <div>
        <div className="text-[11px] font-black uppercase tracking-[0.25em] text-orange-500">{kicker}</div>
        <h2 className="mt-1 text-2xl font-black tracking-tight text-white">{title}</h2>
      </div>
      {right}
    </div>
  );
}

function Stat({ value, label }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-3">
      <div className="text-2xl font-black text-orange-500">{value}</div>
      <div className="mt-1 text-[11px] text-white/50">{label}</div>
    </div>
  );
}

export default function NikeStrideH5() {
  const [activeId, setActiveId] = useState("tsinghua");
  const [selectedPoint, setSelectedPoint] = useState(null);
  const active = useMemo(() => schools.find((s) => s.id === activeId) || schools[0], [activeId]);
  const point = selectedPoint || active.points[0];

  function switchSchool(id) {
    const next = schools.find((s) => s.id === id);
    setActiveId(id);
    setSelectedPoint(next?.points?.[0] || null);
  }

  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-orange-500 selection:text-black">
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute left-[-20%] top-[-10%] h-80 w-80 rounded-full bg-orange-600/25 blur-3xl" />
        <div className="absolute right-[-15%] top-[20%] h-96 w-96 rounded-full bg-red-600/20 blur-3xl" />
        <div className="absolute bottom-[-10%] left-[20%] h-80 w-80 rounded-full bg-orange-400/10 blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(115deg,transparent_0%,transparent_45%,rgba(255,90,0,.08)_45%,rgba(255,90,0,.08)_47%,transparent_47%)]" />
      </div>

      <main className="relative mx-auto max-w-md pb-16">
        <section className="px-5 pb-8 pt-7">
          <div className="mb-6 flex items-center justify-between">
            <div className="rounded-full border border-orange-500/50 bg-orange-500/10 px-3 py-1 text-[11px] font-black uppercase tracking-[0.22em] text-orange-500">Nike Stride</div>
            <div className="text-xs font-bold text-white/50">H5 PROTOTYPE</div>
          </div>

          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-5 shadow-2xl">
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-orange-500/30 blur-2xl" />
            <div className="relative">
              <div className="mb-3 text-[12px] font-bold text-white/55">让旧鞋继续奔跑 · 让女孩找到自己的方向</div>
              <h1 className="text-5xl font-black leading-[0.92] tracking-[-0.05em]">
                RUN THE<br />STORY
                <span className="block text-orange-500">FORWARD</span>
              </h1>
              <p className="mt-5 max-w-[320px] text-sm leading-6 text-white/70">聚合三校试点产出的女生短视频、旧鞋文创展示和故事地图；每个物理打卡点通过QR码跳转到对应女生短视频，把线下步道和线上内容直接打通。</p>
              <div className="mt-6 grid grid-cols-3 gap-2">
                <Stat value="3" label="所试点学校" />
                <Stat value="6+" label="女生短视频" />
                <Stat value="18+" label="故事点位" />
              </div>
            </div>
          </div>
        </section>

        <section className="px-5">
          <SectionTitle kicker="Pressure Test" title="三校压力测试" />
          <div className="grid grid-cols-3 gap-2">
            {schools.map((s) => (
              <button
                key={s.id}
                onClick={() => switchSchool(s.id)}
                className={`relative overflow-hidden rounded-3xl border p-3 text-left transition ${activeId === s.id ? "border-orange-500 bg-orange-500 text-black shadow-[0_0_28px_rgba(255,90,0,.35)]" : "border-white/10 bg-white/[0.06] text-white"}`}
              >
                <div className="text-[10px] font-black opacity-70">{s.short}</div>
                <div className="mt-2 text-sm font-black leading-4">{s.name}</div>
                <div className={`mt-3 rounded-full px-2 py-1 text-[10px] font-black ${activeId === s.id ? "bg-black text-orange-500" : "bg-orange-500/15 text-orange-500"}`}>{s.role}</div>
              </button>
            ))}
          </div>
        </section>

        <section className="mt-6 px-5">
          <div className={`relative overflow-hidden rounded-[2rem] bg-gradient-to-br ${active.gradient} p-[1px]`}>
            <div className="rounded-[2rem] bg-[#080808]/95 p-5">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="text-[11px] font-black uppercase tracking-[0.2em] text-orange-500">{active.pressure}</div>
                  <h2 className="mt-2 text-3xl font-black leading-tight">{active.role}</h2>
                  <p className="mt-1 text-sm font-bold text-white/60">{active.name}</p>
                </div>
                <div className="rounded-2xl border border-orange-500/40 bg-orange-500/10 px-3 py-2 text-right">
                  <div className="text-lg font-black text-orange-500">{active.route.split("/")[0]}</div>
                  <div className="text-[10px] text-white/50">路线规模</div>
                </div>
              </div>
              <div className="mt-5 rounded-2xl border border-white/10 bg-white/[0.05] p-4">
                <div className="text-xl font-black">{active.headline}</div>
                <p className="mt-3 text-sm leading-6 text-white/65">{active.desc}</p>
                <div className="mt-4 rounded-xl bg-black/60 p-3 text-xs leading-5 text-white/60">
                  <b className="text-orange-500">路线：</b>{active.line}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-9 px-5">
          <SectionTitle kicker="Girls Video" title="女生短视频聚合" right={<div className="text-2xl">▶</div>} />
          <div className="space-y-3">
            {active.videos.map((v, idx) => (
              <div key={v.title} className="group rounded-3xl border border-white/10 bg-white/[0.06] p-4 transition hover:border-orange-500/60">
                <div className="flex gap-4">
                  <div className={`flex h-20 w-20 shrink-0 items-center justify-center rounded-3xl bg-gradient-to-br ${active.gradient} text-3xl font-black text-black shadow-[0_0_24px_rgba(255,90,0,.25)]`}>▶</div>
                  <div className="min-w-0 flex-1">
                    <div className="mb-2 inline-flex rounded-full bg-orange-500/15 px-2 py-1 text-[10px] font-black text-orange-500">{v.type}</div>
                    <h3 className="text-base font-black leading-5">{v.title}</h3>
                    <div className="mt-3 text-xs text-white/45">{v.point} · {v.time}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-9 px-5">
          <SectionTitle kicker="Craft Gallery" title="旧鞋文创展示" right={<div className="text-2xl">✦</div>} />
          <div className="grid grid-cols-2 gap-3">
            {active.crafts.map((item, idx) => (
              <div key={item} className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.06] p-4">
                <div className="absolute right-[-24px] top-[-24px] h-20 w-20 rounded-full bg-orange-500/20 blur-xl" />
                <div className={`mb-4 flex h-24 items-center justify-center rounded-3xl bg-gradient-to-br ${active.gradient} text-4xl font-black text-black`}>{idx + 1}</div>
                <h3 className="text-sm font-black leading-5">{item}</h3>
                <p className="mt-2 text-[11px] leading-5 text-white/50">旧鞋材料再生，结合本地文化，可用于学生自留、展陈或义卖反哺维护。</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-9 px-5">
          <SectionTitle kicker="Story Map" title="故事地图 + QR点位" right={<div className="text-2xl">⌖</div>} />
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.05] p-4">
            <div className="mb-4 rounded-2xl bg-black p-4">
              <div className="mb-2 flex items-center justify-between text-xs text-white/50">
                <span>{active.place}</span>
                <span>{active.route}</span>
              </div>
              <div className="relative h-24 overflow-hidden rounded-2xl bg-[radial-gradient(circle_at_20%_30%,rgba(255,90,0,.45),transparent_25%),radial-gradient(circle_at_80%_60%,rgba(255,255,255,.14),transparent_20%),linear-gradient(135deg,#111,#050505)]">
                <div className="absolute left-5 right-5 top-1/2 h-[3px] -translate-y-1/2 bg-gradient-to-r from-orange-500 via-white to-orange-500" />
                {active.points.map((p, i) => (
                  <button
                    key={p.no}
                    onClick={() => setSelectedPoint(p)}
                    style={{ left: `${10 + i * 26}%` }}
                    className={`absolute top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border-2 text-xs font-black transition ${point.qr === p.qr ? "border-orange-500 bg-orange-500 text-black scale-110" : "border-white bg-black text-white"}`}
                  >{p.no}</button>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              {active.points.map((p) => (
                <button
                  key={p.qr}
                  onClick={() => setSelectedPoint(p)}
                  className={`w-full rounded-2xl border p-3 text-left transition ${point.qr === p.qr ? "border-orange-500 bg-orange-500/10" : "border-white/10 bg-white/[0.04]"}`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full font-black ${point.qr === p.qr ? "bg-orange-500 text-black" : "bg-white/10 text-white"}`}>{p.no}</div>
                    <div className="min-w-0 flex-1">
                      <div className="font-black">{p.name}</div>
                      <div className="mt-1 truncate text-xs text-white/45">扫码看：{p.video}</div>
                    </div>
                    <div className="text-orange-500">›</div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-9 px-5">
          <SectionTitle kicker="QR Example" title="物理步道嵌入示例" />
          <div className="rounded-[2rem] border border-orange-500/30 bg-[linear-gradient(145deg,rgba(255,90,0,.16),rgba(255,255,255,.04))] p-5 shadow-[0_0_34px_rgba(255,90,0,.18)]">
            <div className="flex gap-5">
              <QR code={point.qr} />
              <div className="min-w-0 flex-1">
                <div className="text-[11px] font-black uppercase tracking-[0.22em] text-orange-500">Trace Plate</div>
                <h3 className="mt-1 text-xl font-black leading-6">{point.name} 溯源牌</h3>
                <p className="mt-3 text-sm leading-6 text-white/65">溯源牌下方放置二维码。学生、家长或游客扫码后，直接进入该点位的H5详情页，置顶播放对应女生短视频。</p>
              </div>
            </div>

            <div className="mt-5 rounded-3xl bg-black/70 p-4">
              <div className="mb-3 text-sm font-black text-orange-500">扫码后跳转内容</div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-500 text-xl font-black text-black">▶</div>
                  <div className="min-w-0 flex-1">
                    <div className="truncate text-sm font-black">{point.video}</div>
                    <div className="mt-1 text-xs text-white/45">来自：{active.name} · {point.name}</div>
                  </div>
                </div>
                <p className="mt-4 text-xs leading-5 text-white/55">{point.story}</p>
              </div>
            </div>

            <div className="mt-5 grid grid-cols-4 gap-2 text-center text-[10px] font-black">
              <div className="rounded-2xl bg-orange-500 p-3 text-black">线下打卡</div>
              <div className="rounded-2xl bg-white/10 p-3 text-white">扫码进入</div>
              <div className="rounded-2xl bg-white/10 p-3 text-white">观看短片</div>
              <div className="rounded-2xl bg-white/10 p-3 text-white">分享传播</div>
            </div>
          </div>
        </section>

        <section className="mt-9 px-5">
          <div className="rounded-[2rem] bg-orange-500 p-5 text-black">
            <div className="text-[11px] font-black uppercase tracking-[0.25em]">Online × Offline</div>
            <h2 className="mt-2 text-3xl font-black leading-tight">每个点位，都是一个可传播的故事入口。</h2>
            <p className="mt-4 text-sm font-bold leading-6 text-black/70">H5不是单纯展示页，而是三校试点的内容资产中枢：短视频负责讲述，文创负责展陈，故事地图负责导航，QR码负责把真实步道上的每一步转化成一次线上触达。</p>
          </div>
        </section>
      </main>
    </div>
  );
}
