class MessageBus {
  events: { [key: string]: Array<(message: string) => void> } = {};

  constructor() {
    this.events = {};
  }

  subscribe(event: string, callback?: (message: string) => void) {
    if (!this.events[event]) {
      this.events[event] = [];
    }

    if (callback) {
      const index = this.events[event].push(callback) - 1;

      return () => {
        this.events[event].splice(index, 1);
      };
    }
  }

  publish(event: string, data: string) {
    if (this.events[event]) {
      this.events[event].forEach((callback) => {
        if (callback) {
          callback(data);
        }
      });
    }
  }
}

export const messageBus = new MessageBus();
