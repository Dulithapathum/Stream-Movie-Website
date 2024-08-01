import PropTypes from "prop-types";

export const NavListitem = ({nav}) => {
  return (
    <li>
    <a href={nav.link}>{nav.name}</a>
    
    </li>
  )
}

NavListitem.propTypes = {
    nav: PropTypes.shape({
      id: PropTypes.number.isRequired,
      link: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      active: PropTypes.bool
    }).isRequired
  };