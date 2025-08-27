interface Props {
  children: React.ReactNode;
}

const Content = ({ children }: Props) => {
  return <div className="m-4">{children}</div>;
};

export default Content;
