// format passed array
export const FormattedArray = ({ arr }) => {
    const arrJSX = arr.map((item, index) => (
        // display each line on a new line
        <li key={index}>{item}</li>
    ));
    // return formatted jsx
    return <ul>{arrJSX}</ul>;
}
