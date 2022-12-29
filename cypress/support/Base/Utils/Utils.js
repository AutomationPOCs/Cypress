
/*
* this will verify the page title
*/
Cypress.Commands.add('verifyPageTitle', (loc, data) => {
  cy.wait(5000);
  cy.get(loc, { timeout: 20000 }).should('have.text', data);
});

/*
* this will verify the page Url
*/
Cypress.Commands.add('verifyURL', (data) => {
  cy.url({ timeout: 60000 }).should('contain', data);
  cy.wait(5000);
});

/*
* this will verify validation messages of pages
*/
Cypress.Commands.add('verifyValidationMessage', (loc, data) => {
  cy.get(loc).invoke('text').should('contain', data);
});

/*
* this will click on element using text data
*/
Cypress.Commands.add('clickOnElementUsingText', (loc, data) => {
  cy.get(loc,{ timeout: 20000 }).contains(data).click();
});

/*
* here verify any text is available on page
*/
Cypress.Commands.add('verifyTextContains', (loc, data) => {
  cy.get(loc,{ timeout: 40000 }).should('contain', data);
});

/**
 * 
 * 
 */
Cypress.Commands.add('verifyElementTextWithXpath', (loc,data) => {
  cy.xpath(loc,{ timeout: 60000 }).should('include.text',data);
});
/*
* here verify any text is equal to any specific data and return the data
*/
Cypress.Commands.add('verifyTextEqual', (loc, data) => {
  return cy.get(loc, { timeout: 20000 }).should('have.text', data);
});

/*
* here verify any text is equal to any specific data using index
*/
Cypress.Commands.add('verifyTextEqualWithIndex', (loc, index, data) => {
  cy.get(loc).eq(index).should('have.text', data);
});

/*
* here verify any element containing specific data as text
*/
Cypress.Commands.add('verifyTextContainWithIndex', (loc, index, data) => {
  cy.get(loc).eq(index).should('contain', data);
});

/*
* check the check boxes
*/
Cypress.Commands.add('checkMultipleRadioButton', (loc) => {
  cy.wait(5000);
  cy.get(loc).check({ force: true });
});

/*
* here verify the validation message on page using index value
*/
Cypress.Commands.add('verifyValidationMessageByIndex', (loc, data, index) => {
  cy.get(loc).eq(index).invoke('text').should('contain', data);
});

/*
* here verify message appearing on page
*/
Cypress.Commands.add('verifyMessage', (loc, data) => {
  cy.get(loc).invoke('text').should('contain', data);
});

/*
* click on element using xpath element selector
*/
Cypress.Commands.add('clickUsingXpath', (loc) => {
  cy.wait(5000);
  cy.xpath(loc).click({ force: true });
});

/*
* click on element using xpath element selector with index value
*/
Cypress.Commands.add('clickUsingXpathWithIndex', (loc, index) => {
  cy.wait(5000);
  cy.xpath(loc,{ timeout: 20000 }).eq(index).click({ force: true });
});

/*
* click on element with an additional parameter
*/
Cypress.Commands.add('clickOnElement', (loc, index, para) => {
  cy.get(loc, { timeout: 20000 }).eq(index).click(para);
});

/*
* click on element with an additional parameter with a specific amount of time wait
*/
Cypress.Commands.add('clickOnElementWithWait', (loc, index, wait, para) => {
  cy.wait(wait);
  cy.get(loc).eq(index).click(para);
});

/*
* select element from dropdown option
*/
Cypress.Commands.add('selectOptionFromSelectElement', (loc, data) => {
  cy.get(loc).then(($select) => {
    const opt = $select.find('option').eq(data)
    cy.log(opt.text());
    cy.wrap($select).select(opt.val())
  });
});

/*
* select element from dropdown by entering option of data
*/
Cypress.Commands.add('selectOptionwithValue', (loc, data) => {
  cy.get(loc,{ timeout: 20000 }).select(data);
});

/*
* verify element exist on page or not
*/
Cypress.Commands.add('verifyElementExistOrNot', (loc, data) => {
  cy.get(loc).should(data);
});

/*
* visit any url using a specific page key value
*/
Cypress.Commands.add('visitWithKey', (url) => {
  cy.visit({
    url: url,
    headers: {
      'X-SPI-CYPRESS-CLIENT-KEY': 'e0c22c40139bc34dafcbfa7ae4aa1ebf'
    },
    followRedirect: true,
  })
});

