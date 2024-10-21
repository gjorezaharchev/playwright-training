// @ts-check
import {test, expect} from "@playwright/test"

test("Get pet by status available", async({request, baseURL}) => {
    

    // getting the details of the pet using petid
    const getPet = await request.get(`${baseURL}pet/findByStatus?status=available`);

    console.log(await getPet.json());
    // assert that the api is working as expected
    expect(getPet.ok()).toBeTruthy();
    expect(getPet.status()).toBe(200);

});