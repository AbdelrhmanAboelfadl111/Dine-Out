const lenis = new Lenis({
  duration: 1.4,            // زودها شوية علشان التمرير يكون أطول وأهدأ
  smooth: true,
  easing: (t) => 1 - Math.pow(2, -10 * t),  // انسيابية تدريجية بدون توقف مفاجئ
  direction: 'vertical',
  smoothTouch: true,        // خليه كمان يشتغل ناعم في الموبايل
  touchMultiplier: 1.5,     // بيخلي حركة الماوس واللمس أنعم
  infinite: false,
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);
