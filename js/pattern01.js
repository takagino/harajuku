window.addEventListener('DOMContentLoaded', function () {
  // タイムライン設定
  const tl = gsap.timeline();
  //tl.pause();

  //スピード設定
  const messageSpeed = 5;
  const typeSpeed = 0.5;
  const blinkSpeed = 0.3;

  // アニメーション
  tl.set('#coming', {
    display: 'none',
  });
  tl.set('#message', {
    opacity: 0,
    filter: 'blur(10px)',
  });
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
    delay: messageSpeed,
    ease: 'power2.in',
  });

  tl.set('#st1', {
    opacity: 1,
    delay: 1,
  });
  tl.set('#st2', {
    opacity: 1,
    delay: typeSpeed,
  });
  tl.set('#st3', {
    fill: '#000',
    opacity: 1,
    delay: typeSpeed,
  });
  tl.set('#st4', {
    opacity: 1,
    delay: typeSpeed,
  });
  tl.set(
    '#x',
    {
      opacity: 1,
    },
    '-=1.2'
  );
  tl.set(
    '#vertical',
    {
      opacity: 1,
    },
    '<'
  );
  tl.set(
    '#equal',
    {
      opacity: 1,
    },
    '-=0.8'
  );
  tl.set(
    '#plus',
    {
      opacity: 1,
    },
    '-=0.3'
  );
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
    delay: 0.4,
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
    delay: 0.6,
  });
  tl.set('#coming', {
    display: 'block',
    opacity: 1,
    delay: 0.2,
  });
});
