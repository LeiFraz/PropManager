type AuthenticationError =
  | {
      details: object;
      message: string;
      status: number;
      name: string;
    }
  | any;

export type {AuthenticationError};
