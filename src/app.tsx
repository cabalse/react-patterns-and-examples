import { useEffect, useState } from "react";
import Modal from "./components/modal";
import Accordion from "./components/accordion";
import { SecureItemList } from "./components/secure-item-list/secure-item-list";
import { useAuthStore } from "./store/use-auth-store";
import { Header } from "./components/header";
import { CenteredColumn } from "./components/layouts/centered-column";
import { SendMessage } from "./components/send-message";
import { MessageListener } from "./components/message-listener";
import { SocketManager } from "./singletons/socket-manager/socket-manager";
import { Plate } from "./components/plate";

function App() {
  const authorized = useAuthStore((state) => state.authorized);
  // const attempts = useAuthStore((state) => state.attempts);

  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    SocketManager.getInstance().connect();

    return () => {
      SocketManager.getInstance().disconnect();
    };
  }, []);

  return (
    <>
      <Modal display={modalVisible}>
        <Modal.Header
          title="Modal Title"
          onClose={() => setModalVisible(false)}
        />
        <Modal.Content>
          <p>This is the content of the modal.</p>
        </Modal.Content>
        <Modal.Footer>
          <Modal.CloseButton
            text="Close"
            onClick={() => setModalVisible(false)}
          />
        </Modal.Footer>
      </Modal>
      <CenteredColumn header={<Header />}>
        <div className="flex flex-col items-center">
          <div className="mt-4 gap-4 flex flex-col">
            <div className="m-2" onClick={() => setModalVisible(true)}>
              Click me button to open a modal.
            </div>
            <Accordion>
              <p>This is the content inside the accordion.</p>
            </Accordion>
            <SecureItemList />
            <div className="flex flex-row gap-2">
              <button
                className="bg-blue-500 text-white p-2 rounded"
                onClick={() => useAuthStore.getState().login("user", "pass")}
              >
                Login
              </button>
              <button
                className="bg-blue-500 text-white p-2 rounded"
                onClick={() => useAuthStore.getState().logout()}
              >
                Logout
              </button>
              <div>{authorized ? "Logged in" : "Logged out"}</div>
            </div>
            <div className="flex flex-col gap-2">
              <SendMessage />
              <MessageListener />
              <MessageListener />
              <MessageListener />
            </div>
            <div className="flex flex-col">
              <Plate />
            </div>
          </div>
        </div>
      </CenteredColumn>
    </>
  );
}

export default App;
