import React, {useState, useEffect} from 'react';
import ReactMarkdown from 'react-markdown'


const MD_Functional = () => {

    const [mdText, setMdText] = useState('');

    useEffect(() => {
        fetch("https://raw.githubusercontent.com/Beamanator/fdi/master/README.md")
            .then((response) => {
                if (response.ok) return response.text();
                else return Promise.reject("Didn't fetch text correctly");
            })
            .then((text) => {
                setMdText(text);
                console.log(mdText)
            })
            .catch((error) => console.error(error));
    });


    return (
        <>
            <h1>jjjj</h1>
                <ReactMarkdown children={mdText} />
            </>
    );
};

export default MD_Functional;