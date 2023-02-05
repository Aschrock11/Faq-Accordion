import FaqItem from "./FaqItem";
import { questionAnswerList } from "./faq-content";

const Faq = function () {
    console.log(questionAnswerList);
    return (
        <div className="faq-container">
            <h1>FAQ</h1>
            {/* <FaqItem question={questionAnswerList[0].question} answer={questionAnswerList[0].answer} />
            <FaqItem question={questionAnswerList[1].question} answer={questionAnswerList[1].answer} />
            <FaqItem question={questionAnswerList[2].question} answer={questionAnswerList[2].answer} />
            <FaqItem question={questionAnswerList[3].question} answer={questionAnswerList[3].answer} />
            <FaqItem question={questionAnswerList[4].question} answer={questionAnswerList[4].answer} /> */}

            {questionAnswerList.map((item) => {
                return (
                    <FaqItem question={item.question} answer={item.answer} />
                )
            })}
        </div>


    )
};
export default Faq