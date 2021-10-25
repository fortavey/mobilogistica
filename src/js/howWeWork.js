export function howWeWork(Vue) {
  const app = new Vue({
    el: '.how-we-work',
    data: {
      active: 1,
    },
    methods: {
      changeActive(num) {
        this.active = num
      },
    },
  })
}
