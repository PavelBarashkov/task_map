/* eslint-disable linebreak-style */
export default class ErrorRepository {
  constructor() {
    this.errors = new Map([
      [404, 'Сервер не отвечает'],
      [400, 'плохой запрос'],
      [403, 'сервер понял запрос, но отказывается его авторизовать'],
    ]);
  }

  // по коду получить текст ошибки
  translate(code) {
    if (this.errors.has(code)) {
      return this.errors.get(code);
    }
    throw new Error('Unknown error');
  }
}
