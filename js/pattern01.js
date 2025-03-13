// タイムライン設定
const tl = gsap.timeline();

//スピード設定
const blinkSpeed = 0.3;

// アニメーション
tl.to('#message', {
  opacity: 1,
  filter: 'blur(0px)',
  duration: 0.5,
  delay: 0.5,
  ease: 'power2.in',
});
tl.to('#message', {
  opacity: 0,
  filter: 'blur(10px)',
  duration: 0.5,
  delay: 8,
  ease: 'power2.out',
});
tl.set('#st1', {
  opacity: 1,
  delay: 1,
});
tl.set('#st2', {
  opacity: 1,
  delay: 0.5,
});
tl.set('#x', {
  opacity: 1,
  delay: 0.5,
});
tl.set(
  '#vertical',
  {
    opacity: 1,
  },
  '<'
);
tl.set('#equal', {
  opacity: 1,
  delay: 0.2,
});
tl.set('#st3', {
  fill: '#000',
  opacity: 1,
  delay: 0.8,
});
tl.set('#st4', {
  opacity: 1,
  delay: 0.5,
});
tl.set('#plus', {
  opacity: 1,
  delay: 0.5,
});
tl.set('#colon', {
  opacity: 1,
  delay: 0.2,
});
tl.set('#registered', {
  opacity: 1,
  delay: 0.2,
});
tl.set('#st3', {
  fill: '#fff',
  delay: 0.5,
});
tl.set(
  '#rect',
  {
    opacity: 1,
  },
  '<'
);
tl.set('#st3', {
  fill: '#000',
  delay: blinkSpeed,
});
tl.set(
  '#rect',
  {
    opacity: 0,
  },
  '<'
);
tl.set('#st3', {
  fill: '#fff',
  delay: blinkSpeed,
});
tl.set(
  '#rect',
  {
    opacity: 1,
  },
  '<'
);
tl.set('#st3', {
  fill: '#000',
  delay: blinkSpeed,
});
tl.set(
  '#rect',
  {
    opacity: 0,
  },
  '<'
);
tl.set('#st3', {
  fill: '#fff',
  delay: blinkSpeed,
});
tl.set(
  '#rect',
  {
    opacity: 1,
  },
  '<'
);
tl.set('#arrow', {
  opacity: 1,
  delay: 0.8,
});
tl.set('#coming', {
  opacity: 1,
  delay: 0.4,
});
