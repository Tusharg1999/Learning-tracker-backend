interface BaseDecodedToken {
  id: string;
  email: string;
  username: string;
  firstName: string;
  lastName: string;
  age: string;
}

interface UpdateProfileParams {
  firstName?: string;
  lastName?: string;
  age?: string;
  bio?: string;
  imageUrl?: string;
}

export { BaseDecodedToken, UpdateProfileParams };
