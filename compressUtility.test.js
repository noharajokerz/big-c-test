const {compressData, decompressData} = require('./compressUtility')

describe('compressData method', () => {

  it('can compress data from HELLOOO to 1H1E2L3O',()=> {
    const strCompressed = compressData('HELLOOO')
    expect(strCompressed).toBe('1H1E2L3O');
  })

  it('can compress data from BWAAALAAA to 1B1W3A1L3A',()=> {
    const strCompressed = compressData('BWAAALAAA')
    expect(strCompressed).toBe('1B1W3A1L3A');
  })

  it('can compress data from ISEEABEEONMYKNEE to 1I1S2E1A1B2E1O1N1M1Y1K1N2E',()=> {
    const strCompressed = compressData('ISEEABEEONMYKNEE')
    expect(strCompressed).toBe('1I1S2E1A1B2E1O1N1M1Y1K1N2E');
  })
  
});

describe('deCompressdata method', () => {

  it('can compress data from 1H1E2L3O to HELLOOO',()=> {
    const strDeCompressed = decompressData('1H1E2L3O')
    expect(strDeCompressed).toBe('HELLOOO');
  })

  it('can compress data from 1B1W3A1L3A to BWAAALAAA',()=> {
    const strDeCompressed = decompressData('1B1W3A1L3A')
    expect(strDeCompressed).toBe('BWAAALAAA');
  })

  it('can compress data from 1I1S2E1A1B2E1O1N1M1Y1K1N2E to ISEEABEEONMYKNEE',()=> {
    const strDeCompressed = decompressData('1I1S2E1A1B2E1O1N1M1Y1K1N2E')
    expect(strDeCompressed).toBe('ISEEABEEONMYKNEE');
  })
  
});

