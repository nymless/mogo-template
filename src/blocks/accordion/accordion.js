const accordions = document.querySelectorAll('.accordion')

const accordionState = Array(accordions.length).fill({ activeItemIndex: 0 })

document.body.addEventListener('click', (event) => {
  if (!event.target.closest('.accordion__item-head')) {
    return
  }

  const targetItem = event.target.closest('.accordion__item')
  const targetAccordion = event.target.closest('.accordion')

  if (targetItem.classList.contains('accordion__item--active')) {
    return
  }

  let targetAccordionIndex

  Array.from(accordions).forEach((item, index) => {
    if (item === targetAccordion) {
      targetAccordionIndex = index
    }
  })

  targetAccordion.children[
    accordionState[targetAccordionIndex].activeItemIndex
  ].classList.remove('accordion__item--active')

  targetItem.classList.add('accordion__item--active')

  let activeItemIndex

  Array.from(targetAccordion.children).forEach((item, index) => {
    if (item === targetItem) {
      activeItemIndex = index
    }
  })

  accordionState[targetAccordionIndex].activeItemIndex = activeItemIndex
})

document.querySelectorAll('.accordion__item-body').forEach((elem) => {
  new SimpleBar(elem, { autoHide: false })
})
