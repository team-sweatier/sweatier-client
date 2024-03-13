export type Response<D = null> =
  | {
      success: true;
      result: D;
      message: null;
    }
  | {
      error: any;
      success: false;
      result: null;
      message: string;
    };
