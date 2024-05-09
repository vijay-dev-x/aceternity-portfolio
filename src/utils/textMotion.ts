export const textMotion = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      x: { duration: 1 },
      ease: "linear",
    },
  },
};
// for left right motion in cotact (do it later )------------
// export const staggerContainer = (
//   staggerChilderen: any,
//   delayChildren: any
// ) => ({
//   hidden: {},
//   show: {
//     transition: {
//       staggerChilderen,
//       delayChildren,
//     },
//   },
// });
// const fadeIn = (
//   direction: string,
//   type: string,
//   duration: string,
//   delay: number
// ) => ({
//   hidden: {
//     x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
//     y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
//   },
// });
