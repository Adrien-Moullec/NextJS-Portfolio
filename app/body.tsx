const basePath = process.env.NODE_ENV === 'production'
    ? '/NextJS-Portfolio'
    : '';

type Props = {
    children: React.ReactNode;
};
const Body = ({ children }: Props) => {
    return (
        <div className="bg-gradient-to-tl from-blue-950 to-black">
            {children}
        </div>
    )
}

export default Body;