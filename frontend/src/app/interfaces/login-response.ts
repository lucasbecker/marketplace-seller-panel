export interface ILoginResponse {
  message: string;
  data: {
    token: string;
    user: {
      id: number;
      email: string;
    };
  };
}
