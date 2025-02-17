export interface ILoginResponse {
  token: string; // Token otentikasi yang diberikan setelah login berhasil
  user: {
    id: number;
    name: string;
    email: string;
    role: string;
  };
}
