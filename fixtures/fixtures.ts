import {test as Base} from "@playwright/test"
import {Login} from "../pages/login";
import {LoggedInDashboard} from "../pages/LoggedInDashboard";

type myFixtures = {

    login:Login,
    logged:LoggedInDashboard
}


export const test = Base.extend<myFixtures>({
    login: async ({page},use)=>{
        use(new Login(page))
    },
    logged: async ({page},use)=>{
        use(new LoggedInDashboard(page))
    }
})
