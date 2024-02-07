const { I } = inject();

module.exports = {
  // LOCATORS
  input: '[class="search-input"]',
  input_text: '[data-target="qbsearch-input.inputButtonText"]',
  input_overlay: '[data-target="qbsearch-input.queryBuilder"]',
  action_list_item: '[class="ActionListItem-descriptionWrap"] span',
  action_list_item_description: '[class="ActionListItem-description QueryBuilder-ListItem-trailing"]',

  // METHODS
  searchByText(text) {
    I.waitForVisible(this.input_overlay)
    I.fillField(this.input_overlay, text)
    I.waitForVisible(this.action_list_item)
    I.see(text, this.action_list_item)
    I.seeTextEquals('Search all of GitHub', this.action_list_item_description)
    I.pressKey('Enter')
  }

}
