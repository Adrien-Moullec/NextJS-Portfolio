type Props = {
    children: React.ReactNode;
};

const Body = ({ children }: Props) => {
    return (
        <div className="bg-black">
            <div className=" bg-gradient-to-l from-purple-500 to-indigo-600  mx-[35px]"> {/*SLATE*/}
                <div className="h-15" />
                {children}
                <div className="h-15" />
            </div>
        </div>
    )
}

export default Body;