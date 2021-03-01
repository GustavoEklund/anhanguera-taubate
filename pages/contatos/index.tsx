import { NextPage } from 'next'
import Styles from './styles.module.scss'
import Layout from '@/components/Layout'
import Contact from '@/components/Contact'
import useModality from '@/hooks/useModality'

const Contatos: NextPage = () => {
  const { modality } = useModality()

  return (
    <Layout title="Contatos" footerDisabled>
      {modality === 'presencial' && (
        <div className={Styles.container} style={{ paddingBottom: '1rem' }} id="coordenadores">
          <div className={Styles.titleWrapper}>
            <h1>Contatos dos coordenadores de curso presencial da Anhanguera Taubaté</h1>
          </div>
          <Contact
            photo="amalia.jpg"
            contactTitle={['Nutrição', 'Gastronomia']}
            subtitle="Amália costa"
            contact="amalia.f.costa@educadores.net.br"
          />
          <Contact
            photo="ana.jpg"
            contactTitle={['Publicidade e Propaganda', 'Arquitetura, Engenharia Civil']}
            subtitle="Ana Flávia"
            contact="ana.afonso@educadores.net.br"
          />
          <Contact
            photo="artur.jpg"
            contactTitle={['Ciência da Computação', 'Engenharia de Produção Mecânica']}
            subtitle="Artur Pereira"
            contact="artur.pereira@educadores.net.br"
          />
          <Contact
            photo="fernanda.jpg"
            contactTitle="Enfermagem"
            subtitle="Fernanda Ingrid"
            contact="fernanda.toledo@educadores.net.br"
          />
          <Contact
            photo="gustavo.jpg"
            contactTitle="Direito"
            subtitle="Gustavo Bohler"
            contact="gustavobohler@educadores.net.br"
          />
          <Contact
            photo="jorge.jpg"
            contactTitle={['Fisioterapia', 'Educação Física']}
            subtitle="Jorge Júnior"
            contact="jorge.sjunior@educadores.net.br"
          />
          <Contact
            photo="mirthis.jpg"
            contactTitle={['Psicologia', 'Pedagogia']}
            subtitle="Mirthis Czubka"
            contact="mirthis.angelo@educadores.net.br"
          />
          <Contact
            photo="ricardo.jpg"
            contactTitle={['Administração', 'Ciências Contábeis']}
            subtitle="Ricardo Saad"
            contact="ricardo.saad@educadores.net.br"
          />
          <Contact
            photo="vitor.jpg"
            contactTitle={['Biomedicina', 'Farmácia']}
            subtitle="Vitor Alexandre"
            contact="vitor.silva@educadores.net.br"
            style={{ marginBottom: 0 }}
          />
        </div>
      )}
      {modality === 'distancia' && (
        <div className={Styles.container} style={{ paddingBottom: '1rem' }} id="coordenadores">
          <div className={Styles.titleWrapper}>
            <h1>
              Contatos dos tutores do semi-presencial e do coordenador geral do polo da Anhanguera
              Taubaté
            </h1>
          </div>
          <div className={Styles.generalWrapper}>
            <div className={Styles.generalItem}>
              <h2>Dúvidas gerais do portal e orientação de estágio dos cursos:</h2>
              <ul>
                <li>Nutrição</li>
                <li>Pedagogia</li>
                <li>Serviço Social</li>
              </ul>
              <p>
                Atendimento sempre das <span>17h30</span> às <span>19h00</span>
              </p>
              <p>
                <strong>Profª Ana Regina</strong>
              </p>
              <div className={Styles.linkGroup}>
                <a href="https://teams.microsoft.com/l/meetup-join/19%3a103196549bdf4a98bb1c34341c13f322%40thread.tacv2/1612487280195?context=%7b%22Tid%22%3a%22a50e7b76-8ea5-492c-bf17-97d652fc3ce9%22%2c%22Oid%22%3a%228935cd14-96d9-4c9b-9df0-059be8087635%22%7d">
                  Link da segunda-feira (Microsoft Teams)
                </a>
                <a href="https://teams.microsoft.com/l/meetup-join/19%3a103196549bdf4a98bb1c34341c13f322%40thread.tacv2/1612487801476?context=%7b%22Tid%22%3a%22a50e7b76-8ea5-492c-bf17-97d652fc3ce9%22%2c%22Oid%22%3a%228935cd14-96d9-4c9b-9df0-059be8087635%22%7d">
                  Link da terça-feira (Microsoft Teams)
                </a>
              </div>
            </div>
            <div className={Styles.generalItem}>
              <h2>Dúvidas acadêmicas</h2>
              <p>
                Atendimento sempre das <span>17h30</span> às <span>19h00</span>
              </p>
              <div className={Styles.linkGroup}>
                <a
                  href="https://teams.microsoft.com/l/meetup-join/19%3aac75d435e4b0446aaade16661c3491ef%40thread.tacv2/1612487920762?context=%7b%22Tid%22%3a%22a50e7b76-8ea5-492c-bf17-97d652fc3ce9%22%2c%22Oid%22%3a%228935cd14-96d9-4c9b-9df0-059be8087635%22%7d"
                  target="_blank"
                  rel="noreferrer"
                >
                  Link da quarta-feira (Microsoft Teams)
                </a>
                <a
                  href="https://teams.microsoft.com/l/meetup-join/19%3aac75d435e4b0446aaade16661c3491ef%40thread.tacv2/1612488053068?context=%7b%22Tid%22%3a%22a50e7b76-8ea5-492c-bf17-97d652fc3ce9%22%2c%22Oid%22%3a%228935cd14-96d9-4c9b-9df0-059be8087635%22%7d"
                  target="_blank"
                  rel="noreferrer"
                >
                  Link da quinta-feira (Microsoft Teams)
                </a>
              </div>
            </div>
            <div className={Styles.generalItem}>
              <Contact
                contactTitle={['Coordenador geral do polo']}
                subtitle="Profº Edner"
                contact=""
                style={{ width: '100%' }}
              />
              <p>
                Atendimento presencialmente quarta e quinta das <span>18h00</span> às
                <span> 19h00</span>
              </p>
            </div>
          </div>
          <Contact
            contactTitle="Arquitetura"
            subtitle="Aldrige da Silva Couto Rodrigues"
            contact="aldrige.rodrigues@educadores.net.br"
          />
          <Contact
            contactTitle="Gestão R.H."
            subtitle="Aline Torino"
            contact="aline.torino@educadores.net.br"
          />
          <Contact
            contactTitle="Educação Física"
            subtitle="Paula Assis"
            contact="ana.p.assis@educadores.net.br"
          />
          <Contact
            contactTitle="Serviço Social (Veteranos)"
            subtitle="Ana Regina Gama"
            contact="ana.gama@educadores.net.br"
          />
          <Contact
            contactTitle="NSA Núcleo da Saúde (Calouros)"
            subtitle="Andressa Amorelli Barbosa"
            contact="andressa.a.barbosa@educadores.net.br"
          />
          <Contact
            contactTitle="Engenharias (Veteranos e Calouros)"
            subtitle="Aureli Eugenio da Silva"
            contact="aureli.silva@educadores.net.br"
          />
          <Contact
            contactTitle="Serviço Social (Calouros)"
            subtitle="Diuna Martins Ragasine"
            contact="diuna.ragasine@educadores.net.br"
          />
          <Contact
            contactTitle="Engenharias (Veteranos)"
            subtitle="Kleber dos Santos"
            contact="k.santos@educadores.net.br"
          />
          <Contact
            contactTitle="Logística"
            subtitle="Maxwel Gouveia Simpliciano"
            contact="maxwel.simpliciano@educadores.net.br"
          />
          <Contact
            contactTitle="Pedagogia"
            subtitle="Preciliana Bussi"
            contact="preciliana.santos@educadores.net.br"
          />
          <Contact
            contactTitle={['Tecnólogos', 'Ciências Contábeis']}
            subtitle="Regiane Francis Souza"
            contact="regiane.f.souza@educadores.net.br"
          />
          <Contact
            contactTitle={[
              'Tecnólogos',
              'Administração e contábeis',
              'Análise e Desenvolvimento de Sistemas'
            ]}
            subtitle="Sandro Bueno de Paula"
            contact="sandro.paula@educadores.net.br"
          />
          <Contact
            contactTitle={['Nutrição (Veteranos)', 'NSA Núcleo de Saúde (Veteranos)']}
            subtitle="Tabata Bortman"
            contact="tabata.bortman@educadores.net.br"
            style={{ marginBottom: 0 }}
          />
        </div>
      )}
      <div className={Styles.container} style={{ paddingTop: '1rem' }} id="gerais">
        <div className={Styles.titleWrapper}>
          <h1>Contatos gerais Anhanguera Taubaté</h1>
        </div>
        <Contact
          contactTitle="Secretaria"
          subtitle={[
            'Presencialmente:',
            'segunda a quinta-feira - 08h30 às 20h30',
            'sexta-feira - 08h30 às 20h00',
            ''
          ]}
          contact="taubate@anhanguera.com"
        />
        <Contact
          contactTitle="Relacionamento com o aluno"
          subtitle="WhatsApp: (12) 3625-4951 - Jully"
          link="https://wa.me/551236254951"
          contact={[]}
        />
        <Contact
          contactTitle="Acordos e negociações"
          subtitle={['WhatsApp - (12) 3634-4153 - Amanda', 'WhatsApp - (12) 3625-4950 - Jhenifer']}
          link={['https://wa.me/551236344153', 'https://wa.me/551236254950']}
          contact={[]}
        />
        <Contact
          contactTitle="Central de estágio"
          subtitle="WhatsApp - (12) 3625-4939 - Lucinéia"
          link="https://wa.me/551236254939"
          contact={[]}
        />
        <Contact
          contactTitle="Informática"
          subtitle="WhatsApp - (12) 3634-4146"
          link="https://wa.me/551236344146"
          contact={[]}
        />
      </div>
    </Layout>
  )
}

export default Contatos
