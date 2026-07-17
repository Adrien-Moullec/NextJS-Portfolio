type Props = {
    children: React.ReactNode;
};

const Body = ({ children }: Props) => {
    return (
        <div className="bg-black">
            <div className="bg-gradient-to-tl from-blue-900 to-indigo-800 mx-[35px]"> {/*SLATE*/}
                <div className="h-15" />
                {children}
                <div className="h-15" />
            </div>
        </div>
    )
}

export default Body;