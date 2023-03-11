let t1 = gsap.timeline({ paused: true, reversed: true });
let t2 = gsap.timeline({ paused: true, reversed: true });
let t3 = gsap.timeline({ paused: true, reversed: true });

const album1 = document.querySelector(".albums-1");
const album3 = document.querySelector(".album-3");
const playButton = document.querySelector(".play-button");
const reverseButton = document.querySelector(".back-button");
const reverseButton2 = document.querySelector(".back-button-2");
const reverseButton3 = document.querySelector(".back-button-3");

album1.addEventListener("click", (e) => {
  t1.play();
});

playButton.addEventListener("click", (e) => {
  t2.play();
});

album3.addEventListener("click", (e) => {
  t3.play();
});

reverseButton.addEventListener("click", (e) => {
  t1.reverse();
});

reverseButton2.addEventListener("click", (e) => {
  t2.reverse();
});

reverseButton3.addEventListener("click", (e) => {
  t3.reverse();
});

t1.to(
  ".screen-1 h1",
  {
    ease: "power1.inOut",
    yPercent: -100,
    opacity: 0,
  },
  0
);

t1.to(
  ".screen-1 .album-title",
  {
    ease: "power1.inOut",
    yPercent: -200,
    duration: 0.5,
    opacity: 0,
  },
  0
);

t1.to(
  ".album-row",
  {
    ease: "power1.inOut",
    yPercent: 100,
    opacity: 0,
  },
  0
);

t1.to(
  ".albums-1",
  {
    ease: "power1.inOut",
    y: -210,
  },
  0.1
);

t1.to(".albums-1", {
  ease: "power1.inOut",
  height: 180,
});

t1.to(".album-release", {
  ease: "power1.inOut",
  opacity: 1,
});

t1.to(
  ".play-row h3",
  {
    ease: "back.inOut(1.7)",
    x: 124,
    opacity: 1,
  },
  1
);

t1.to(
  ".album-desc",
  {
    ease: "power1.inOut",
    y: -410,
    opacity: 1,
  },
  1
);

t1.to(
  ".play-button",
  {
    scale: 1,
    ease: "bounce.out",
    duration: 1,
  },
  1
);

t1.to(
  ".back-button",
  {
    ease: "power1.inOut",
    y: -240,
    opacity: 1,
  },
  2
);

// 2nd Timeline
t2.to(
  ".albums-1",
  {
    height: 100,
    ease: "power1.inOut",
  },
  0
);

t2.to(
  ".albums-1 img",
  {
    height: 72,
    ease: "power1.inOut",
  },
  0
);

t2.to(
  ".play-row h3",
  {
    ease: "back.inOut(1.7)",
    x: -124,
    opacity: 1,
  },
  0
);

t2.to(
  ".play-button",
  {
    scale: 0,
    ease: "power1.inOut",
  },
  0
);

t2.to(
  ".album-desc",
  {
    y: 410,
    ease: "power1.inOut",
  },
  0
);

t2.to(
  ".back-button",
  {
    y: 244,
    ease: "power1.inOut",
  },
  0
);

t2.to(".song-1", {
  ease: "power1.inOut",
  x: 342,
  opacity: 1,
});

t2.to(
  ".back-button-2",
  {
    ease: "power1.inOut",
    y: -140,
    opacity: 1,
  },
  1.5
);

t2.to(
  ".song-2",
  {
    ease: "power1.inOut",
    x: 342,
    opacity: 1,
  },
  0.6
);

t2.to(
  ".song-3",
  {
    ease: "power1.inOut",
    x: 342,
    opacity: 1,
  },
  0.7
);

t2.to(
  ".song-4",
  {
    ease: "power1.inOut",
    x: 342,
    opacity: 1,
  },
  0.8
);

t2.to(
  ".song-5",
  {
    ease: "power1.inOut",
    x: 342,
    opacity: 1,
  },
  0.9
);

t2.to(
  ".song-6",
  {
    ease: "power1.inOut",
    x: 342,
    opacity: 1,
  },
  1
);

t2.to(
  ".song-7",
  {
    ease: "power1.inOut",
    x: 342,
    opacity: 1,
  },
  1.1
);

t2.to(
  ".song-8",
  {
    ease: "power1.inOut",
    x: 342,
    opacity: 1,
  },
  1.2
);

//third timeline
t3.to(
  ".screen-1 h1",
  {
    ease: "power1.inOut",
    yPercent: -100,
    opacity: 0,
  },
  0
)
  .to(
    ".screen-1 .album-title",
    {
      ease: "power1.inOut",
      yPercent: -200,
      duration: 0.5,
      opacity: 0,
    },
    0
  )
  .to(
    ".albums-1",
    {
      ease: "power1.inOut",
      xPercent: -100,
      duration: 0.7,
      opacity: 0,
    },
    "<"
  )
  .to(
    ".album-row",
    {
      ease: "power1.inOut",
      yPercent: 180,
      opacity: 1,
    },
    0
  )
  .to(
    ".album-3",
    {
      ease: "power1.inOut",
      y: -650,
      width: "100%",
      opacity: 1,
      height: 140,
      position: "absolute",
    },
    0.4
  )
  .to(
    ".album-3 img",
    {
      position: "absolute",
      right: 0,
      top: 0,
      width: "45%",
      ease: "power1.inOut",
      opacity: 1,
    },
    0.1
  )
  .to(".album-3", {
    ease: "power1.inOut",
    height: 160,
  })
  .to(
    ".song-1",
    {
      ease: "power1.inOut",
      x: 342,
      y: 80,
      opacity: 1,
    },
    1.2
  )
  .to(
    ".back-button-3",
    {
      ease: "power1.inOut",
      y: -90,
      opacity: 1,
    },
    1.5
  );
