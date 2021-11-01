function sendManagerForm(name, phone, email) {
  document.querySelector('input.name-m').value = name
  document.querySelector('input.phone-m').value = phone
  document.querySelector('input.email-m').value = email
  document.querySelector('.submit-m').click()
}
function sendMainForm(from, where, what, weight, name, phone, email) {
  document.querySelector('input.from-main').value = from
  document.querySelector('input.where-main').value = where
  document.querySelector('input.what-main').value = what
  document.querySelector('input.weight-main').value = weight
  document.querySelector('input.name-main').value = name
  document.querySelector('input.phone-main').value = phone
  document.querySelector('input.email-main').value = email
  document.querySelector('.submit-main').click()
}

export function popup(Vue) {
  const app = new Vue({
    el: '.popup',
    template: `
        <div class="popup-window" @click="hidePopup">
            <div class="popup" v-if="current === 1" @click.stop>
                <div class="popup-title">Не получается определиться с тарифом? </div>
                <div class="popup-text">
                Мы поможем! <br>
                Ответьте на несколько вопросов,
                а мы подберем идеальный тариф и 
                рассчитаем стоимость перевозки.
                </div>
                <div class="next-btn" @click="nextStep(1)">Поехали!</div>
                <div class="danger-btn" @click="current = 10">
                    Не хочу ничего заполнять, <br>
                    соедините меня с менеджером
                </div>
            </div>

            <div class="popup" v-if="current === 2" @click.stop>
                <div class="popup-title">Начнем с пути: <br> откуда и куда нужно доставить груз?</div>
                <div class="popup-text">
                    Откуда?
                </div>
                <input type="text" 
                        placeholder="Например, фабрика мебели" 
                        v-model="from" 
                        :style="fromStyle" 
                        @input="changeInputSecond"
                />
                <div class="popup-text">
                    Куда?
                </div>
                <input type="text" 
                        placeholder=" Например, Москва, 3-я улица Строит 2" 
                        v-model="where" 
                        :style="whereStyle" 
                        @input="changeInputSecond"
                />
                <div class="err-text">{{ errBlock }}</div>
                <div class="next-btn" @click="nextStep(2)">Готово!</div>
                <div class="danger-btn" @click="current = 10">
                    Не хочу ничего заполнять, <br>
                    соедините меня с менеджером
                </div>
            </div>

            <div class="popup" v-if="current === 3" @click.stop>
                <div class="popup-title">Что везем?</div>
                <input type="text" 
                        placeholder="Например, двуспальная кровать из дуба" 
                        v-model="what" 
                        :style="whatStyle" 
                        @input="changeInputThird"
                />
                <div class="popup-title subtit">Осталось всего два вопроса :)</div>
                <div class="err-text">{{ errBlock }}</div>
                <div class="next-btn" @click="nextStep(3)">Дальше!</div>
                <div class="danger-btn">
                    Не хочу ничего заполнять, <br>
                    соедините меня с менеджером
                </div>
            </div>

            <div class="popup" v-if="current === 4" @click.stop>
                <div class="popup-title">Сколько весит груз?</div>
                <input type="text" 
                        placeholder="Например, 50 кг"
                        v-model="weight" 
                        :style="weightStyle" 
                        @input="changeInputFourth"
                />
                <div class="desc">
                    Вес груза можно посмотреть в договоре или на сайте производителя. Если не нашли эту цифру, воспользуйтесь примерными данными.
                </div>
                <div class="popup-title subtit">Жмите на кнопку, остался последний шаг :)</div>
                <div class="err-text">{{ errBlock }}</div>
                <div class="next-btn" @click="nextStep(4)">Дальше!</div>
                <div class="danger-btn">
                    Не хочу ничего заполнять, <br>
                    соедините меня с менеджером
                </div>
            </div>

            <div class="popup" v-if="current === 5" @click.stop>
                <div class="popup-title">
                Ура, Финиш! 
                </div>
                <div class="finish-text">
                    Оставьте свои контакты, чтобы мы прислали вам расчет и рассказали про тариф. <br>
                    Обещаем, что боты звонить вам не будут
                </div>
                <input type="text" 
                        placeholder="Имя"
                        v-model="name" 
                        :style="nameStyle" 
                        @input="changeInputFifth"
                />
                <input type="text" 
                        placeholder="Телефон"
                        v-model="phone" 
                        :style="phoneStyle" 
                        @input="changeInputFifth"
                />
                <input type="text" 
                        placeholder="E-mail"
                        v-model="email" 
                        :style="emailStyle" 
                        @input="changeInputFifth"
                />
                <div class="err-text">{{ errBlock }}</div>
                <div class="next-btn" @click="nextStep(5)">Жду рачёт!</div>
            </div>

            <div class="popup" v-if="current === 6" @click.stop>
                <div class="popup-title">
                    Отлично!
                </div>
                <div class="finish-text">
                    Мы получили всю информацию, сейчас подберем самый выгодный для вас тариф и рассчитаем стоимость. Через 30 минут напишем вам в WhatsApp, а если его нет, то позвоним. 
                </div>
                <div class="next-btn" @click="nextStep(6)">Ок, жду</div>
            </div>

            <div class="popup" v-if="current === 10" @click.stop>
                <div class="finish-text">
                    Оставьте свои контакты, 
                    и менеджер свяжется 
                    с вами по WhatsApp 
                    или позвонит 
                    в течение 30 минут.                
                </div>
                <input type="text" 
                        placeholder="Имя"
                        v-model="nameM" 
                        :style="nameMStyle" 
                        @input="changeInputTen"
                />
                <input type="text" 
                        placeholder="Телефон"
                        v-model="phoneM" 
                        :style="phoneMStyle" 
                        @input="changeInputTen"
                />
                <input type="text" 
                        placeholder="E-mail"
                        v-model="emailM" 
                        :style="emailMStyle" 
                        @input="changeInputTen"
                />
                <div class="err-text">{{ errBlock }}</div>
                <div class="next-btn" @click="nextStep(10)">Жду менеджера</div>
            </div>

            <div class="popup" v-if="current === 11" @click.stop>
                <div class="popup-title">
                    Отлично!
                </div>
                <div class="finish-text">
                    Мы получили всю информацию. Через 30 минут напишем вам в WhatsApp, а если его нет, то позвоним. 
                </div>
                <div class="next-btn" @click="nextStep(11)">Ок, жду</div>
            </div>
        </div>
    `,
    data: {
      current: 1,
      pressSecond: false,
      pressThird: false,
      pressFourth: false,
      pressFifth: false,
      pressTen: false,
      from: '',
      where: '',
      what: '',
      weight: '',
      name: '',
      phone: '',
      email: '',
      nameM: '',
      phoneM: '',
      emailM: '',
      errBlock: '',
    },
    methods: {
      nextStep(num) {
        switch (num) {
          case 1:
            this.firstStep()
            break
          case 2:
            this.secondStep()
            break
          case 3:
            this.thirdStep()
            break
          case 4:
            this.fourthStep()
            break
          case 5:
            this.fifthStep()
            break
          case 6:
            this.sixthStep()
            break
          case 10:
            this.tenStep()
            break
          case 11:
            this.elevenStep()
            break
        }
      },
      firstStep() {
        this.current++
      },
      secondStep() {
        if (!this.from || !this.where) {
          this.pressSecond = true
          this.errBlock = 'Заполните пожалуйста все данные!'
        } else {
          this.current++
        }
      },
      thirdStep() {
        if (!this.what) {
          this.pressThird = true
          this.errBlock = 'Заполните пожалуйста все данные!'
        } else {
          this.current++
        }
      },
      fourthStep() {
        if (!this.weight) {
          this.pressFourth = true
          this.errBlock = 'Заполните пожалуйста все данные!'
        } else {
          this.current++
        }
      },
      fifthStep() {
        if (!this.name || !this.phone || !this.email) {
          this.pressFifth = true
          this.errBlock = 'Заполните пожалуйста все данные!'
        } else {
          sendMainForm(
            this.from,
            this.where,
            this.what,
            this.weight,
            this.name,
            this.phone,
            this.email
          )
          this.current++
        }
      },
      sixthStep() {
        document.querySelector('.popup-window').classList.remove('active')
      },
      tenStep() {
        if (!this.nameM || !this.phoneM || !this.emailM) {
          this.pressTen = true
          this.errBlock = 'Заполните пожалуйста все данные!'
        } else {
          sendManagerForm(this.nameM, this.phoneM, this.emailM)
          this.current++
        }
      },
      elevenStep() {
        document.querySelector('.popup-window').classList.remove('active')
      },
      changeInputSecond() {
        if (this.from && this.where) {
          this.errBlock = ''
        }
      },
      changeInputThird() {
        if (this.what) {
          this.errBlock = ''
        }
      },
      changeInputFourth() {
        if (this.weight) {
          this.errBlock = ''
        }
      },
      changeInputFifth() {
        if (this.name && this.phone && this.email) {
          this.errBlock = ''
        }
      },
      changeInputTen() {
        if (this.nameM && this.phoneM && this.emailM) {
          this.errBlock = ''
        }
      },
      hidePopup() {
        document.querySelector('.popup-window').classList.remove('active')
      },
    },
    computed: {
      fromStyle() {
        return this.pressSecond && !this.from
          ? { border: '2px solid red' }
          : null
      },
      whereStyle() {
        return this.pressSecond && !this.where
          ? { border: '2px solid red' }
          : null
      },
      whatStyle() {
        return this.pressThird && !this.what
          ? { border: '2px solid red' }
          : null
      },
      weightStyle() {
        return this.pressFourth && !this.weight
          ? { border: '2px solid red' }
          : null
      },
      nameStyle() {
        return this.pressFifth && !this.name
          ? { border: '2px solid red' }
          : null
      },
      phoneStyle() {
        return this.pressFifth && !this.phone
          ? { border: '2px solid red' }
          : null
      },
      emailStyle() {
        return this.pressFifth && !this.email
          ? { border: '2px solid red' }
          : null
      },
      nameMStyle() {
        return this.pressTen && !this.nameM ? { border: '2px solid red' } : null
      },
      phoneMStyle() {
        return this.pressTen && !this.phoneM
          ? { border: '2px solid red' }
          : null
      },
      emailMStyle() {
        return this.pressTen && !this.emailM
          ? { border: '2px solid red' }
          : null
      },
    },
  })
}
