import React from 'react';
import './footer.css'

function Footer() {
  return (
    <footer className="footer text-center text-lg-start">
      {/* Sección de redes sociales */}
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div className="me-5 d-none d-lg-block">
          <span>Contactate con nosotros en redes sociales:</span>
        </div>
        <div className='d-block justify-content-center'>
          <a href="https://www.facebook.com" className="me-4 text-reset">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://www.tiktok.com" className="me-4 text-reset">
            <i className="fab fa-tiktok"></i>
          </a>
          <a href="https://www.whatsapp.com" className="me-4 text-reset">
            <i className="fab fa-whatsapp"></i>
          </a>
        </div>
      </section>

      {/* Sección principal */}
      <section className="">
        <div className="container text-center text-md-start mt-5">
          <div className="row mt-3">
            {/* Columna 1 */}
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                <i className="fas fa-gem me-3"></i> J&B Bienes Raices
              </h6>
              <p>
                Aquí puedes usar filas y columnas para organizar tu contenido del footer.
              </p>
            </div>

            {/* Columna 2 */}
            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Productos</h6>
              <p><a href="#!" className="text-reset">Angular</a></p>
              <p><a href="#!" className="text-reset">React</a></p>
              <p><a href="#!" className="text-reset">Vue</a></p>
              <p><a href="#!" className="text-reset">Laravel</a></p>
            </div>

            {/* Columna 3 */}
            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Enlaces útiles</h6>
              <p><a href="#!" className="text-reset">Precios</a></p>
              <p><a href="#!" className="text-reset">Configuración</a></p>
              <p><a href="#!" className="text-reset">Pedidos</a></p>
              <p><a href="#!" className="text-reset">Ayuda</a></p>
            </div>

            {/* Columna 4 */}
            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contacto</h6>
              <p><i className="fas fa-home me-2"></i> San José, Costa Rica</p>
              <p><i className="fas fa-envelope me-3"></i> info@miempresa.com</p>
              <p><i className="fas fa-phone me-3"></i> +506 2222-2222</p>
              <p><i className="fas fa-print me-3"></i> +506 2222-3333</p>
            </div>
          </div>
        </div>
      </section>

      {/* Copyright */}
      <div className="text-center p-4" style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2026 Copyright:
        <a className="text-reset fw-bold" href="/#"> Ingresar dominio</a>
      </div>
    </footer>
  );
}

export default Footer;
