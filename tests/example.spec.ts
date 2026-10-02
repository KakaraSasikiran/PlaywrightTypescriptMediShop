import {test} from '../fixtures/fixtures'
import {expect} from '@playwright/test'
test.describe("Navigate to MediShop",()=>{
    test.beforeEach(async ({page})=>{
        await page.goto("https://www.way2automation.com/MediShopWebApp/login.html")
        // await  login.setEmail("trainer@way2automation.com")
        // await  login.setPassword("way2automation")
        // await  expect(page).toHaveURL("https://www.way2automation.com/MediShopWebApp/home.html")
        // await  context.storageState({opfs:true,path:'log.json',credentials:true,indexedDB:false})
    })
    test.afterEach(async ({page})=>{
        await  page.pause()
    })
    test.skip("TestOne",async ({page})=>{
        await  expect(page).toHaveTitle("Sign in — MediShop by Way2Automation")

    })
    test("Performing Actions with LoggedIn Dashboard",async ({logged})=>{
            await  logged.clickAnyTabNavbar("Wellness")
    })
})
