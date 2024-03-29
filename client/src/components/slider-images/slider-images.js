const importAll = (r) => {
  let images = {};
  r.keys().map((item) => {
    return (images[item.replace('./', '')] = r(item));
  });
  return images;
};

const images = importAll(
  require.context('./images', false, /\.(png|jpe?g|JPE?G|svg)$/),
);

export default images;
