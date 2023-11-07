class Calc {
  static #value = ''
  static #NAME = 'calc'
  static #isDot = false

  static add = (newValue) => {
    if (
      this.#value.length >= 2 &&
      isNaN(this.#value[this.#value.length - 2])
    ) {
      if (
        Number(this.#value[this.#value.length - 1]) === 0 &&
        this.#isDot == false
      ) {
        return null
      }
    }

    if (
      Number(this.#value[this.#value.length - 1]) === 0 &&
      Number(this.#value.length) <= 1
    ) {
      this.#value = String(newValue)
    } else {
      this.#value = this.#value.concat(newValue)
    }

    this.#output()

    console.log(
      'newValue: ' +
        newValue +
        ',  this.#value: ' +
        this.#value +
        ', this.#value.length: ' +
        this.#value.length +
        ',  this.#isDot: ' +
        this.#isDot,
    )
  }

  static #output = () => {
    this.#save()

    if (Number(this.#value.length) > 13) {
      document.getElementById('output').style =
        'font-size:32px'
    } else if (Number(this.#value.length) > 11) {
      document.getElementById('output').style =
        'font-size:42px'
    } else if (Number(this.#value.length) > 8) {
      document.getElementById('output').style =
        'font-size:52px'
    }

    window.output.innerHTML = this.#value
  }

  static dot = () => {
    if (this.#isDot) {
      return null
    }

    if (isNaN(this.#value[this.#value.length - 1]))
      return null

    this.#value = this.#value.concat('.')
    this.#output()
    console.log(this.#value.length)
    this.#isDot = true
  }

  static op = (option) => {
    if (isNaN(this.#value[this.#value.length - 1]))
      return null

    this.#value = this.#value.concat(option)
    this.#output()

    this.#isDot = false
  }

  static deleteOne = () => {
    // this.#value = this.#value.substring(
    //   0,
    //   this.#value.length - 1,
    // )
    // console.log(this.#value)

    this.#value = this.#value.slice(0, -1)
    console.log(this.#value)
    if (this.#value.length === 0) {
      this.#value = '0'
    }
    this.#output()
  }

  static reset = () => {
    this.#value = '0'
    this.#isDot = false

    document.getElementById('output').style =
      'font-size:64px'
    this.#output()

    console.log(
      'reset: this.#value - ' +
        this.#value +
        ', this.#value.length - ' +
        this.#value.length,
    )
  }

  static result = () => {
    this.#value = String(eval(this.#value))
    this.#output()
  }

  static #save = () => {
    window.localStorage.setItem(this.#NAME, this.#value)
  }

  static #load = () => {
    this.#value =
      window.localStorage.getItem(this.#NAME) || ''
  }

  static init = () => {
    this.#load()
    this.#output()
  }
}

Calc.init()
window.calc = Calc
