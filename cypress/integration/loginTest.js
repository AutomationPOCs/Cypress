import {loginPage} from '../support/Base/PageObjects/loginObjects.js'

describe('Launch site url', () => {

    beforeEach(() => {
        cy.visit('https://store.dandelionchocolate.com/')
        cy.get(loginPage.logo).eq(0).click()
    })

    it('Verify home page elements', () => {
        cy.elementShouldBeVisible(loginPage.logo)
    })
})