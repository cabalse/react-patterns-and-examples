interface Props {
  text: string;
  onClick?: () => void;
}

const CloseButton = ({ text, onClick }: Props) => {
  return (
    <button className="" onClick={onClick}>
      {text}
    </button>
  );
};

export default CloseButton;
