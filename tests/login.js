const { I, loginPage, mainPage } = inject()
const { login, password } = require('../data/values.json')

Feature('Login')

Scenario('Login', async () => {
  I.amOnPage('/login')
  I.waitForText("Sign in to GitHub")
  I.fillField(loginPage.fields.login, login)
  I.fillField(loginPage.fields.password, password)
  I.click(loginPage.buttons.sign_in)
  I.waitForVisible(mainPage.user_avatar_menu)
}).tag('@login')
