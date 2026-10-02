import {Page} from '@playwright/test'

export class LoggedInDashboard{
    readonly  page:Page
    constructor(page:Page){
        this.page = page;
    }
    async clickAnyTabNavbar(tabName:string){
        await  this.page.getByRole("link", { name: tabName,exact:true}).first().click()
    }
}

export {expect} from "@playwright/test"