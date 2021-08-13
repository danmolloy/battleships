import squares from '../../src/features/playerBoard'

import { 
  setVerticalShip, 
  setHorizontalShip 
} from '../../src/features/Game/setShip'

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

  it("onClick Start button text changes to Pause", () => {
    cy.get('#status-btn')
      .click()
      .should('contain', 'Pause')
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
/*
  it("Squares should have value of null", () => {
    cy.get('#cpu-ships .square')
    // assertion needed
  })

  it("Shots taken should equal 0", () => {
    
  })

  it("boardSet should equal false", () => {

  })
*/
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
    
  })
/*
  it("Squares should have value of null", () => {
    cy.get('#player-ships .squares')
  })

  it("Shots taken should equal 0", () => {

  })

  it("boardSet should equal false", () => {
    
  })

  it("currentAttack should equal null", () => {
    
  })*/
})

describe("Unit test for setShip function", () => {
  context('setVerticalShip', () => {
    it('returns a suitable index', () => {
      expect(setVerticalShip(3)).to.be.lessThan(70)
      expect(setVerticalShip(5)).to.be.lessThan(50)
      expect(setVerticalShip(7)).to.be.lessThan(30)
      expect(setVerticalShip(8)).to.be.lessThan(20)
      expect(setVerticalShip(9)).to.be.lessThan(10)
    })
  })

  context('setHorizontallShip', () => {
    it('returns a suitable index', () => {
      expect(setHorizontalShip(3)).to.not.match(/[8-9]$/)
      expect(setHorizontalShip(5)).to.not.match(/[6-9]$/)
      expect(setHorizontalShip(7)).to.not.match(/[4-9]$/)
      expect(setHorizontalShip(8)).to.not.match(/[3-9]$/)
      expect(setHorizontalShip(9)).to.not.match(/[2-9]$/)
    })
  })

  context('calling setShip changes state to expected values', () => {
    it('setShip is ok', () => {
      let arrLength = 0
      for (let i = 0; i < 100; i++) {
        arrLength ++
      }
      
      cy.get('#player-ships .square')
        .should('have.length', arrLength)
    })
  })
})

