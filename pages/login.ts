import {Locator, Page} from '@playwright/test'


export class Login{
    readonly email:Locator
    readonly  password:Locator
    readonly remember_me:Locator
    readonly  sign_in:Locator
    readonly  page:Page
    constructor(page:Page){
      this.page = page
        this.email = page.getByPlaceholder("you@clinic.com").first()
        this.password = page.getByPlaceholder("Enter your password")
        this.remember_me = page.getByRole("checkbox",{name:'Remember me'})
        this.sign_in = page.getByRole("button",{name:'Sign in'})
    }
    async setEmail(emailId:string){
        await this.email.fill(emailId)
    }
    async  setPassword(password:string){
        await  this.password.fill(password)
        await  this.remember_me.click()
        await  this.sign_in.click()
    }

}
export {expect}from "@playwright/test"