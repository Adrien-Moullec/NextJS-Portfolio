const basePath = process.env.NODE_ENV === 'production'
    ? '/NextJS-Portfolio'
    : '';

type Props = {
    children: React.ReactNode;
};
const Body = ({ children }: Props) => {
    return (
        <div className="bg-black">
            <div className="bg-gradient-to-tl from-blue-950 to-black mx-[35px]">
                <div className="h-20" />
                {children}
                <div className="h-20" />
            </div>
        </div>
    )
}

export default Body;