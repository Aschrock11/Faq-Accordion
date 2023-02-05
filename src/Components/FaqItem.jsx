import { useState } from "react";
import { BiChevronUp, BiChevronDown } from "react-icons/bi"

const FaqItem = function ({ question, answer }) {
    const [isFaqOpen, setIsFaqOpen] = useState(false);

    const dropdownHandler = () => {
        setIsFaqOpen(!isFaqOpen);
    }

    return (
        <div className="QA-components" onClick={dropdownHandler} >
            <div className="faq-question">
                {isFaqOpen ? <h3 style={{ color: "hsl(238, 29%, 16%)" }}>{question}</h3> : <h3>{question}</h3>}
                {isFaqOpen ? <BiChevronUp style={{ color: 'orange' }} size={16} /> : <BiChevronDown style={{ color: 'orange' }}
                    size={16} />}

            </div>
            {isFaqOpen && <p className="faq-answer">{answer}</p>}
        </div>
    )
}
export default FaqItem