import CloseButton from "./close-button";
import Content from "./content";
import Footer from "./footer";
import Header from "./header";

interface Props {
  display?: boolean;
  children: React.ReactNode;
}

const Modal = ({ display, children }: Props) => {
  if (!display) return null;

  const Overlay = ({ children }: { children: React.ReactNode }) => {
    return (
      <div
        data-testid="overlay"
        className="fixed inset-0 bg-slate-500/50 flex items-center justify-center z-50"
      >
        {children}
      </div>
    );
  };

  const ModalLayout = ({ children }: { children: React.ReactNode }) => {
    return (
      <div
        data-testid="modal"
        className="bg-white rounded-lg shadow-xl max-w-md w-full m-4 max-h-[90vh] overflow-hidden"
      >
        {children}
      </div>
    );
  };

  return (
    <Overlay>
      <ModalLayout>{children}</ModalLayout>
    </Overlay>
  );
};

Modal.Header = Header;
Modal.CloseButton = CloseButton;
Modal.Content = Content;
Modal.Footer = Footer;

export default Modal;
