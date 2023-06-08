describe('BOC Forex Conversions', () => {

  it('retrieves the last 10 weeks of CAD to AUD exchange rates', () => {
    cy.api({
      method: 'GET',
      url: '/FXCADAUD?recent_weeks=10'
    })
     .then( ({ body }) => {

       const observationsCount = (body.observations).length;
       const allRecentRates = [];       
       const exchangeCode = 'FXCADAUD';
       const exchangeDescription = 'Canadian dollar to Australian dollar daily exchange rate'

      for (let i = 0; i < observationsCount; i += 1) {
        let currentRate = body.observations[i].FXCADAUD.v;
        let convertedCurrentRate = currentRate * 10000;
        allRecentRates.push(convertedCurrentRate);
      }

      cy.calculateRateAvg(allRecentRates, observationsCount).then(( avg ) => {
        cy.log(avg);
      })
      
      //assertions
      expect(body.terms).to.exist;
      expect(body.terms).to.have.key('url')
      expect(body.terms.url).to.be.a('string')
      expect(body.terms.url).to.equal('https://www.bankofcanada.ca/terms/')

      expect(body.seriesDetail).to.exist;
      expect(body.seriesDetail).to.have.key(exchangeCode)
      expect(body.seriesDetail.FXCADAUD).to.have.keys(['label', 'description', 'dimension'])
      expect(body.seriesDetail.FXCADAUD.label).to.equal('CAD/AUD')
      expect(body.seriesDetail.FXCADAUD.description).to.equal(exchangeDescription)
      expect(body.seriesDetail.FXCADAUD.dimension).to.have.keys(['key', 'name'])
      expect(body.seriesDetail.FXCADAUD.dimension.key).to.equal('d')
      expect(body.seriesDetail.FXCADAUD.dimension.name).to.equal('Date')
      
      for (let i = 0; i < observationsCount; i+=1) {
        expect(body.observations[i]).to.have.keys(['d', exchangeCode])
        expect(body.observations[i]).to.not.be.null
      }
    })
  })
})