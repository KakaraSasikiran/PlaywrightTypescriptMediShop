import {test} from '../fixtures/fixtures'
import {expect} from '@playwright/test'
test.describe("Navigate to MediShop",async ()=>{
    test.beforeEach(async ({page})=>{
        await page.goto("https://www.way2automation.com/MediShopWebApp/login.html")
    })
    test.afterEach(async ({page})=>{
        await  page.pause()
    })
    test.skip("TestOne",async ({page,login,context})=>{
        await  expect(page).toHaveTitle("Sign in — MediShop by Way2Automation")
        await  login.setEmail("trainer@way2automation.com")
        await  login.setPassword("way2automation")
        await  expect(page).toHaveURL("https://www.way2automation.com/MediShopWebApp/home.html")
        await  context.storageState({opfs:true,path:'log.json',credentials:true,indexedDB:false})
    })
    test("TestTwo",async ({})=>{

    })
})
