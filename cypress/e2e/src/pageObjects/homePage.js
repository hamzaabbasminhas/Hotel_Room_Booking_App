/// <reference types="cypress" />

export class HomePage{

    getInputField(number){
        return cy.get('[type="number"]').eq(number)
    }

    getCalculateOccupancyButton(){
        return cy.get('[type="submit"]').click()
    }

    getFreePremiumRoomsField(){
        return cy.contains('Free Premium rooms:')
    }

    getFreeEconomyRoomsField(){
        return cy.contains('Free Economy rooms:')
    }

    getUsagePremiumField(){
        return cy.contains('Usage Premium:')
    }

    getUsageEconomyField(){
       return cy.contains('Usage Economy:')
    }
}