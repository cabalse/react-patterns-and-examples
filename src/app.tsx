import { useState } from "react";
import Modal from "./components/modal";
import Accordion from "./components/accordion";
import { SecureItemList } from "./components/secure-item-list/secure-item-list";
import { useAuthStore } from "./store/use-auth-store";

function App() {
  const authorized = useAuthStore((state) => state.authorized);
  // const attempts = useAuthStore((state) => state.attempts);

  const [modalVisible, setModalVisible] = useState(false);

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
      <div className="w-full h-screen flex items-center justify-center bg-gray-300">
        <div className="flex flex-col items-center">
          <h1 className="text-4xl font-bold">React Patterns and Examples</h1>
          <div className="mt-4 gap-4">
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
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
