const user = {
  fullname: "Rodney Cotton",
  location: "Helsinki, Finland",
  profile_img: "profilePhoto.png",
  data: {
    posts: 100,
    followers: 2242,
    following: 1432,
  },
  images: [
    "photo1.png",
    "photo2.png",
    "photo3.png",
    "photo_4.png",
    "photo5.png",
    "photo6.png",
  ],
};

export const getUser = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const random = Math.random(0.5);
      if (random > 0.9) {
        return reject({ error: "something went wrong" });
      }
      return resolve(user);
    }, 3000);
  });
};
