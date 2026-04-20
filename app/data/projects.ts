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
