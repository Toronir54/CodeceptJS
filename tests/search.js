const { I, mainPage, searchPage, searchComponent } = inject();
const { config: { baseUrl } } = require('../codecept.conf')

Feature('Search')

Scenario('Search from main page. Nothing found. @search_1', async () => {
  I.amOnPage('')
  I.waitForVisible(mainPage.header_menu)
  within(mainPage.header_menu, () => {
    I.seeElement(searchComponent.input)
    I.seeTextEquals('Search or jump to...', searchComponent.input_text)
    I.click(searchComponent.input)
  })
  const text = 'veryLongTextForSearchWhichWillNotBeFound'
  searchComponent.searchByText(text)
  I.waitInUrl(`/search?q=${text}`)
  I.see(text, this.input_text)
  searchPage.nothingFound()
}).tag('@search')

Scenario('Search from main page. User. @search_2', async () => {
  I.amOnPage('')
  I.waitForVisible(mainPage.header_menu)
  within(mainPage.header_menu, () => {
    I.seeElement(searchComponent.input)
    I.seeTextEquals('Search or jump to...', searchComponent.input_text)
    I.click(searchComponent.input)
  })
  const user = 'Toronir54'
  searchComponent.searchByText(`user:${user}`)
  I.waitUrlEquals(`${baseUrl}/${user}`)
  I.waitForVisible(`[alt="View ${user}'s full-sized avatar"]`)
}).tag('@search')
