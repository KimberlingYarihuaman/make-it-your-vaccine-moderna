import localesMapping from '../../../fixtures/miyv/miyv-us/locales_mapping.json';
import 'cypress-each'

describe('MIYV:US - Status Codes Check', () => {

    describe.each(localesMapping.mapping)((locale) => { return `${locale.code} - ${locale.page} - Status Code Tests` }, (locale) => {

        it(`User Lands On "${locale.page}" Link Without Any Issue`, () => {

            const localeUrl = '/' + locale.code + locale.url

            cy.request({url: localeUrl}).then((resp) => {
                expect(resp.status).to.equal(200)
            })
        })
    })
});