/*
* click on data with force
*/
Cypress.Commands.add('clickContainsWithForce', (data) => {
  cy.contains(data).click({ force: true });
});

/*
* click on text data
*/
Cypress.Commands.add('clickOnTextWithContains', (data) => {
  cy.xpath(`//*[contains(text(),"${data}")]`).click();
});

/*
* verify the page data
*/
Cypress.Commands.add('verifyPageContents', (loc, data) => {
  cy.get(loc, { timeout: 20000 }).should('contain', data);
});

/*
* perform upload file functionality
*/
Cypress.Commands.add('uploadFile', (loc, fileName, mimetype) => {
  cy.fixture(fileName).then(fileContent => {
    cy.get(loc).attachFile(
      { fileContent, fileName, mimeType: mimetype },
      { encoding: 'utf-8' },
      { subjectType: 'input' },
    );
  });
});

/*
* verify check box status as checked or unchecked
*/
Cypress.Commands.add('verifyCheckboxCheckedOrNot', (loc, index, value) => {
  cy.get(loc).eq(index).should(value);
});

/*
* check the checkboxes
*/
Cypress.Commands.add('checkedCheckbox', (loc, index) => {
  cy.wait(2000);
  if (Cypress.$(loc).eq(index).prop('checked')) {
    cy.log('checkbox is checked');
  }
  else {
    cy.get(loc).eq(index).click();
    cy.wait(1000);
  }
});

/*
* Uncheck the available checkboxes
*/
Cypress.Commands.add('unCheckedCheckbox', (loc, index) => {
  cy.wait(2000);
  if (!Cypress.$(loc).eq(index).prop('checked')) {
    cy.log('checkbox is checked');
  }
  else {
    cy.get(loc).eq(index).click();
    cy.wait(1000);
  }
});

/*
* verify any element present or not using text data
*/
Cypress.Commands.add('verifyElementExistOrNotUsingText', (loc, data, exist) => {
  cy.get(loc).contains(data).should(exist);
});

/*
* perform file upload functionality for specific file extension
*/
Cypress.Commands.add('upload_file', (fileName, fileType = ' ', selector) => {
  if (fileType = "pdf") {
    fileType = 'application/pdf';
  } else if (fileType = "rar") {
    fileType = 'application/x-rar-compressed';
  } else if (fileType = "xls") {
    fileType = 'application / vnd.ms - excel';
  } else if (fileType = "doc") {
    fileType = 'application / msword'
  } else if (fileType = "docx") {
    fileType = 'application / msword'
  }
  return cy.get(selector).then(subject => {
    cy.fixture(fileName, 'base64')
      .then(Cypress.Blob.base64StringToBlob)
      .then(blob => {
        const el = subject[0];
        const testFile = new File([blob], fileName, {
          type: fileType
        });
        const dataTransfer = new DataTransfer();
        dataTransfer.items.add(testFile);
        el.files = dataTransfer.files;
      });
  });
});

/*
* verify button status as disable using xpath element selectors
*/
Cypress.Commands.add('verifyDisabledButtonsUsingXpath', (loc) => {
  cy.xpath(loc).should('be.disabled');
});

/*
* verify button status as disable using Css element selectors
*/
Cypress.Commands.add('verifyDisabledButtonsUsingCss', (loc) => {
  cy.get(loc,{ timeout: 20000 }).should('be.disabled');
});

/*
* verify button status as enabled using xpath element selectors
*/
Cypress.Commands.add('verifyEnabledButtonsUsingXpath', (loc) => {
  cy.xpath(loc).should('be.enabled');
});

/*
* verify button status as enabled using Css element selectors
*/
Cypress.Commands.add('verifyEnabledButtonsUsingCss', (loc) => {
  cy.get(loc).should('be.enabled');
});

/*
* verify avaliable dates on page in [MMM, DD, YYYY] format
*/
Cypress.Commands.add('verifyDate', (loc, index, date) => {
  cy.get(loc).eq(index).invoke('text').then((text) => {
    if (Cypress.moment(date).isSame(Cypress.moment(text).format('MMM DD, YYYY'))) {
      expect(Cypress.moment(text).format('MMM DD, YYYY')).eq(date);
    } else if (Cypress.moment(date).isAfter(Cypress.moment(text).format('MMM DD, YYYY'))) {
      expect(Cypress.moment(date).isAfter(Cypress.moment(text).format('MMM DD, YYYY')), `${Cypress.moment(date).format('MMM DD, YYYY')} should appear after ${Cypress.moment(text).format('MMM DD, YYYY')}`).to.be.true
    } else {
      expect(Cypress.moment(date).isBefore(Cypress.moment(text).format('MMM DD, YYYY')), `${Cypress.moment(date).format('MMM DD, YYYY')} should appear before ${Cypress.moment(text).format('MMM DD, YYYY')}`).to.be.true
    }
  });
});

