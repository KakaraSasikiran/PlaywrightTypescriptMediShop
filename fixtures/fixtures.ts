import {test as Base} from "@playwright/test"
import {Login} from "../pages/login";

type myFixtures = {

    login:Login
}


export const test = Base.extend<myFixtures>({
    login: async ({page},use)=>{
        use(new Login(page))
    }
})
