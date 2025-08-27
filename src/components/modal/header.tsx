import CloseButton from "./close-button";

interface Props {
  title: string;
  onClose?: () => void;
}

const Header = ({ title, onClose }: Props) => {
  return (
    <header className="bg-blue-800 text-white p-4 flex justify-between items-center">
      <h1 className="text-xl">{title}</h1>
      {onClose && <CloseButton text="×" onClick={onClose} />}
    </header>
  );
};

export default Header;
