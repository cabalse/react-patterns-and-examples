interface Props {
  children: React.ReactNode;
}

const Footer = ({ children }: Props) => {
  return <div className="flex justify-end p-4">{children}</div>;
};

export default Footer;
