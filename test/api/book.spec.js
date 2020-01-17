const frisby = require("frisby");

const bookEndpoint = `https://fakerestapi.azurewebsites.net/api/Books`;

describe(`Validate book endpoint`, () => {
    it("Validate the json response from post", () => {
        const id = 2452
        return frisby
            .post(bookEndpoint, {
                "ID": id,
                "Title": "string",
                "Description": "string",
                "PageCount": 0,
                "Excerpt": "string",
                "PublishDate": "2020-01-16T23:58:21.26Z"
            })
            .then(() => {
                return frisby
                    .get(`${bookEndpoint}/${id}`)
            })
    });


    it("Validate the json response from get", () => {
        const id = 3
        return frisby
            .get(`${bookEndpoint}/${id}`)
            .expect("status", 200)
            .expect("json", { ID: id });
    })

});
