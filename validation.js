// validation script here
// const reg = /[a-z]$/gi

// const reg2 = new RegExp(/[a-z]$/, 'gi')

// console.log(reg.test('hello1'))
// console.log(reg2.test('dhek_34'))
const inputs = document.querySelectorAll('input') // HTML collection

const patterns = {
  telephone: /^\d{11}$/,
  username: /^[a-z\d]{5,12}$/i,
  password: /^[\w@-]{8,20}$/,
  slug: /^[a-z\d-]{8,20}$/,
  email: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/
}

// validation function
function validate(field, regex) {
  if (regex.test(field.value)) {
    field.className = 'valid'
  } else {
    field.className = 'invalid'
  }
}

inputs.forEach(input => {
  input.addEventListener('keyup', e => {
    // console.log(e.target.attributes.name.value, e.target.value)
    validate(e.target, patterns[e.target.attributes.name.value])
  })
})


console.log(patterns.telephone.test('23456349130'))