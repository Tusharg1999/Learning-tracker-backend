interface BaseDecodedToken {
  id: string;
  email: string;
  username: string;
  firstName: string;
  lastName: string;
  age: number;
}

interface UpdateProfileParams {
  firstName?: string;
  lastName?: string;
  age?: number;
  bio?:string,
  imageUrl?:string
}

export { BaseDecodedToken,UpdateProfileParams };
