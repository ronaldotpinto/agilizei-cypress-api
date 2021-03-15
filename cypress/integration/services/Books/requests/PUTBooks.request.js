/// <reference types="cypress" />

const payloadUpdateBook = require('../payloads/update-book.json');

function updateBook(idBook) {
    return cy.request({
        method: 'PUT',
        url: `Books/${idBook}`,
        headers: {
            'Content-Type': 'application/json; v=1.0'
        },
        failOnStatusCode: false,
        body: payloadUpdateBook
    })
}

export { updateBook };