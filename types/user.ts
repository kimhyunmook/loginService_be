export type User = {
  id: string;
  email: string;
  password: string;
  profil: string;
  createAt: Date;
  updateAt?: Date;
  avatar?: any[];
};
