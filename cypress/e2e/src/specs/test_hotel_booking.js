/// <reference types="Cypress" />

import { HomePage } from "../pageObjects/homePage";
const homePage = new HomePage;

describe('Test Suite for Hotel Booking App', function() 
{

beforeEach(() => { 
// Visit the URL and reload before each test
    cy.visit('')
    cy.reload()
})

let data;
before(function() {
    // Load test data from fixture file
    cy.fixture('data').then((fdata) => {
        data = fdata
    }
    );   
});

it('Verify if the tool calculates occupancy correctly with standard input.',function() {
    // Test steps...

     // Set input values and click calculate button
    homePage.getInputField(0).clear().type(data.TestData1[0])
    homePage.getInputField(1).clear().type(data.TestData1[1])
    homePage.getCalculateOccupancyButton().click();

    // Verify expected results
    homePage.getFreePremiumRoomsField().should('have.text',data.expectedResult[0])
    homePage.getFreeEconomyRoomsField().should('have.text',data.expectedResult[1])
    homePage.getUsagePremiumField().should('have.text',data.expectedResult[2])
    homePage.getUsageEconomyField().should('have.text',data.expectedResult[3])

}  )

it('Verify if excess premium guests are handled correctly.', function(){
    // Test steps...

     // Set input values and click calculate button
    homePage.getInputField(0).click().type(data.TestData2[0])
    homePage.getInputField(1).click().type(data.TestData2[1])
    homePage.getCalculateOccupancyButton().click();
    
    // Verify expected results
    homePage.getFreePremiumRoomsField().should('have.text',data.expectedResult2[0])
    homePage.getFreeEconomyRoomsField().should('have.text',data.expectedResult2[1])
    homePage.getUsagePremiumField().should('have.text',data.expectedResult2[2])
    homePage.getUsageEconomyField().should('have.text',data.expectedResult2[3])

})

it('Verify if the highest paying economy guests are upgraded to premium when possible', function(){

    // Test steps...

    // Set input values and click calculate button
    homePage.getInputField(0).click().type(data.TestData3[0])
    homePage.getInputField(1).click().type(data.TestData3[1])
    homePage.getCalculateOccupancyButton().click();

    // Verify expected results
    homePage.getFreePremiumRoomsField().should('have.text',data.expectedResult3[0])
    homePage.getFreeEconomyRoomsField().should('have.text',data.expectedResult3[1])
    homePage.getUsagePremiumField().should('have.text',data.expectedResult3[2])
    homePage.getUsageEconomyField().should('have.text',data.expectedResult3[3])
})

it('Verify economy customers are not upgraded to premium rooms if economy rooms are available',function(){

    // Test steps...

    // Set input values and click calculate button
    homePage.getInputField(0).click().type(data.TestData4[0])
    homePage.getInputField(1).click().type(data.TestData4[1])
    homePage.getCalculateOccupancyButton().click();

    homePage.getFreePremiumRoomsField().should('have.text',data.expectedResult4[0])
    homePage.getFreeEconomyRoomsField().should('have.text',data.expectedResult4[1])
    homePage.getUsagePremiumField().should('have.text',data.expectedResult4[2])
    homePage.getUsageEconomyField().should('have.text',data.expectedResult4[3])

})

it('Verify that guests willing to pay EUR 100 or more are not allocated to economy rooms', function(){

    // Test steps...

    // Set input values and click calculate button
    homePage.getInputField(0).click().type(data.TestData2[0])
    homePage.getInputField(1).click().type(data.TestData2[1])
    homePage.getCalculateOccupancyButton().click();

    // Verify expected results
    homePage.getFreePremiumRoomsField().should('have.text',data.expectedResult2[0])
    homePage.getFreeEconomyRoomsField().should('have.text',data.expectedResult2[1])
    homePage.getUsagePremiumField().should('have.text',data.expectedResult2[2])
    homePage.getUsageEconomyField().should('have.text',data.expectedResult2[3])

})

it('Verify the behavior when no rooms are available', function(){

    // Test steps...

    // Set input values and click calculate button

    homePage.getInputField(0).click().type(data.TestData5[0])
    homePage.getInputField(1).click().type(data.TestData5[1])
    homePage.getCalculateOccupancyButton().click();

    // Verify expected results
    homePage.getFreePremiumRoomsField().should('have.text',data.expectedResult5[0])
    homePage.getFreeEconomyRoomsField().should('have.text',data.expectedResult5[1])
    homePage.getUsagePremiumField().should('have.text',data.expectedResult5[2])
    homePage.getUsageEconomyField().should('have.text',data.expectedResult5[3])

})
 
}  )