export type Project = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  url: string;
  repo?: string;
  tags: string[];
  year: string;
};

export const projects: Project[] = [
  {
    slug: "chatbase-ops",
    name: "Chatbase Ops",
    tagline: "ナレッジ運用で育てる B2B カスタマーサポート AI",
    description:
      "公開ナレッジ・用語辞書・スコープポリシーを束ね、一次対応を AI に任せる SaaS。スクリプトタグ 1 行で導入でき、会話ログから不足知識を可視化して継続改善できる。",
    url: "https://chatbase-ops.vercel.app",
    tags: ["Next.js", "SaaS", "LLM"],
    year: "2026",
  },
  {
    slug: "ai-banso-lab",
    name: "AI 伴走ラボ",
    tagline: "中小企業・個人事業主向け AI 活用伴走サービスの LP",
    description:
      "ChatGPT / Claude Code を使って営業・資料作成・業務改善を成果に変える月次伴走プログラムの紹介サイト。業務分解→試行→改善のサイクルを軸にした構成。",
    url: "https://ai-blog-silk-alpha.vercel.app",
    tags: ["Next.js", "LP", "AI"],
    year: "2026",
  },
  {
    slug: "profile-icon-generator",
    name: "プロフィールアイコンジェネレーター",
    tagline: "テキストプロンプトから AI でプロフィールアイコンを生成",
    description:
      "ポップアート / サイバーパンク / 和風など多彩なスタイルのプリセットと、自由なプロンプト入力に対応。SNS 用のアイコンを数秒で作れる。",
    url: "https://profile-icon-generator.maker-ly.com",
    // repo: "https://github.com/ryofuu/xxxxx",
    tags: ["Next.js", "AI", "Image Gen"],
    year: "2025",
  },
  {
    slug: "3d-botanical-garden",
    name: "3D 植物園",
    tagline: "React Three Fiber で作った花の標本",
    description:
      "ブラウザ上で花を 3D 標本として観察できるインタラクティブ作品。WebGL の表現力と植物のディテールの両立を試した実験。",
    url: "https://3d-tree-plum.vercel.app",
    repo: "https://github.com/ryofuu/3d-tree",
    tags: ["Next.js", "R3F", "WebGL"],
    year: "2025",
  },
];
