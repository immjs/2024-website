export class HTTPError extends Error {
  httpCode: number;
  constructor(httpCode: number, errorMessage: string) {
    super(errorMessage);
    this.httpCode = httpCode;
  }

  static from(err: Error): HTTPError {
    if (err instanceof HTTPError) {
      return err;
    }
    return new HTTPError(500, err.message);
  }
}
