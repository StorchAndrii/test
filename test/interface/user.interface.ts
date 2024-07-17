export interface IUser {
  name: {
    first: string;
    last: string;
  };
  dob: {
    age: number;
  };
  phone: string;
  email: string;
  id: {
    value: "405-88-3636";
  };
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };
}
