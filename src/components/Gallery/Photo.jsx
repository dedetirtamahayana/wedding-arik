const breakpoints = [1080, 640, 384, 256, 128, 96, 64, 48];

function assetLink(asset, width) {
  return `/images/${asset}?w=${width}&q=100`;
}

const photos = [
  { asset: "prewed (1).jpg", width: 1080, height: 720 },
  { asset: "prewed (2).jpg", width: 1080, height: 1620 },
  { asset: "prewed (3).jpg", width: 1080, height: 720 },
  { asset: "prewed (13).jpg", width: 1080, height: 720 },
  { asset: "prewed (7).jpg", width: 1080, height: 1620 },
  { asset: "prewed (12).jpg", width: 1080, height: 720 },
  { asset: "prewed (11).png", width: 1080, height: 720 },
  { asset: "prewed (5).jpg", width: 1080, height: 1620 },
  { asset: "prewed (4).jpg", width: 1080, height: 1620 },
  { asset: "prewed (8).jpg", width: 1080, height: 720 },

  // { asset: "prewed (9).jpg", width: 1080, height: 1549 },
  // { asset: "prewed (6).jpg", width: 1080, height: 1549 },
  // { asset: "prewed (1).jpg", width: 1080, height: 720 },

  //   { asset: "image12.5a9347ea.jpg", width: 1080, height: 1620 },
  //   { asset: "image13.ce46dd98.jpg", width: 1080, height: 720 },
  //   { asset: "image14.68b2812c.jpg", width: 1080, height: 1440 },
  //   { asset: "image15.4461facf.jpg", width: 1080, height: 1620 },
  //   { asset: "image16.5ad17d8b.jpg", width: 1080, height: 810 },
  //   { asset: "image17.a242e897.jpg", width: 1080, height: 595 },
  //   { asset: "image18.0479bde8.jpg", width: 1080, height: 160 },
  //   { asset: "image19.ab7b61f4.jpg", width: 1080, height: 810 },
  //   { asset: "image20.f62571df.jpg", width: 1080, height: 720 },
  //   { asset: "image21.14c9bee0.jpg", width: 1080, height: 1440 },
].map(({ asset, width, height }) => ({
  src: assetLink(asset, width),
  width,
  height,
  srcSet: breakpoints.map((breakpoint) => ({
    src: assetLink(asset, breakpoint),
    width: breakpoint,
    height: Math.round((height / width) * breakpoint),
  })),
}));

export default photos;
