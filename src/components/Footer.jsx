import "../CSS/footer.css";

const Footer = () => {
  return (
    <footer className="footer-glucon">
      <div className="footer-content">
        <div className="footer-column">
          <h5>GLUCON</h5>
          <p>Suministros para diabéticos en Uruguay</p>
        </div>

        <div className="footer-column">
          <h5>Catálogo</h5>
          <p>Monitoreo continuo</p>
          <p>Tiras reactivas</p>
          <p>Accesorios</p>
        </div>

        <div className="footer-column">
          <h5>Contacto</h5>
          <p>info@glucon.com.uy</p>
          <p>Montevideo, Uruguay</p>
        </div>
      </div>

      <div className="footer-copy">
        © 2026 Glucon. Todos los derechos reservados.
      </div>
    </footer>
  );
};

export default Footer;