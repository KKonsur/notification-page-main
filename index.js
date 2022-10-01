const button = document.querySelector('.notification-box__mark')
const notifications = document.querySelectorAll('.notification-section__notification--new')
const circles = document.querySelectorAll('.circle')
const notificationNumber = document.querySelector('.notification-box__number')
let currentNumber = notifications.length

button.addEventListener('click', () => {
   notifications.forEach(notification => notification.classList.remove('notification-section__notification--new'))
   circles.forEach(circle => circle.remove())
   notificationNumber.remove()
})

notifications.forEach((notification, index) => {
   notification.addEventListener('click', () => {
      notification.classList.contains('notification-section__notification--new') && currentNumber--
      notification.classList.remove('notification-section__notification--new')
      currentNumber === 0 && notificationNumber.remove()
      circles[index].remove()
      notificationNumber.innerHTML = currentNumber
   })
})