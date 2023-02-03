import {loginPage} from '../support/Base/PageObjects/loginObjects.js'

describe('Launch site url', () => {

    beforeEach(() => {
        cy.visit(' ')
    })

    it('Verify home page elements', () => {
        cy.get(loginPage.logo).eq(0).click()
        cy.elementShouldBeVisible(loginPage.logo)
    })
})