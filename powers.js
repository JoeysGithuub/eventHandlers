/*
    In the following code, replace `event` with the correct string to handle
    a click event on the button. Then write the function that has instructions
    for activating the corresponding power. The function should...
        1. Remove the `disabled` class
        2. Add the `enabled` class

*/

let powerFlight = () => {
  let fly = document.querySelector('#flight')
  fly.classList.toggle('enabled')
  fly.classList.toggle('disabled')
}

document.querySelector('#activate-flight').addEventListener('click', powerFlight)


/*
    Now write two more event handlers that activate the other two powers
    when the corresponding buttons are clicked.
*/

let telepathic = () => {
  let read = document.querySelector('#mindreading')
  read.classList.toggle('enabled')
  read.classList.toggle('disabled')
}

document.querySelector('#activate-mindreading').addEventListener('click', telepathic)

let rays = () => {
  let shades = document.querySelector('#xray')
  shades.classList.toggle('enabled')
  shades.classList.toggle('disabled')
}

document.querySelector('#activate-xray').addEventListener('click', rays)

/*
    Write two more event handlers for activating and deactivating all powers
    when the corresponding buttons are clicked. You will need to use the
    `document.querySelectorAll()` method for these.
*/

let powerAll = () => {
  let mark = document.querySelectorAll('.power')
  for (let i = 0; i < mark.length; i++) {
      let lights = mark[i]
      lights.classList.remove('disabled')
      lights.classList.add('enabled')
    }
}

document.querySelector('#activate-all').addEventListener('click', powerAll)

let turnOff = () => {
  let mark = document.querySelectorAll('.power')
  for (let i = 0; i < mark.length; i++) {
      let noLights = mark[i]
      noLights.classList.add('disabled')
      noLights.classList.remove('enabled')
    }
}

document.querySelector('#deactivate-all').addEventListener('click', turnOff)