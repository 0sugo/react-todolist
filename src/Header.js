
const Header = ({title}) => {
  return (
    <div>
        <h1>{title}</h1>
    </div>
  )
}
Header.defaultProps ={title:'To-do list'}
export default Header;