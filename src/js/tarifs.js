export function tarifs(Vue) {
  const app = new Vue({
    el: '.tarifs',
    data: {
      showFirst: true,
      showSecond: window.innerWidth > 800 ? true : false,
      moreWidth: window.innerWidth > 800,
    },
    methods: {
      showFirstClick() {
        this.showFirst = true
        this.showSecond = false
      },
      showSecondClick() {
        this.showSecond = true
        this.showFirst = false
      },
    },
    created() {
      window.addEventListener('resize', (e) => {
        if (window.innerWidth > 800 && !this.moreWidth) {
          this.moreWidth = true
          this.showFirst = true
          this.showSecond = true
        }
        if (window.innerWidth <= 800 && this.moreWidth) {
          this.moreWidth = false
          this.showFirst = true
          this.showSecond = false
        }
      })
    },
  })
}
