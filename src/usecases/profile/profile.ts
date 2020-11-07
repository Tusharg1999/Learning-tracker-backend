import { Request } from "express";

import { BadRequest } from "../../errors";
import { UpdateProfileParams } from "../../utils/dto";

async function updateUserProfile(req: Request) {
  console.log(_getParamObject(req));
  const params = _getParamObject(req);
  
}
function saveImageInformation(req:Request){

}
function _getParamObject(req: Request) {
  let params: UpdateProfileParams;
  const requestParams = req.body;
  
  if (
    true||
    requestParams.bio.length > 0 ||
    requestParams.firstName.length > 0 ||
    requestParams.lastName.length > 0 ||
    requestParams.age.length > 0 ||
    req.file.filename.length > 0
  ) {
    params = {
      ...requestParams,
    };
  } else {
  }
  return params;
}

async function checkValidParam(req: Request) {
  const params = req.body;
}

export default { checkValidParam, updateUserProfile };
