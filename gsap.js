
gsap.from('.logo', 1, {

  y: '-100%',
  ease: 'power1'
});
gsap.from('.hamburger-menu', 1, {
  delay: 1,
  x: '100vw',
  ease: 'power1',
})
gsap.from('.nav1', .5, {
  delay: 2,

  ease: 'slow',
  stagger: 1
})
gsap.from('#scene', 2, {

  delay: 1,
  ease: 'slow',
  stagger: 1
})

gsap.from('#menu1', 1, {


  x: '-200px',


})
gsap.from('#menu2', 1, {

  x: '200px',


})
gsap.from('#menu3', 1, {


  y: '200px',


})
gsap.from('#dash1', 1, {
  delay: 1,
  x: '-150px',
})
gsap.from('#dash2', 1, {
  delay: 1,
  x: '150px',
})
gsap.from('#dash3', 1, {
  delay: 1,
  y: '150px',
})