/*
* verify element not contains a specified data
*/
Cypress.Commands.add('elementShouldNotContain', (loc, data) => {
  cy.get(loc, { timeout: 20000 }).should('not.contain', data)
});

/*
* Input data in text field
*/
Cypress.Commands.add('enterText', (loc, data, ...flag) => {
  if (flag.length > 0) {
    cy.get(loc).eq(flag[0]).type(data);
  } else {
    cy.get(loc).type(data);
  }
});

/*
* verify url status as 200 OK
*/
Cypress.Commands.add('verifyHrefStatus', (loc, index, data, attribute) => {
  cy.get(loc).eq(index).invoke('attr', attribute).and('include', data).then((href) => {
    cy.log(href);
    cy.request(href).then((resp) => {
      expect(resp.status).to.eq(200);
    })
  })
});

/*
* verify deletion confirmation message using text data
*/
Cypress.Commands.add('verifyConfirmMessageOnDelete', (loc, msg) => {
  cy.get(loc.deleteLearningUserCollectionButton).invoke('attr', 'data-confirm').should('eq', msg);
});

/*
* check the uncheck checkboxes
*/
Cypress.Commands.add('checkUncheckCheckbox', (loc, ops) => {
  if (ops == 'check')
    cy.get(loc).check()
  else
    cy.get(loc).uncheck()
});

/*
* check the uncheck checkboxes using index value
*/
Cypress.Commands.add('checkUncheckCheckboxWithIndex', (loc, index, ops) => {
  if (ops == 'check')
    cy.get(loc).eq(index).check()
  else
    cy.get(loc).eq(index).uncheck()
});

/*
* input data in text field after make field clear
*/
Cypress.Commands.add('typeTextInField', (loc, index, data) => {
  cy.get(loc).eq(index).clear({ force: true }).type(data)
});

/*
* verify element should not exist on page
*/
Cypress.Commands.add('elementShouldNotExist', (loc) => {
  cy.get(loc).should('not.exist')
    .and('not.be.visible')
});

/*
* verify element should not exist and not visible on page
*/
Cypress.Commands.add('elementShouldNotVisible', (loc) => {
  cy.get(loc).should('not.be.visible');
});

/*
* verify element should be visible on page
*/
Cypress.Commands.add('elementShouldBeVisible', (loc) => {
  cy.get(loc, { timeout: 40000 }).should('be.visible');
});

/*
* verify element should not exist and not visible on page using xpath element selector
*/
Cypress.Commands.add('elementWithXpathShouldNotExist', (loc) => {
  cy.xpath(loc).should('not.exist')
    .and('not.be.visible')
});

/*
* verify collaboration activity using text data
*/
Cypress.Commands.add('verifyCollaborationActivity', (loc, index, id, data) => {
  cy.get(loc).eq(index).find('input').eq(id)
    .should('have.value', data);
});

/*
* verify element should available on page
*/
Cypress.Commands.add('elementShouldExist', (loc) => {
  cy.get(loc, { timeout: 20000 }).should('exist')
    .and('be.visible')
});

/*
* verify element should available on page using xpath element selector
*/
Cypress.Commands.add('elementWithXpathShouldExist', (loc) => {
  cy.xpath(loc, { timeout: 20000 }).should('exist')
    .and('be.visible')
});

/*
* verify text data should available and visible on page
*/
Cypress.Commands.add('textShouldExist', (text) => {
  cy.contains(text, { timeout: 20000 }).should('exist')
    .and('be.visible')
});

/*
* verify blank field on page
*/
Cypress.Commands.add('verifyBlankValue', (loc, index) => {
  cy.get(loc).eq(index).should('not.have.value');
});

/*
* verify null value on page
*/
Cypress.Commands.add('verifyNullValue', (loc, index) => {
  cy.get(loc).eq(index).should('be.empty');
});

