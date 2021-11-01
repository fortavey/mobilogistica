export function howWeWork(Vue) {
  const app = new Vue({
    el: '.how-we-work',
    data: {
      active: 1,
      activeMobile: 1,
    },
    methods: {
      changeActive(num) {
        this.active = num
      },
      changeActiveMobile(num) {
        this.activeMobile = num === this.activeMobile ? 0 : num
      },
    },
  })
}
