import { request, Request } from "express";
import { getConnection, getRepository } from "typeorm";
import { ImageStore } from "../../entity/ImageStore";
import { User } from "../../entity/User";

import { ServerError } from "../../errors";
import { UpdateProfileParams } from "../../utils/dto";

async function updateUserProfile(req: Request) {
  const params = _getParamObject(req);
  if (params !== null) {
    await updateInformation(req, params);
  }
  if (req.file !== undefined) {
    await saveImageInformation(req);
  }
}
async function saveImageInformation(req: Request) {
  console.log(req.user);

  const _user = await _getUserWithId(req);
  console.log(_user);

  try {
    if (_user === null) {
      const record = await getConnection()
        .createQueryBuilder()
        .insert()
        .into(ImageStore)
        .values({
          src: req.file.path,
          updateAt: _getTodaysDate(),
          name: req.file.originalname,
        })
        .returning("id")
        .execute();
      await getConnection()
        .createQueryBuilder()
        .update(User)
        .set({
          profileImage: record.identifiers[0].id,
        })
        .where({
          id: req.user,
        })
        .execute();
    }
    if (_user !== null) {
      console.log("ok");
      await getConnection()
        .createQueryBuilder()
        .update(ImageStore)
        .set({
          src: req.file.path,
          updateAt: _getTodaysDate(),
          name: req.file.originalname,
        })
        .where({
          id: _user.profileImage.id,
        })
        .execute();
    }
  } catch (e) {
    throw new ServerError();
  }
}

async function updateInformation(req: Request, params: any) {
  const user = await getConnection()
    .createQueryBuilder()
    .update("User")
    .set({
      ...params,
    })
    .where({
      id: req.user,
    })
    .execute();
  return user;
}
function _getParamObject(req: Request) {
  let params: UpdateProfileParams | null;
  if (req.body.age || req.body.bio || req.body.firstName || req.body.lastName) {
    params = {
      ...req.body,
    };
  } else {
    params = null;
  }
  return params;
}
function _getTodaysDate() {
  let today = new Date();
  let dd = String(today.getDate());
  let mm = String(today.getMonth());
  let yy = String(today.getFullYear());
  return dd + "/" + mm + "/" + yy;
}
async function checkValidParam(req: Request) {
  const params = req.body;
}

async function _getUserWithId(req: Request) {
  try {
    const user = await getConnection()
      .getRepository(User)
      .createQueryBuilder("user")
      .select(["user.id", "user.bio", "profile.id"])
      .leftJoin("user.profileImage", "profile")
      .where({ id: req.user })
      .getOne();
    return user;
  } catch (e) {
    console.log(e);
  }
}

export default { checkValidParam, updateUserProfile };
