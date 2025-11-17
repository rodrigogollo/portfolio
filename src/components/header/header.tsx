type HeaderProps = {
  title: string;
  desc: string;
};
const Header = ({ title, desc }: HeaderProps) => {
  return (
    <div>
      <h1 className="text-3xl font-bold tracking-tight text-foreground">
        {title}
      </h1>
      <p className="text-muted-foreground text-lg mt-2">{desc}</p>
    </div>
  );
};

export default Header;
