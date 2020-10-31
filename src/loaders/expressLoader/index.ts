import {Express,urlencoded,json} from 'express'
import cors from 'cors'
import helmet from 'helmet'

function expressLoader(app:Express){
app.use(cors());
app.use(helmet());

app.use(json());
app.use(urlencoded({ extended: false }));
}
export {expressLoader}
