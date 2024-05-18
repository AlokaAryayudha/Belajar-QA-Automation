describe('template spec', () => {
  beforeEach(() => {
    cy.visit('https://demowebshop.tricentis.com/register')
    
  })
  it('Failed Regist - Wrong Credentials', () => {
    cy.visit('https://demowebshop.tricentis.com/register')
    cy.get('.ico-register').click()
    cy.get('#gender-male').click()
    cy.get('#FirstName').type('Yudha')
    cy.get('#LastName').type('dayut')
    cy.get('#Email').type('Dayut#gmail.com')
    cy.get('#Password').type('1234567')
    cy.get('#ConfirmPassword').type('1234567')
    cy.get('#register-button').click()
    cy.get('.field-validation-error > span').should('contain.text','Wrong email')
  })
  it('Empty Form - First Name', () => {
    cy.visit('https://demowebshop.tricentis.com/register')
    cy.get('.ico-register').click()
    cy.get('#gender-male').click()
    cy.get('#LastName').type('yuda')
    cy.get('#Email').type('Dayut@gmail.com')
    cy.get('#Password').type('1234567')
    cy.get('#ConfirmPassword').type('1234567')
    cy.get('#register-button').click()
    cy.get('.field-validation-error > span').should('contain.text','First name is required.')
  })
  it('Empty Form - Last Name', () => {
    cy.visit('https://demowebshop.tricentis.com/register')
    cy.get('.ico-register').click()
    cy.get('#gender-male').click()
    cy.get('#FirstName').type('Yudha')
    cy.get('#Email').type('Dayut@gmail.com')
    cy.get('#Password').type('1234567')
    cy.get('#ConfirmPassword').type('1234567')
    cy.get('#register-button').click()
    cy.get('.field-validation-error > span').should('contain.text','Last name is required.')
  })
  it('Password 5 Char', () => {
    cy.visit('https://demowebshop.tricentis.com/register')
    cy.get('.ico-register').click()
    cy.get('#gender-male').click()
    cy.get('#FirstName').type('Yudha')
    cy.get('#LastName').type('yuda')
    cy.get('#Email').type('Dayut@gmail.com')
    cy.get('#Password').type('12345')
    cy.get('#ConfirmPassword').type('12345')
    cy.get('#register-button').click()
    cy.get('.field-validation-error > span').should('contain.text','The password should have at least 6 characters.')
  })
  it('Password do not match', () => {
    cy.visit('https://demowebshop.tricentis.com/register')
    cy.get('.ico-register').click()
    cy.get('#gender-male').click()
    cy.get('#FirstName').type('Yudha')
    cy.get('#LastName').type('yuda')
    cy.get('#Email').type('Dayut@gmail.com')
    cy.get('#Password').type('123456')
    cy.get('#ConfirmPassword').type('123457')
    cy.get('#register-button').click()
    cy.get('.field-validation-error > span').should('contain.text','The password and confirmation password do not match')
  })
  it('Success Regist - Without gender', () => {
    cy.visit('https://demowebshop.tricentis.com/register')
    cy.get('#FirstName').type('Yudha')
    cy.get('#LastName').type('dayut')
    cy.get('#Email').type('Dayut@gmail.com')
    cy.get('#Password').type('1234567')
    cy.get('#ConfirmPassword').type('1234567')
    cy.get('#register-button').click()
    cy.url().should('include','registerresult')
  })
  it('Filed Login - Email Already Exists', () => {
    cy.visit('https://demowebshop.tricentis.com/register')
    cy.get('#FirstName').type('Yudha')
    cy.get('#LastName').type('dayut')
    cy.get('#Email').type('Dayut@gmail.com')
    cy.get('#Password').type('1234567')
    cy.get('#ConfirmPassword').type('1234567')
    cy.get('#register-button').click()
    cy.get('.validation-summary-errors > ul > li').should('contain.text','The specified email already exists')
  })
  it('Success Regist', () => {
    cy.visit('https://demowebshop.tricentis.com/register')
    cy.get('.ico-register').click()
    cy.get('#gender-male').click()
    cy.get('#FirstName').type('Yudha')
    cy.get('#LastName').type('dayut')
    cy.get('#Email').type('Dayut1@gmail.com')
    cy.get('#Password').type('1234567') 
    cy.get('#ConfirmPassword').type('1234567')
    cy.get('#register-button').click()
    cy.url().should('include','registerresult')
  })
})