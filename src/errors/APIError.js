export default class APIError extends Error {
  constructor(response, body) {
    super(
      body?.error || `${response.status}, ${response.statusText}`,
    );
    this.name = 'API Error';
    this.response = response;
  }
}
