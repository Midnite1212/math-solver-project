export default ({ computeValue, computeDisplayExpression, type }) => {

	const SIMPLE_CALCULATOR_BUTTONS = [
		'(', ')', '^', 'CL',
		'7', '8', '9', '/',
		'4', '5', '6', '*',
		'1', '2', '3', '-',
		'.', '0', '=', '+'
	]
	const FINANCE_CALCULATOR_BUTTONS = [
		'CPT' , 'ENTER'  , '^'  , '|'  , '<' ,
		'2ND' , 'CF'     , 'NPV', 'IRR', '>' ,
		'N'	  , 'I/Y'    , 'PV' , 'PMT', 'FV',
		'%'   , 'SQRT(x)', 'x^2', '1/x', '/' ,
		'INV' , '('      , ')'  , 'y^x', '*' ,
		'LN'  , '7'      , '8'  , '9'  , '-' ,
		'STO' , '4'      , '5'  , '6'  , '+' ,
		'RCL' , '1'      , '2'  , '3'  , '!' ,
		'CL'  , '0'      , '.'  , '+|-', '=' ,
	]

	switch (type) {
		case 'simple':{
			return (
				<div className="simple show-buttons">
					{
						SIMPLE_CALCULATOR_BUTTONS.map((ele, index) => {
							return (
								<a key={'calc-' + ele} href="#" id={ele} className="btn"
									onClick={(ele != '=') ? computeDisplayExpression : computeValue} >{ele}</a>
							)
						})
					}
				</div>
			);
		}
		case 'finance':{
			return (
				<div className="finance show-buttons">
					{
						FINANCE_CALCULATOR_BUTTONS.map((ele, index) => {
							return (
								<a key={'calc-' + ele} href="#" id={ele} className="btn"
									onClick={(ele != '=') ? computeDisplayExpression : computeValue} >{ele}</a>
							)
						})
					}
				</div>
			);
		}
		default:{
			<div className="error-msg">
				Invalid Calculator Type
			</div>
			break;
		}
	}

};
