import { useState } from "react";
import { useMessageBus } from "../singletons/message-bus/use-message-bus";

export const MessageListener = () => {
  const [message, setMessage] = useState<string>("");
  useMessageBus("message", (message: string) => setMessage(message));

  return <div className="flex flex-row">Message: {message}</div>;
};
