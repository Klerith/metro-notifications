export class Notification {
  constructor(
    private message: string,
    private type: 'info' | 'warning' | 'error'
  ) {}

  send() {
    console.log(
      `%c[${this.type.toUpperCase()}]: %c${this.message}`,
      'color: white; background-color: green; padding: 5px; border-radius: 5px;',
      'color: white; background-color: blue; padding: 5px; border-radius: 5px;'
    );
  }
}
