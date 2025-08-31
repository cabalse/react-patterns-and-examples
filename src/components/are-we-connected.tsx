import { SocketManager } from "../singletons/socket-manager/socket-manager";

export const AreWeConnected = () => {
  const isConnected = SocketManager.getInstance().isConnected();

  return <div>{isConnected ? "Connected" : "Disconnected"}</div>;
};
