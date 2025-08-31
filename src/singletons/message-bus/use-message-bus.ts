import { useEffect } from "react";
import { messageBus } from "./message-bus";

export const useMessageBus = (
  eventName: string,
  callback?: (message: string) => void
) => {
  useEffect(() => {
    const unsubscribe = messageBus.subscribe(eventName, callback);
    return unsubscribe;
  });

  return {
    publish: (message: string) => messageBus.publish(eventName, message),
  };
};
