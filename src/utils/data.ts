export interface productsType {
  id: number;
  catagoryId: number;
  title: string;
  link: string;
  thumbnail: string;
  repo: string;
}
interface catagoryIdType {
  id: number;
  name: string;
}
export const catagoriesId: catagoryIdType[] = [
  { id: 1, name: "Next-js" },
  { id: 2, name: "React" },
];
export const products: productsType[] = [
  {
    id: 1,
    catagoryId: 2,
    title: "Twitter Clone",
    link: "#",
    repo: "#",
    thumbnail: "/x.jpg",
  },
  {
    id: 2,
    catagoryId: 2,
    title: "Youtube Clone",
    link: "#",
    repo: "#",
    thumbnail: "/yt.png",
  },
  {
    id: 3,
    catagoryId: 1,
    title: "Animated portfolio",
    link: "#",
    repo: "#",
    thumbnail: "/animated-portfolio.png",
  },

  {
    id: 4,
    catagoryId: 2,
    title: "Panda VPN Ui clone",
    link: "https://editorially.org",
    repo: "#",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/editorially.png",
  },
  {
    id: 5,
    catagoryId: 1,
    title: "Editrix AI",
    link: "https://editrix.ai",
    repo: "#",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/editrix.png",
  },
  {
    id: 6,
    catagoryId: 2,
    title: "Pixel Perfect",
    link: "https://app.pixelperfect.quest",
    repo: "#",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/pixelperfect.png",
  },

  {
    id: 7,
    catagoryId: 2,
    title: "Algochurn",
    link: "https://algochurn.com",
    repo: "#",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/algochurn.png",
  },
];
