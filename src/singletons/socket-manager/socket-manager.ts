export class SocketManager {
  static instance: SocketManager | null = null;

  connected = false;

  static getInstance() {
    console.log("Getting SocketManager instance");

    if (!SocketManager.instance) {
      console.log("Creating new SocketManager instance");
      SocketManager.instance = new SocketManager();
    }

    return SocketManager.instance;
  }

  constructor() {
    this.connected = false;
  }

  connect() {
    console.log("Connecting to socket...");
    this.connected = true;
  }

  disconnect() {
    console.log("Disconnecting from socket...");
    this.connected = false;
  }

  isConnected() {
    return this.connected;
  }
}
