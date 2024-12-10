export default function Paragraf(props) {
    const { textsize = "text-lg" , text , bold} = props;
    
    return(
        <p className={`${textsize} ${bold}`}>{text}</p>
    );
}