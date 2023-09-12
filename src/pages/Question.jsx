import React, { useState } from 'react';
import logo from '../assets/question-logo.svg';
import congrats from '../assets/congrat.png';
import { Button, Progress } from '../components';
import { quizes } from '../data';
import { useNavigate } from 'react-router-dom';

const Question = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [progress, setProgress] = useState(4.8);
  const [showCongrats, setShowCongrats] = useState(false);
  const [answers, setAnswers] = useState([]);
  const [choicedId, setChoicedId] = useState('');
  const [checked, setChecked] = useState(false);
  const quiz = quizes[currentQuestion];
  const quizMax = quizes.at(-1).id - 1;
  let array = [];

  quizes.forEach(element => {
    array.push(element.category);
  });

  const uniqueArr = [...new Set(array)];

  const handleSubmit = e => {
    e.preventDefault();

    const answer = quiz.answers.find(el => el.id == choicedId && el.answer_status == true);

    setCurrentQuestion(state => state + 1);

    if (answer) {
      setProgress(state => (state += 100 / quizes.length));
      setAnswers([...answers, quiz.category]);
    }

    // Reset the checked and choicedId states here
    setChecked(false);
    setChoicedId('');

    if (quizMax == currentQuestion) setShowCongrats(true);
  };

  return (
    <div className='pt-[60px] pb-[50px] px-[15px] bg-[#000B23] bg-[url(./assets/quiz-bg.png)] bg-cover h-full min-h-screen w-full'>
      <div className='mb-[51px] w-full flex items-center justify-center '>
        <img src={logo} alt='question logo' />
      </div>
      <Progress progress={progress} setProgress={setProgress} />

      <div className='mt-[46px] px-5 font-[Gilroy]'>
        {showCongrats ? (
          <>
            <h2 className='text-[24px] text-white font-semibold text-center'>Успех!</h2>
            <h3 className='text-base font-bold text-white capitalize mt-[24px] text-center'>
              Ты дошел до {progress == 100 ? 'конца' : Math.round(progress) + '%'}! Твои результаты следующие:
            </h3>
            <ul className='list-decimal text-white'>
              {uniqueArr.map((categ, i) => (
                <li key={i}>
                  {categ} ({answers.filter(ans => ans == categ).length})
                </li>
              ))}
            </ul>
            <div className='w-full text-center flex items-center justify-center flex-col gap-[100px] mt-[42px]'>
              <img src={congrats} alt='' />
              <Button type={'submit'} text={'Далее'} disabled={true} />
            </div>
          </>
        ) : (
          <>
            <h2 className='text-[24px] text-white font-semibold '>{quiz.id} Вопрос</h2>
            <h3 className='text-base font-bold text-white capitalize mt-[24px]'>{quiz.question_title}</h3>
            <form action='' className='flex flex-col mt-[57px] gap-[39px]' onSubmit={handleSubmit}>
              {quiz.answers.map((ans, i) => (
                <div className='text-white flex items-center gap-[16px]' key={i}>
                  <div className='mt-0.5'>
                    <input
                      type='radio'
                      name='a'
                      id={ans.id}
                      onChange={e => {
                        setChecked(true);
                        setChoicedId(e.target.id);
                      }}
                      className='checked:bg-[#F2F6FF] bg-[#A4A0A0]'
                      checked={choicedId === ans.id} // Add this line to control the checked state
                    />
                  </div>
                  <label htmlFor={ans.id}>
                    <span className='uppercase'>{ans.id}</span> {ans.answer}
                  </label>
                </div>
              ))}
              <div className='w-full text-center'>
                <Button type={'submit'} text={'Далее'} disabled={!checked} />
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default Question;
