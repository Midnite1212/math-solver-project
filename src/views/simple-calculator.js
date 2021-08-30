import { useState } from 'react';
import { evaluate } from 'mathjs'
import DisplayScreen from '../components/DisplayScreen'
import ShowButtons from '../components/ShowButtons'
import ErrorComponent from '../components/ErrorComponent'
import {simpleTitle} from '../components/Title'
import '../styles/calculator.scss'

const SimpleCalculator = () => {
  const calcExpression = {
    displayExpression: '',
    displayValue: 0,
    showError: false
  }
  
  const [calcExp, setCalcExp] = useState(calcExpression)

  const computeValue = () => {
    setCalcExp({ ...calcExp, displayValue: evaluate(calcExp.displayExpression), displayExpression: '' })
  }

  const computeDisplayExpression = (e) => {
    if (e.target.id == 'CL') {
      setCalcExp({ ...calcExp, displayExpression: '', displayValue: 0 })

    } else if (calcExp.displayExpression == '' && e.target.id.match(/[0-9]/g) == null) {

      setCalcExp({ ...calcExp, displayExpression: '', showError: true })

      setTimeout(() => {
        setCalcExp({ ...calcExp, showError: false })
      }, 3000)

    } else {

      setCalcExp({
        ...calcExp,
        displayExpression: calcExp.displayExpression + e.target.id
      })
    }
  }

  const { displayValue, displayExpression, showError } = calcExp

  return (
    <div className='Container'>
      {simpleTitle()}
      <div className="buttonDisplay">
				{showError && <ErrorComponent msg={'Please enter a number first'} />}

				<DisplayScreen
					displayExpression={displayExpression}
					displayValue={displayValue} />

				<ShowButtons
					computeValue={computeValue}
					computeDisplayExpression={computeDisplayExpression} 
          type='simple' />
      </div>
    </div>
  );
}

export default SimpleCalculator;
