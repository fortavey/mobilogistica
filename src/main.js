import './styles/styles.scss'
import * as Vue from '@vue/vue'
// import * as $ from 'jquery'
// window.$ = window.jQuery = $
// import 'slick-carousel'
import { tarifs } from './js/tarifs'
import { howWeWork } from './js/howWeWork'
import { popup } from './js/popup'

tarifs(Vue)
howWeWork(Vue)
popup(Vue)

const moreBtns = document.querySelectorAll('.reviews .show-more')
moreBtns.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    e.target
      .closest('.text')
      .querySelector('.text-in')
      .classList.toggle('opened')
  })
})

document.querySelectorAll('.btn').forEach((btn) => {
  btn.addEventListener('click', (e) => {
    document.querySelector('.popup-window').classList.add('active')
  })
})
