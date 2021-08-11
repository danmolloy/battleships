describe("<App /> renders", () => {
  beforeEach(() => {
    cy.visit('/')
  })
  it('Renders <Header />', () => {
    cy.get('#header')
  })
  it('Renders <CPUShips />', () => {
    cy.get("#cpu-ships")
  })
  it("Renders <PlayerShips />", () => {
    cy.get("#player-ships")
  })
})

describe("<Header />", () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Renders Header component', () => {
    cy.get('.header')
      .should('contain', "Battleships")
  })

  it('state.game.InGame == false, therefore button value is "Start"', () => {
    cy.get('button')
      .should('contain', 'Start')
  })

  it('state.game.turn == null, therefore turn is not declared', () => {
    cy.get('.status')
      .should('not.have.text', 'turn')
  })
})

describe("<CPUShips /> ", () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it("Renders CPUShips component", () => {
    cy.get('#cpu-ships')
      .should('contain', 'CPU Ships')
  })

  it("Should render 100 squares", () => {
    cy.get('#cpu-ships .square')
      .should('have.length', 100)
  })

  it("Squares should have value of null", () => {
    cy.get('#cpu-ships .square')
    // assertion needed
  })

  it("Shots taken should equal 0", () => {
    
  })

  it("boardSet should equal false", () => {

  })

})

describe("<PlayerShips />", () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it("Renders PlayerShips component", () => {
    cy.get('#player-ships')
      .should('contain', 'Player Ships')
  })

  it("Should render 100 squares", () => {
    cy.get('#player-ships .square')
      .should('have.length', 100)
  })

  it("Squares should have value of null", () => {
    cy.get('#player-ships .squares')
  })

  it("Shots taken should equal 0", () => {

  })

  it("boardSet should equal false", () => {
    
  })

  it("currentAttack should equal null", () => {
    
  })
})

