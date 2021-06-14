const filterByTerm = require('../src/filterByTerm')


describe("Filter function", ()=> {
    test("It should filter by a search term (link)", () => {
        const input = [
            {id: 1, url: "https://www.url1.dev"},
            {id: 2, url: "https://www.url2.dev"},
            {id: 3, url: "https://www.link3.dev"}
        ]
        
        const output1 = [{id: 3, url: "https://www.link3.dev"}]
        const output2 = [{id: 1, url: "https://www.url1.dev"},
        {id: 2, url: "https://www.url2.dev"}]
        const output3 = [
            {id: 1, url: "https://www.url1.dev"},
            {id: 2, url: "https://www.url2.dev"},
            {id: 3, url: "https://www.link3.dev"}
        ]

        expect(filterByTerm(input, "link")).toEqual(output1)

        expect(filterByTerm(input, "LINK")).toEqual(output1)

        expect(filterByTerm(input, "uRl")).toEqual(output2)

        expect(filterByTerm(input, "")).toEqual(output3)
    })
})