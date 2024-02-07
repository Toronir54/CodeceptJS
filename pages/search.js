const { I } = inject()

module.exports = {
  // LOCATORS
  content: '[class*="search-results-page"]',
  result: '[data-testid="search-sub-header"]',
  heading: '[class*="search-results-page"] [class*="Heading"]',
  text_under_heading: '//*[contains(@class,"search-results-page")]//*[contains(@class,"Heading")]/../p',
  img_searching: '[class*="search-results-page"] img[alt="Mona looking through a globe hologram for code"]',

  // METHODS
  nothingFound() {
    I.waitForVisible(this.content)
    I.see('0 results ', this.result)
    I.see('Your search did not match any repositories', this.heading)
    I.see('You could try one of the tips below.', this.text_under_heading)
    I.seeElement(this.img_searching)
  }

}
