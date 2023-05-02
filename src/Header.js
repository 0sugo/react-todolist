const Header = ({ title }) => (
  <div>
    <h1>{title}</h1>
  </div>
);
Header.defaultProps = { title: 'To-do list' };
export default Header;