/*
* verify form's label name
*/
Cypress.Commands.add('verifyALabelInForm', (loc, index, lebel_text) => {
  cy.get(loc).eq(index).within(() => {
    cy.get('label').should('contain', lebel_text);
  })
});

/*
* verify element on form
*/
Cypress.Commands.add('verifyAnElementInForm', (loc, index, tag, type = 0) => {
  cy.get(loc).eq(index).within(() => {
    if (type)
      cy.get(tag).last().should('have.attr', 'type', type);
    else
      cy.get(tag).should('be.exist');
  })
});

/*
* select the dropdown value using text
*/
Cypress.Commands.add('selectByText', (loc, index, data) => {
  cy.get(loc).eq(index)
    .then(($box) => {
      cy.get($box).select(data)
    });
});

/*
* verify element containing specified data
*/
Cypress.Commands.add('elementShouldContain', (loc, data) => {
  cy.get(loc).contains(data)
});

/*
* verify available value of an attributes
*/
Cypress.Commands.add('verifyattributeValue', (loc, attr, value) => {
  cy.get(loc).should(`have.${attr}`, value)
});

/*
* verify available value of an attributes with an expected value
*/
Cypress.Commands.add('verifyElementAttrValueWithExpect', (loc, atr, value1) => {
  cy.get(loc).invoke('attr', atr).then((value) => {
    expect(value).eq(value1);
  });
});

/*
* fetch a unique value from array
*/
Cypress.Commands.add('getUniqueValueArray', (givenArray, uniqueValueArray) => {
  cy.wrap(givenArray).each((element) => {
    if (!uniqueValueArray.includes(element)) {
      uniqueValueArray.push(element)
    }
  })
});

/*
* verify element value using index
*/
Cypress.Commands.add('verifyElementProperty', (loc, index, value) => {
  return cy.get(loc).eq(index).should(value)
});

/*
* verify element property with multiple parameters using index
*/
Cypress.Commands.add('verifyElementPropertyWithMultipleParameters', (loc, index, value1, value2) => {
  return cy.get(loc).eq(index).should(value1, value2);
});

/*
* verify element property with multiple parameters without using index
*/
Cypress.Commands.add('verifyElementProperty2', (loc, value1, value2) => {
  return cy.get(loc).should(value1, value2);
});

/*
* verify element is not present on page with a specified wait
*/
Cypress.Commands.add('verifyElementNotExistWithWait', (loc) => {
  cy.get(loc).should('not.exist', { timeout: 20000 });
});

/*
* verify the sorting performed alphabetically
*/
Cypress.Commands.add('verifyArraySortingAlphabetically', (loc) => {
  var strings = [];
  cy.get(loc).each(elements => {
    strings.push(elements.text());
  });
  cy.wrap(strings).should('to.deep.eq', strings.sort()); // you may need deep equal here instead
});

/*
* verify the length of any element
*/
Cypress.Commands.add('verifyLengthAtLeast', (loc, value) => {
  cy.wait(2000);
  cy.get(loc).its('length').should('be.at.least', value);
});

/*
* remove any target attribute on an element using index
*/
Cypress.Commands.add('removeAttrOfElementUsingIndex', (loc, index, attr) => {
  cy.get(loc).eq(index).invoke('removeAttr', attr);
});

/*
* update any target attribute on an element
*/
Cypress.Commands.add('updateAttrOfElement', (loc, index, attr, value) => {
  cy.get(loc).eq(index).invoke('attr', attr, value);
});

/*
* upload file of any file extensions
*/
Cypress.Commands.add('uploadFileFunction', (loc, fileName, mimetype) => {
  cy.fixture(fileName, 'binary').then(Cypress.Blob.binaryStringToBlob).then((fileContent) => {
    cy.get(loc).attachFile(
      { fileContent, filePath: fileName, mimetype: mimetype, encoding: 'utf-8' });
  });
});

/*
* verify non-empty elements
*/
Cypress.Commands.add('verfyElementIsNotEmpty', (loc, index) => {
  cy.get(loc).eq(index).should('not.to.empty')
});

/*
* verify the exact length of element
*/
Cypress.Commands.add('verifyLengthOfElementOnUserPage', (loc, value) => {
  cy.wait(2000);
  cy.get(loc).its('length').should('be.eq', value);
});

/*
* click element
*/
Cypress.Commands.add('clickElementWithoutForce', (loc) => {
  cy.get(loc).click();
});

