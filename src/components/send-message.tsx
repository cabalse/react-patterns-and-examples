import { useRef } from "react";
import { useMessageBus } from "../singletons/message-bus/use-message-bus";

export const SendMessage = () => {
  const ref = useRef<HTMLInputElement>(null);
  const { publish } = useMessageBus("message");

  return (
    <div className="flex flex-row gap-2">
      <input ref={ref} type="text" placeholder="Enter your message" />
      <button onClick={() => publish(ref.current!.value)}>Send Message</button>
    </div>
  );
};
