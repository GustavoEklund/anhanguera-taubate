import { NextPage } from 'next'
import Image from 'next/image'
import Styles from './styles.module.scss'
import Layout from '@/components/Layout'

const Contatos: NextPage = () => {
  return (
    <Layout title="Contatos" footerDisabled>
      <div className={Styles.container}>
        <div className={Styles.titleWrapper}>
          <h1>Contatos dos coordenadores de curso presencial da Anhanguera Taubaté</h1>
        </div>
        <div className={Styles.contactWrapper}>
          <div className={Styles.contactPhoto}>
            <Image src="/images/amalia.jpg" width={64} height={64} alt="Amália costa" />
          </div>
          <div className={Styles.contactDetails}>
            <h2>
              Nutrição
              <br />
              Gastronomia
            </h2>
            <p>
              <strong>Amália costa</strong>
            </p>
            <p>amalia.f.costa@educadores.net.br</p>
          </div>
        </div>
        <div className={Styles.contactWrapper}>
          <div className={Styles.contactPhoto}>
            <Image src="/images/ana.jpg" width={64} height={64} alt="Ana Flávia" />
          </div>
          <div className={Styles.contactDetails}>
            <h2>
              Publicidade e Propaganda
              <br />
              Arquitetura, Engenharia Civil
            </h2>
            <p>
              <strong>Ana Flávia</strong>
            </p>
            <p>ana.afonso@educadores.net.br</p>
          </div>
        </div>
        <div className={Styles.contactWrapper}>
          <div className={Styles.contactPhoto}>
            <img
              src="https://www.xovi.com/wp-content/plugins/all-in-one-seo-pack/images/default-user-image.png"
              alt="Coordenador"
            />
          </div>
          <div className={Styles.contactDetails}>
            <h2>
              Ciência da Computação
              <br />
              Engenharia de Produção Mecânica
            </h2>
            <p>
              <strong>Artur Pereira</strong>
            </p>
            <p>artur.pereira@educadores.net.br</p>
          </div>
        </div>
        <div className={Styles.contactWrapper}>
          <div className={Styles.contactPhoto}>
            <img
              src="https://www.xovi.com/wp-content/plugins/all-in-one-seo-pack/images/default-user-image.png"
              alt="Coordenador"
            />
          </div>
          <div className={Styles.contactDetails}>
            <h2>Enfermagem</h2>
            <p>
              <strong>Fernanda Ingrid</strong>
            </p>
            <p>fernanda.toledo@educadores.net.br</p>
          </div>
        </div>
        <div className={Styles.contactWrapper}>
          <div className={Styles.contactPhoto}>
            <Image src="/images/jorge.jpg" width={64} height={64} alt="Coordenador" />
          </div>
          <div className={Styles.contactDetails}>
            <h2>
              Fisioterapia
              <br />
              Educação Física
            </h2>
            <p>
              <strong>Jorge Júnior</strong>
            </p>
            <p>jorge.sjunior@educadores.net.br</p>
          </div>
        </div>
        <div className={Styles.contactWrapper}>
          <div className={Styles.contactPhoto}>
            <Image src="/images/gustavo.jpg" width={64} height={64} alt="Gustavo Bohler" />
          </div>
          <div className={Styles.contactDetails}>
            <h2>Direito</h2>
            <p>
              <strong>Gustavo Bohler</strong>
            </p>
            <p>gustavobohler@educadores.net.br</p>
          </div>
        </div>
        <div className={Styles.contactWrapper}>
          <div className={Styles.contactPhoto}>
            <Image src="/images/mirthis.jpg" width={64} height={64} alt="Mirthis Czubka" />
          </div>
          <div className={Styles.contactDetails}>
            <h2>
              Psicologia
              <br />
              Pedagogia
            </h2>
            <p>
              <strong>Mirthis Czubka</strong>
            </p>
            <p>mirthis.angelo@educadores.net.br</p>
          </div>
        </div>
        <div className={Styles.contactWrapper}>
          <div className={Styles.contactPhoto}>
            <Image src="/images/ricardo.jpg" width={64} height={64} alt="Ricardo Saad" />
          </div>
          <div className={Styles.contactDetails}>
            <h2>
              Administração
              <br />
              Ciências Contábeis
            </h2>
            <p>
              <strong>Ricardo Saad</strong>
            </p>
            <p>ricardo.saad@educadores.net.br</p>
          </div>
        </div>
        <div className={Styles.contactWrapper}>
          <div className={Styles.contactPhoto}>
            <Image src="/images/vitor.jpg" width={64} height={64} alt="Vitor Alexandre" />
          </div>
          <div className={Styles.contactDetails}>
            <h2>
              Biomedicina
              <br />
              Farmácia
            </h2>
            <p>
              <strong>Vitor Alexandre</strong>
            </p>
            <p>vitor.silva@educadores.net.br</p>
          </div>
        </div>
      </div>
      <div className={Styles.container}>
        <div className={Styles.titleWrapper}>
          <h1>
            Contatos dos tutores do semi-presencial e do coordenador geral do polo da Anhanguera
            Taubaté
          </h1>
        </div>
        <div className={Styles.generalWrapper}>
          <div className={Styles.generalItem} />
        </div>
        <div className={Styles.contactWrapper}>
          <div className={Styles.contactPhoto}>
            <img
              src="https://www.xovi.com/wp-content/plugins/all-in-one-seo-pack/images/default-user-image.png"
              alt="Coordenador"
            />
          </div>
          <div className={Styles.contactDetails}>
            <h2>Arquitetura</h2>
            <p>
              <strong>Aldrige da Silva Couto Rodrigues</strong>
            </p>
            <p>aldrige.rodrigues@educadores.net.br</p>
          </div>
        </div>
        <div className={Styles.contactWrapper}>
          <div className={Styles.contactPhoto}>
            <img
              src="https://www.xovi.com/wp-content/plugins/all-in-one-seo-pack/images/default-user-image.png"
              alt="Coordenador"
            />
          </div>
          <div className={Styles.contactDetails}>
            <h2>Gestão R.H.</h2>
            <p>
              <strong>Aline Torino</strong>
            </p>
            <p>aline.torino@educadores.net.br</p>
          </div>
        </div>
        <div className={Styles.contactWrapper}>
          <div className={Styles.contactPhoto}>
            <img
              src="https://www.xovi.com/wp-content/plugins/all-in-one-seo-pack/images/default-user-image.png"
              alt="Coordenador"
            />
          </div>
          <div className={Styles.contactDetails}>
            <h2>Educação Física</h2>
            <p>
              <strong>Paula Assis</strong>
            </p>
            <p>ana.p.assis@educadores.net.br</p>
          </div>
        </div>
        <div className={Styles.contactWrapper}>
          <div className={Styles.contactPhoto}>
            <img
              src="https://www.xovi.com/wp-content/plugins/all-in-one-seo-pack/images/default-user-image.png"
              alt="Coordenador"
            />
          </div>
          <div className={Styles.contactDetails}>
            <h2>Serviço Social</h2>
            <p>
              <strong>Ana Regina Gama</strong>
            </p>
            <p>ana.gama@educadores.net.br</p>
          </div>
        </div>
        <div className={Styles.contactWrapper}>
          <div className={Styles.contactPhoto}>
            <img
              src="https://www.xovi.com/wp-content/plugins/all-in-one-seo-pack/images/default-user-image.png"
              alt="Coordenador"
            />
          </div>
          <div className={Styles.contactDetails}>
            <h2>
              NSA Núcleo da Saúde
              <br />
              Educação Física
            </h2>
            <p>
              <strong>Andressa Amorelli Barbosa</strong>
            </p>
            <p>andressa.a.barbosa@educadores.net.br</p>
          </div>
        </div>
        <div className={Styles.contactWrapper}>
          <div className={Styles.contactPhoto}>
            <img
              src="https://www.xovi.com/wp-content/plugins/all-in-one-seo-pack/images/default-user-image.png"
              alt="Coordenador"
            />
          </div>
          <div className={Styles.contactDetails}>
            <h2>Engenharias</h2>
            <p>
              <strong>Aureli Eugenio da Silva</strong>
            </p>
            <p>aureli.silva@educadores.net.br</p>
          </div>
        </div>
        <div className={Styles.contactWrapper}>
          <div className={Styles.contactPhoto}>
            <img
              src="https://www.xovi.com/wp-content/plugins/all-in-one-seo-pack/images/default-user-image.png"
              alt="Coordenador"
            />
          </div>
          <div className={Styles.contactDetails}>
            <h2>Serviço Social</h2>
            <p>
              <strong>Diuna Martins Ragasine</strong>
            </p>
            <p>diuna.ragasine@educadores.net.br</p>
          </div>
        </div>
        <div className={Styles.contactWrapper}>
          <div className={Styles.contactPhoto}>
            <img
              src="https://www.xovi.com/wp-content/plugins/all-in-one-seo-pack/images/default-user-image.png"
              alt="Coordenador"
            />
          </div>
          <div className={Styles.contactDetails}>
            <h2>Engenharias</h2>
            <p>
              <strong>Kleber dos Santos</strong>
            </p>
            <p>k.santos@educadores.net.br</p>
          </div>
        </div>
        <div className={Styles.contactWrapper}>
          <div className={Styles.contactPhoto}>
            <img
              src="https://www.xovi.com/wp-content/plugins/all-in-one-seo-pack/images/default-user-image.png"
              alt="Coordenador"
            />
          </div>
          <div className={Styles.contactDetails}>
            <h2>Logística</h2>
            <p>
              <strong>Maxwel Gouveia Simpliciano</strong>
            </p>
            <p>maxwel.simpliciano@educadores.net.br</p>
          </div>
        </div>
        <div className={Styles.contactWrapper}>
          <div className={Styles.contactPhoto}>
            <img
              src="https://www.xovi.com/wp-content/plugins/all-in-one-seo-pack/images/default-user-image.png"
              alt="Coordenador"
            />
          </div>
          <div className={Styles.contactDetails}>
            <h2>Pedagogia</h2>
            <p>
              <strong>Preciliana Bussi</strong>
            </p>
            <p>preciliana.santos@educadores.net.br</p>
          </div>
        </div>
        <div className={Styles.contactWrapper}>
          <div className={Styles.contactPhoto}>
            <img
              src="https://www.xovi.com/wp-content/plugins/all-in-one-seo-pack/images/default-user-image.png"
              alt="Coordenador"
            />
          </div>
          <div className={Styles.contactDetails}>
            <h2>
              Tecnólogos
              <br />
              Ciências Contábeis
            </h2>
            <p>
              <strong>Regiane Francis Souza</strong>
            </p>
            <p>regiane.f.souza@educadores.net.br</p>
          </div>
        </div>
        <div className={Styles.contactWrapper}>
          <div className={Styles.contactPhoto}>
            <img
              src="https://www.xovi.com/wp-content/plugins/all-in-one-seo-pack/images/default-user-image.png"
              alt="Coordenador"
            />
          </div>
          <div className={Styles.contactDetails}>
            <h2>
              Tecnólogos
              <br />
              Administração e contábeis
            </h2>
            <p>
              <strong>Sandro Bueno de Paula</strong>
            </p>
            <p>sandro.paula@educadores.net.br</p>
          </div>
        </div>
        <div className={Styles.contactWrapper}>
          <div className={Styles.contactPhoto}>
            <img
              src="https://www.xovi.com/wp-content/plugins/all-in-one-seo-pack/images/default-user-image.png"
              alt="Coordenador"
            />
          </div>
          <div className={Styles.contactDetails}>
            <h2>
              Nutrição
              <br />
              NSA Núcleo de Saúde (Enfermagem)
            </h2>
            <p>
              <strong>Tabata Bortman</strong>
            </p>
            <p>tabata.bortman@educadores.net.br</p>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Contatos
