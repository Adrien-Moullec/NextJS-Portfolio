
interface TextInfo {
    text: string;
    className: string;
}

const DisplayParagraphs: React.FC<TextInfo> = ({ text, className }) => {
    return (
        <p className={className}>
            {text.split("\n").map((line, index) => (
                <span key={index}>
                    {line}
                    <br />
                </span>
            ))}
        </p>
    )
}

export default DisplayParagraphs