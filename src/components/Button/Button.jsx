export const Button = ({symbol, action, thisClass}) => {
  return (
    <div onClick={action} className={thisClass}>{symbol}</div>
  )
}
