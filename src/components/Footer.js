
const Footer = ({ data }) => {
  const { networks, auth } = data

  return (
    <footer id='footer'>
      <div className="col-md-12">
        <div className="social-links">
          {networks.map(network => (
            <span key={network.name} className="m-4">
              <a href={network.url} target="_blank" rel="noopener noreferrer">
                <i className={network.icon}></i>
              </a>
            </span>
          ))}
        </div>

        <div className="copyright py-4 text-center">
          <div className="container">
            <small>
              Ann.bui0012@gmail.com </small> <br /> 
              <small>
              Copyright &copy;{' '}
              {auth
                ? auth
                : '???'}
            </small>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
