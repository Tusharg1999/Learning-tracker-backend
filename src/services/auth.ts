import {Request} from 'express'
import { emailChecker } from '../usecases/auth/existenceChecker'
import { SuccessResult } from '../utils/appResult';
import { runCatchingWithResult } from '../utils/appUtils'

async function register(req:Request) {
   return await runCatchingWithResult(async ()=>{
       await emailChecker(req.body.email);

       return new SuccessResult("hi")
   })
}

export default {register};