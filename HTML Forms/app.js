// JavaScript for toggling dark mode
function toggleDarkMode () {
  const body = document.body
  body.classList.toggle('dark-mode')
}
function submitForm () {
  // Get form values
  const firstName = document.getElementById('firstName').value
  const lastName = document.getElementById('lastName').value
  const dob = document.getElementById('dob').value
  const country = document.getElementById('country').value
  const gender = Array.from(
    document.querySelectorAll('input[name="gender"]:checked')
  ).map(input => input.value)
  const profession = document.getElementById('profession').value
  const email = document.getElementById('email').value
  const mobile = document.getElementById('mobile').value

  // Check if all fields are filled
  if (
    !firstName ||
    !lastName ||
    !dob ||
    !country ||
    gender.length === 0 ||
    !profession ||
    !email ||
    !mobile
  ) {
    alert('Please fill in all the fields.')
    return
  }
  const emailValidity = validateForm(
    email,
    /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/
  )
  const mobileValidity = validateForm(mobile, /^\d{10}$/)
  if (!emailValidity && !mobileValidity) {
    alert(
      'Please enter a valid email address\nPlease enter a valid contact number'
    )
    return
  } else if (!mobileValidity) {
    alert('Please enter a valid mobile number')
    return
  } else if (!emailValidity) {
    alert('Please enter a valid email address')
    return
  }
  // Display selected values in a popup
  const message = `
                First Name: ${firstName}
                Last Name: ${lastName}
                Date of Birth: ${dob}
                Country: ${country}
                Gender: ${gender.join(', ')}
                Profession: ${profession}
                Email: ${email}
                Mobile Number: ${mobile}
            `

  alert(message)

  // Reset the form
  document.getElementById('surveyForm').reset()
}
function validateForm (value, regex) {
  if (!regex.test(value)) {
    return false
  } else return true
}
function resetForm () {
  // Reset the form
  document.getElementById('surveyForm').reset()
}

function changeMode () {
  document.body.classList.toggle('light-mode')
  var mode = document.querySelector('#mode')
  // toggle mode value
  if (mode.value == '🔆') {
    mode.value = '🌙'
  } else mode.value = '🔆'

  mode.animate(
    [{ transform: 'rotate(0deg)' }, { transform: 'rotate(360deg)' }],
    {
      duration: 600,
      iterations: 1
    }
  )
}
