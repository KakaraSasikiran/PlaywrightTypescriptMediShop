import {test,expect} from '@playwright/test'
test.describe("Navigate to MediShop",async ()=>{
    test.beforeEach(async ({page})=>{
        await page.goto("https://www.way2automation.com/MediShopWebApp/login.html")
    })
    test.afterEach(async ({page})=>{
        await  page.pause()
    })
    test("TestOne",async ({page})=>{
        await  expect(page).toHaveTitle("Sign in — MediShop by Way2Automation")
    })
})