/*
* wait for five seconds
*/
Cypress.Commands.add('waitForFiveSecond',() => {
    cy.wait(5000);
 });

 /*
* wait for two seconds
*/
 Cypress.Commands.add('waitForTwoSecond',() => {
    cy.wait(2000);
 });
 
 /*
* click element with a specified wait
*/
 Cypress.Commands.add("clickElement", (loc) => {
  cy.get(loc,{ timeout:100000 }).click();
});

/*
* click on hidden element with a specified wait
*/
Cypress.Commands.add("clickOnHiddenElement", (loc) => {
  cy.get(loc,{ timeout: 40000 }).click({force:true});
});

/*
* verify element should not exist on page
*/
Cypress.Commands.add("elementNotExistInDOM", (loc) => {
  cy.get(loc).should('not.exist');
});

/*
* verify element should not visible on page
*/
Cypress.Commands.add("elementNotVisibleInDOM", (loc) => {
  cy.get(loc).should("not.visible");
});

/*
* verify element should not exist and not visible on page
*/
Cypress.Commands.add('textShouldNotExist', (text) => {
   cy.contains(text, { timeout: 20000 }).should('not.exist')
    .and('not.be.visible')
});

/*
* verify element should enabled at specified index
*/
Cypress.Commands.add('verifyEnabledButtonsUsingIndex', (loc,index) => {
  cy.get(loc).eq(index).should('be.enabled');
});

/*
* verify element should visible with xpath using index 
*/
Cypress.Commands.add('elementShouldBeVisibleUsingIndex', (loc,index) => {
  cy.xpath(loc).eq(index).should('be.visible');
});

/*
* click on element using text with xpath
*/
Cypress.Commands.add('clickOnElementUsingTextWithXpath', (loc, data) => {
  cy.xpath(loc,{ timeout: 60000 }).should('include.text',data).click({force:true});
});

/*
* click on element to be check
*/
Cypress.Commands.add('elementcheck', (loc,data) => {
  cy.contains(loc, data).find('input').check();
});

/*
* verify element to be disabled
*/
Cypress.Commands.add('disabledBtn', (loc) => {
  cy.get(loc).should('have.attr', 'disabled');
}); 

/*
* verify element should exist on page
*/
Cypress.Commands.add('elementShouldOnlyExist', (loc) => {
  cy.get(loc).should('be.exist')
});

/*
* click on element using index
*/
Cypress.Commands.add('clickUsingCssWithIndex', (loc, index) => {
  cy.get(loc,{ timeout: 20000 }).eq(index).click({ force: true });
});

/*
* verify element should be visible using at specified index
*/
Cypress.Commands.add('elementShouldBeVisibleUsingIndexCss', (loc,index) => {
  cy.get(loc,{ timeout: 20000 }).eq(index).should('be.visible');
});

/*
* verify element should not contain data using xpath
*/
Cypress.Commands.add('verifyElementTextNotContainsWithXpath', (loc, data) => {
  cy.xpath(loc, { timeout: 20000 }).should('not.contain', data);
});

/*
* verify element exist using specified index
*/
Cypress.Commands.add('elementShouldExistUsingIndex', (loc,index) => {
  cy.get(loc,{ timeout: 20000 }).eq(index).should('exist')
    .and('be.visible')
});

/*
* verify element to scroll view using xpath
*/
Cypress.Commands.add('elementWithXpathVisibleIntoView', (loc) => {
  cy.xpath(loc, { timeout: 60000 }).scrollIntoView().should('be.visible');
});

/*
* verify element countt
*/
Cypress.Commands.add('elementLengthCount', (loc, number) => {
  cy.get(loc, { timeout: 20000 }).should('have.length', number);
}); 

/*
* verify element to scroll view using CSS
*/
Cypress.Commands.add('elementWithCssVisibleIntoView', (loc) => {
  cy.get(loc, { timeout: 60000 }).scrollIntoView().should('be.visible');
});

/*
* remove any target attribute on an element and click on it
*/
Cypress.Commands.add('removeAttrOfElement', (loc, attr) => {
  cy.get(loc).invoke('removeAttr', attr)
});

/*
* verify button status as disable using Css element selectors with index
*/
Cypress.Commands.add('verifyDisabledButtonsUsingCssWithIndex', (loc, index) => {
  cy.get(loc, { timeout: 20000 }).eq(index).should('be.disabled');
});