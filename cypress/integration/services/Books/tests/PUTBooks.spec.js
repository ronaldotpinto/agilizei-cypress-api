import * as PUTbooks from '../requests/PUTBooks.request'
import * as GETBooks from '../requests/GETBooks.request'
import * as POSTBooks from '../requests/POSTBooks.request'

describe('PUT Books', () => {
    it('Alterar o primeiro livro da lista', () => {
        GETBooks.allBooks().then((responseAllBooks) => {
            PUTbooks.updateBook(responseAllBooks.body[0].id).should((responseUpdateBook) => {
                expect(responseUpdateBook.status).to.eq(200);
                expect(responseUpdateBook.body).to.be.not.null;
                expect(responseUpdateBook.body.title).to.eq('Livro Alteraddo');
            })
        })
    });

    it('Criar e alterar um livro', () => {
        POSTBooks.addBook().then((responseAddBooks) => {
            PUTbooks.updateBook(responseAddBooks.body.id).should((responseUpdateBook) => {
                expect(responseUpdateBook.status).to.eq(200);
                expect(responseUpdateBook.body).to.be.not.null;
                expect(responseUpdateBook.body.title).to.eq('Livro Alteraddo');
            })
        })
    });
});