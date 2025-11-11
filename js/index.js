// إعداد لينس
const lenis = new Lenis({
  duration: 1.2, // سرعة السموث
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
})

// اللوب الأساسي
function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}
requestAnimationFrame(raf)

// تطبيق السموث على روابط التنقل
const links = document.querySelectorAll('a[href^="#"]')
links.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault() // منع القفز المفاجئ
    const targetId = link.getAttribute('href')
    const target = document.querySelector(targetId)
    if (target) {
      lenis.scrollTo(target) // خليه يوصله بسلاسة
    }
  })
})
