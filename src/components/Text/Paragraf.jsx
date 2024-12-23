export default function Paragraf(props) {
    const { textsize = "text-md" , text , bold} = props;
    
    return(
        <p className={`${textsize} ${bold}`}>{text}</p>
    );
}