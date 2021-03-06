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
            contact="amalia.f.costa@anhanguera.com"
          />
          <Contact
            photo="ana.jpg"
            contactTitle={['Publicidade e Propaganda', 'Arquitetura, Engenharia Civil']}
            subtitle="Ana Flávia"
            contact={['ana.afonso@anhanguera.com', 'WhatsApp: (12) 98144-7548']}
            contactLink={['', 'https://wa.me/5512981447548']}
          />
          <Contact
            photo="artur.jpg"
            contactTitle={['Ciência da Computação', 'Engenharia de Produção Mecânica']}
            subtitle="Artur Pereira"
            contact={['artur.pereira@anhanguera.com', 'WhatsApp: (12) 3634-4123']}
            contactLink={['', 'https://wa.me/551236344123']}
          />
          <Contact
            photo="fernanda.jpg"
            contactTitle="Enfermagem"
            subtitle="Fernanda Ingrid"
            contact={['fernanda.toledo@anhanguera.com', 'WhatsApp: (12) 98195-3709']}
            contactLink={['', 'https://wa.me/5512981953709']}
          />
          <Contact
            photo="gustavo.jpg"
            contactTitle="Direito"
            subtitle="Gustavo Bohler"
            contact="gustavobohler@anhanguera.com"
          />
          <Contact
            photo="jorge.jpg"
            contactTitle={['Fisioterapia', 'Educação Física']}
            subtitle="Jorge Júnior"
            contact="jorge.sjunior@anhanguera.com"
          />
          <Contact
            photo="mirthis.jpg"
            contactTitle={['Psicologia', 'Pedagogia']}
            subtitle="Mirthis Czubka"
            contact={['mirthis.angelo@anhanguera.com', 'WhatsApp: (12) 99136-0170']}
            contactLink={['', 'https://wa.me/5512991360170']}
          />
          <Contact
            photo="ricardo.jpg"
            contactTitle={['Administração', 'Ciências Contábeis', 'Recursos Humanos']}
            subtitle="Ricardo Saad"
            contact="ricardo.saad@anhanguera.com"
          />
          <Contact
            photo="patricia.jpg"
            contactTitle="Odontologia"
            subtitle="Patricia Capellato"
            contact={['patricia.capellato@anhanguera.com', 'WhatsApp: (12) 3411-0546']}
            contactLink={['', 'https://wa.me/551234110546']}
          />
          <Contact
            photo="vitor.jpg"
            contactTitle={['Biomedicina', 'Farmácia']}
            subtitle="Vitor Alexandre"
            contact="vitor.silva@anhanguera.com"
            style={{ marginBottom: 0 }}
          />
        </div>
      )}
      {modality === 'distancia' && (
        <div className={Styles.container} style={{ paddingBottom: '1rem' }} id="coordenadores">
          <div className={Styles.titleWrapper}>
            <h1>
              Contatos dos tutores do semi-presencial e do coordenador do polo da Anhanguera Taubaté
            </h1>
          </div>
          <div className={Styles.generalWrapper}>
            <div className={Styles.generalItem}>
              <h2>Dúvidas acadêmicas</h2>
              <br/>
              <p>
                Atendimento sempre das <span>17h30</span> às <span>19h00</span> de segunda a quinta
              </p>
              <p>
                <strong>Coordenador Edner Silva</strong><br/>
                <strong>Profª Ana Regina</strong>
              </p>
              <div className={Styles.linkGroup}>
                <a href="https://teams.microsoft.com/l/meetup-join/19%3a103196549bdf4a98bb1c34341c13f322%40thread.tacv2/1612487280195?context=%7b%22Tid%22%3a%22a50e7b76-8ea5-492c-bf17-97d652fc3ce9%22%2c%22Oid%22%3a%228935cd14-96d9-4c9b-9df0-059be8087635%22%7d">
                  Link (Microsoft Teams)
                </a>
                <br/>
                <br/>
                <p>
                  *** Atendimento presencialmente quarta e quinta das <span>18h00</span> às
                  <span> 19h00</span> mediante agendamento
                </p>
              </div>
            </div>
          </div>
          <Contact
            contactTitle="Arquitetura"
            subtitle="Aldrige da Silva Couto Rodrigues"
            contact="aldrige.rodrigues@anhanguera.com"
          />
          <Contact
            contactTitle="Gestão R.H."
            subtitle="Aline Torino"
            contact="aline.torino@anhanguera.com"
          />
          <Contact
            contactTitle="Educação Física"
            subtitle="Ana Paula"
            contact="ana.p.assis@anhanguera.com"
          />
          <Contact
            contactTitle="Serviço Social (Veteranos)"
            subtitle="Ana Regina Gama"
            contact="ana.gama@anhanguera.com"
          />
          <Contact
            contactTitle="NSA Núcleo da Saúde (Calouros)"
            subtitle="Andressa Amorelli Barbosa"
            contact="andressa.a.barbosa@anhanguera.com"
          />
          <Contact
            contactTitle="Engenharias (Veteranos e Calouros)"
            subtitle="Aureli Eugenio da Silva"
            contact="aureli.silva@anhanguera.com"
          />
          <Contact
            contactTitle="Serviço Social (Calouros)"
            subtitle="Diuna Martins Ragasine"
            contact="diuna.ragasine@anhanguera.com"
          />
          <Contact
            contactTitle="Engenharias (Veteranos)"
            subtitle="Kleber dos Santos"
            contact="k.santos@anhanguera.com"
          />
          <Contact
            contactTitle="Logística"
            subtitle="Maxwel Gouveia Simpliciano"
            contact="maxwel.simpliciano@anhanguera.com"
          />
          <Contact
            contactTitle="Pedagogia"
            subtitle="Preciliana Bussi"
            contact="preciliana.santos@anhanguera.com"
          />
          <Contact
            contactTitle={['Tecnólogos', 'Ciências Contábeis']}
            subtitle="Regiane Francis Souza"
            contact="regiane.f.souza@anhanguera.com"
          />
          <Contact
            contactTitle={[
              'Tecnólogos',
              'Administração e contábeis',
              'Análise e Desenvolvimento de Sistemas'
            ]}
            subtitle="Sandro Bueno de Paula"
            contact="sandro.paula@anhanguera.com"
          />
          <Contact
            contactTitle={['Nutrição (Veteranos)', 'NSA Núcleo de Saúde (Veteranos)']}
            subtitle="Tabata Bortman"
            contact="tabata.bortman@anhanguera.com"
            style={{ marginBottom: 0 }}
          />
        </div>
      )}
      <div className={Styles.container} style={{ paddingTop: '1rem' }} id="gerais">
        <div className={Styles.titleWrapper}>
          <h1>Contatos gerais Anhanguera Taubaté</h1>
        </div>
        <Contact
          contactTitle="Central de Relacionamento com Aluno (CRA)"
          subtitle={['Telefone: 3003-4030', 'segunda a sexta-feira - 09h00 às 21h00']}
          subtitleLink=""
          contact=""
        />
        <Contact
          contactTitle="Secretaria"
          subtitle={[
            'WhatsApp: (12) 3634-4126',
            'segunda a quinta-feira - 08h30 às 19h30',
            'sexta-feira - 08h30 às 19h00'
          ]}
          subtitleLink={['https://wa.me/551236344126', '', '']}
          contact="taubate@anhanguera.com"
        />
        <Contact
          contactTitle="Relacionamento com o aluno"
          subtitle="WhatsApp: (12) 3625-4951 - Jully"
          subtitleLink="https://wa.me/551236254951"
          contact={[]}
        />
        <Contact
          contactTitle="Acordos e negociações"
          subtitle={['WhatsApp: (12) 3634-4135 - Amanda', 'WhatsApp: (12) 3625-4950 - Jhenifer']}
          subtitleLink={['https://wa.me/551236344135', 'https://wa.me/551236254950']}
          contact={[]}
        />
        <Contact
          contactTitle="Central de estágio"
          subtitle="WhatsApp: (12) 3625-4939 - Lucinéia"
          subtitleLink="https://wa.me/551236254939"
          contact={[]}
        />
        <Contact
          contactTitle="Informática"
          subtitle="WhatsApp: (12) 3634-4146"
          subtitleLink="https://wa.me/551236344146"
          contact={[]}
        />
        <Contact
          contactTitle="Agendamento das clínicas"
          subtitle="WhatsApp: (12) 3634-4106"
          subtitleLink="https://wa.me/551236344106"
          contact={[]}
        />
        <Contact
          contactTitle="Biblioteca"
          subtitle="WhatsApp: (12) 3634-4168"
          subtitleLink="https://wa.me/551236344168"
          contact={[]}
        />
      </div>
    </Layout>
  )
}

export default Contatos
