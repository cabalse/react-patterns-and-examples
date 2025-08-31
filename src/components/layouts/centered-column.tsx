interface Props {
  header: React.ReactNode;
  children: React.ReactNode;
}

export const CenteredColumn = ({ header, children }: Props) => {
  return (
    <div className="">
      {header}
      <div className="flex flex-col items-center justify-center h-screen bg-gray-300">
        {children}
      </div>
    </div>
  );
};
