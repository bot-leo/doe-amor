import ComponentHead from "../components/ComponentHead"
import { GenericText } from "../components/GenericText"
import { NavLink } from "../components/NavLink"
import { Main, SectionMain, SectionOnly } from "../styles/pages/RegrasOficiais"
import theme from "../styles/theme"

export default function RegrasOficiais(){
  return(
     
    <>
      <ComponentHead title={'Regras Oficiais'}/>
      <Main>
        <SectionMain>
          <GenericText text={'Regras oficiais'}
                       weight={700}
                       size={'40px'}
                       color={theme.colors.gray1}/>
          <GenericText text={'Nossos advogados querem que você saiba'}
                        weight={400}
                        size={'30px'}
                        color={theme.colors.gray1}/>
        </SectionMain>  

        <SectionOnly>
          <GenericText text={'Vencedores'}
                       weight={700}
                       size={'20px'}
                       color={theme.colors.gray1}
                       />
          <GenericText text={'Você (“Vencedor”) + 1 (“Convidado”)'}
                       weight={400}
                       color={theme.colors.gray3}/>
          <br/>
          <br/>
          <br/>
          <GenericText text={'Data de início do sorteio'}
                        weight={700}
                        size={'20px'}
                        color={theme.colors.gray1}/>
          <GenericText text={'01 de março de 2021'}
                       weight={400}
                       color={theme.colors.gray3}/>
          <br/>
          <br/>
          <br/>
          <GenericText text={'Anunciado o vencedor'}
                       weight={700}
                       size={'20px'}
                       color={theme.colors.gray1}/>
          <GenericText text={'3 de abril de 2021'}
                       weight={400}
                       color={theme.colors.gray3}/>
          <br/>
          <br/>
          <br/>
          <GenericText weight={700}
                       size={'20px'}
                       color={theme.colors.gray1}>
                         Valor de varejo aproximado<br/>
                         Tempo:
          </GenericText>
          <GenericText text={'TBD'}
                       weight={400}
                       color={theme.colors.gray3}/>
          <br/>
          <br/>
          <br/>
          <GenericText text={'Localização'}
                       weight={700}
                       size={'20px'}
                       color={theme.colors.gray1}/>
          <GenericText text={'Brasil'}
                       weight={400}
                       color={theme.colors.gray3}/>
          <br/>
          <br/>
          <br/>
          <GenericText text={'Patrocinador'}
                       weight={700}
                       size={'20px'}
                       color={theme.colors.gray1}/>
          <GenericText text={'Liga de Combate ao Câncer'}
                       weight={400}
                       color={theme.colors.gray3}/>
          <br/>
          <br/>
          <br/>
          <GenericText text={'Beneficiário designado'}
                       weight={700}
                       size={'20px'}
                       color={theme.colors.gray1}/>
          <GenericText text={'Hospital de Amor'}
                       weight={400}
                       color={theme.colors.gray3}/>
          <br/>
          <br/>
          <br/>
          <GenericText text={'Provedor de prêmios'}
                       weight={700}
                       size={'20px'}
                       color={theme.colors.gray1}/>
          <GenericText text={'DoeAmor'}
                       weight={400}
                       color={theme.colors.gray3}/>
          <br/>
          <br/>
          <br/>
          <GenericText text={'Sorteio'}
                       weight={700}
                       size={'20px'}
                       color={theme.colors.gray1}/>
          <GenericText weight={400}
                       color={theme.colors.gray3}>
          Será o ganhador do prêmio, o participante que possuir o 
          número de ordem cujo número coincida com o número 
          formado pela unidade simples do último algarismo 
          do 1º ao 5º prêmio da Loteria Federal do dia 03/03/2021, 
          lido de cima pra baixo: Exemplificando - Resultado hipotético 
          da Loteria Federal do dia 03/03/2021:
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          1º prêmio 32.485<br/>
          2º prêmio 45.983<br/>
          3º prêmio 37.442<br/>
          4º prêmio 18.666<br/>
          5º prêmio 22.999<br/>
          <br/>
          <br/>
          <br/>
          Será contemplado o portador do Cupom contendo o no 53.269
          <br/>
          <br/>
          <br/>
          Se o número contemplado não for distribuído por qualquer motivo, o prêmio caberá ao portador do número distribuído imediatamente superior ou, na falta deste, ao portador do número distribuído imediatamente inferior.
          <br/>
          <br/>
          <br/>
          Este sorteio é auditado pela Caixa Economica  Federal e pela KPMG Brasil e cumpre todos os requisitos legais junto ao Governo Federal e possui certificado de autorização emitido pela Secap - Secretaria de Avaliação de Políticas Públicas, Planejamento, Energia e Loteria sob o certificado nº 01.010/2021.
          </GenericText>
          <br/>
          <br/>
          <div style={{display:"flex", alignItems:"baseline"}}>
            <NavLink textLink={'Clique aqui'} href={'/'}/>
            <GenericText text={'para exibir o certificado emitido.'}/>
          </div>
          <br/>
          <br/>
          <GenericText text={'Bilhetes'}
                       weight={700}
                       size={'20px'}
                       color={theme.colors.gray1}/>
          <GenericText weight={400}
                       color={theme.colors.gray3}>
          Você receberá seus bilhetes em seu email cadastrado imediatamente se o pagamento for feito com cartão de crédito ou pontos de vantagem. O seu pedido pode ser acompanhado em Meus bilhetes acessando com o seu email utilizado para participar no site DoeAmor (clique aqui para acessar).
          <br/>
          <br/>
          Se você optar comprar com boleto bancário, você receberá os bilhetes em até 3 dias úteis após o pagamento direto no seu email.
          </GenericText>
          <br/>
          <br/>
          <br/>
          <GenericText text={'Detalhes'}
                       weight={700}
                       size={'20px'}
                       color={theme.colors.gray1}/>
          <GenericText weight={400}
                       color={theme.colors.gray3}>
          Caso o vencedor não deseje receber o Grande Prêmio, o Vencedor pode optar por uma alternativa em dinheiro que é 75% do valor do prêmio. Observe que nenhum fundo adicional será fornecido, se a alternativa em dinheiro for escolhida.
          <br/>
          <br/>
          O vencedor deve tomar uma decisão entre aceitar o Grande Prêmio ou a Opção em Dinheiro no máximo 7 dias após ser notificado de seu prêmio. A decisão do vencedor entre aceitar o Grande Prêmio ou a Opção em Dinheiro é final e não pode ser alterada por nenhum motivo.
          <br/>
          <br/>
          A DoeAmor reserva-se o direito de não entregar prêmios em determinados países. Nesse caso, o vencedor deverá escolher a alternativa em dinheiro.
          <br/>
          <br/>
          Se o Vencedor decidir levar o Grande Prêmio, a DoeAmor irá, a seu exclusivo e absoluto critério, fornecer uma marca e modelo de carro que, no mínimo, atenda às especificações e descrição do Grande Prêmio conforme declarado nesta seção de "Detalhes" do sorteio regras. Nesses casos, o Vencedor deverá aceitar o Grande Prêmio selecionado por DoeAmor. Em algumas circunstâncias, a DoeAmor pode, a seu critério exclusivo e absoluto, apresentar ao Vencedor uma ou mais opções do Grande Prêmio, das quais o Vencedor deverá escolher uma das opções apresentadas como o Grande Prêmio.
          <br/>
          <br/>
          Se o Vencedor não quiser aceitar o Grande Prêmio selecionado por DoeAmor, então o Vencedor pode escolher a alternativa em dinheiro.
          <br/>
          <br/>
          O prêmio do veículo deve ser fornecido "no estado em que se encontra", sem quaisquer representações e garantias de qualquer natureza. O Patrocinador não representa ou garante que o veículo cumpre ou está em conformidade com qualquer país, estado ou federal de segurança, ambiental e / ou outros padrões e requisitos aplicáveis ​​para que o veículo seja legalmente operacional ou certificado para uso em vias públicas. É de responsabilidade exclusiva do vencedor avaliar o veículo e garantir que ele atenda a todos os padrões e requisitos legais aplicáveis ​​para o uso e operação pretendidos.
          <br/>
          <br/>
          Todos os nomes e marcas comerciais de terceiros são propriedade de seus respectivos proprietários.
          </GenericText>
          <br/>
          <br/>
          <GenericText text={'Idade para participar'}
                       weight={700}
                       size={'20px'}
                       color={theme.colors.gray1}/>
          <GenericText text={'Você deve ter pelo menos 18 anos para ganhar.'}
                       weight={400}
                       color={theme.colors.gray3}/>
          <br/>
          <br/>
          <GenericText text={'Países inelegíveis'}
                       weight={700}
                       size={'20px'}
                       color={theme.colors.gray1}/>
          <GenericText weight={400}
                       color={theme.colors.gray3}>
          Os vencedores não devem ser residentes da Bélgica, Cuba, Irã, Iraque, Itália, Coréia do Norte, Cingapura, Sudão, Síria ou Tailândia
          </GenericText>
          <br/>
          <br/>
          <GenericText text={'Notas de elegibilidade'}
                       weight={700}
                       size={'20px'}
                       color={theme.colors.gray1}/>
          <GenericText weight={400}
                       color={theme.colors.gray3}>
          O hóspede deve ser maior de idade em sua jurisdição de residência (e pelo menos 18 anos), a menos que o Vencedor seja o pai / responsável legal do hóspede. Nenhum indivíduo com menos de 5 anos de idade pode ser um Convidado. Além dos requisitos do Vencedor (detalhados abaixo), o Visitante deve preencher e devolver uma declaração de publicidade e responsabilidade antes da partida. Se o Convidado for menor, o Vencedor deverá assinar e devolver todos os documentos exigidos em nome do menor. Se o Vencedor e / ou Convidado residir fora do país onde a experiência ocorrerá, o Vencedor e / ou Convidado deverá ter passaportes atuais e válidos e ser capaz de viajar para os locais da experiência. Se eles não puderem viajar para o (s) local (is) de experiência, eles perderão o prêmio.
          <br/>
          <br/>
          Em certos países, as regras e leis locais podem restringir ou proibir a concessão de certos prêmios ou impor restrições adicionais à participação. A entrada está sujeita a todas as leis locais. Veja nossas Regras Oficiais de Sorteios para mais detalhes. Funcionários, executivos e diretores do Patrocinador, Beneficiário Designado ou Provedor do Prêmio, e membros de suas famílias imediatas e domicílios, não são elegíveis para ganhar.
          <br/>
          <br/>
          Os indivíduos não podem receber mais do que um grande prêmio dentro do mesmo período de 18 meses. Os indivíduos não podem receber mais do que um prêmio menor nos mesmos sorteios.
          </GenericText>
          <br/>
          <br/>
          <GenericText text={'Como participar'}
                       weight={700}
                       size={'20px'}
                       color={theme.colors.gray1}/>
          <GenericText weight={400}
                       color={theme.colors.gray3}>
          Visite doeamor.org.br para utilizar qualquer um dos nossos métodos de inscrição. Veja nossas Regras Oficiais de Sorteios para mais detalhes. As chances de ganhar dependem do número de inscrições realizadas.
          </GenericText>
          <br/>
          <br/>
          <GenericText text={'Processo de confirmação do vencedor'}
                       weight={700}
                       size={'20px'}
                       color={theme.colors.gray1}/>
          <GenericText weight={400}
                       color={theme.colors.gray3}>
          O sorteio se dara no primeiro sábado do mes subsequente a campanha e será realizado pela loteria federal. Um processo de confirmação, que pode incluir uma verificação de antecedentes, será realizado para garantir que o potencial vencedor atenda aos padrões legais exigidos. O vencedor e, se aplicável, seu (s) convidado (s) concordam em cooperar totalmente com a DoeAmor conduzindo qualquer verificação de antecedentes, o que inclui o fornecimento de informações solicitadas pela DoeAmor incluindo, mas não se limitando a, nomes e endereços legais completos. Se o Prêmio incluir o encontro com uma celebridade, um encontro com uma figura pública ou comparecimento a um evento especial e qualquer verificação de antecedentes indica, a critério exclusivo de DoeAmor, que o potencial vencedor ou o (s) convidado (s) do potencial vencedor representam um perigo ou podem prejudicar a reputação de qualquer pessoa ou entidade envolvida no sorteio, Doeamor pode desqualificar o referido vencedor e avançar para o próximo vencedor potencial sorteado aleatoriamente. Enquanto se aguarda um resultado positivo do processo de confirmação, um representante da DoeAmor notificará o potencial vencedor por e-mail e / ou telefone. O potencial vencedor deve responder dentro do período de tempo designado na notificação, ou DoeAmor pode passar para outro vencedor potencial sorteado aleatoriamente. Antes de confirmar um potencial vencedor como vencedor, a DoeAmor pode exigir que o potencial vencedor confirme sua elegibilidade. Feito isso, o potencial vencedor e o (s) convidado (s) devem assinar e devolver todos os documentos necessários dentro do prazo especificado pela DoeAmor. Se você não executar e devolver todos os documentos exigidos dentro do prazo especificado por DoeAmor, você perderá o prêmio e DoeAmor passará para outro vencedor potencial sorteado pela loteria federal.
          </GenericText>
          <br/>
          <br/>
          <GenericText text={'Transparência'}
                       weight={700}
                       size={'20px'}
                       color={theme.colors.gray1}/>
          <GenericText weight={400}
                       color={theme.colors.gray3}>
          Na Doe Amor, acreditamos que a transparência é primordial, por isso, todo sorteio é realizado pela Loteria Federal e auditado pela Caixa Econômica Federal. Todo o processo, desde a sua doação, os pagamentos das despesas e prêmios, até os repasses as instituiçãoes de caridade que você escolheu é auditada pela KPMG Brasil. Uma das mais respeitadas empresa de auditoria do mundo. Além disso, você pode saber exatamente como foi aplicado cada centavo da sua doação acessando aqui.
          <br/>
          <br/>
          Nosso modelo nos permite, em parceria com a Liga de Combate ao Câncer, realmente fazer a diferença e mudar a forma como a sociedade tradicionalmente pensa sobre doações para caridade.
          <br/>
          <br/>
          É assim que funciona: DoeAmor e a Liga de Combate ao Câncer trabalham juntos para oferecer prêmios e experiências incríveis que qualquer pessoa pode ganhar. A DoeAmor se responsabiliza por tudo que é necessário para realizar o sorteio, o que significa que os únicos que tem a chance de ganhar são os participantes (você!). As organizações podem gastar menos tempo se preocupando com a arrecadação de fundos e, em vez disso, concentrar sua energia em fazer um trabalho incrível.
          A DoeAmor também busca a obtenção de prêmios doados para as campanhas de propriedade da DoeAmor, portanto, para essas, de cada real que você doar, 80 centavos vai como doação para a instituição de caridade associada, sem debitar o valor do prêmio.  A DoeAmor investe em esforços de marketing bastante significativos e não dependem (ou dependem em um grau muito pequeno) do trabalho e do nome de celebridades para ajudar a aumentar a conscientização e promover a campanha. 
          <br/>
          <br/>
          Os 20 centavos restantes do seu real vão para a DoeAmor e é usado para cobrir o custo de fornecer e manter a tecnologia e a equipe que fazem tudo isso acontecer.
          <br/>
          <br/>
          O resultado? As causas recebem uma doação sem risco, despesas gerais ou investimento, nossos sortudos vencedores recebem prêmios incríveis e todos podem ajudar uma grande causa e espalhar amor!
          <br/>
          <br/>
          Para saber mais sobre como apoiamos causas em parceria com a Liga de Combate ao Câncer, consulte nossos Termos de Uso.
          </GenericText>

        </SectionOnly>
      </Main>
    </>
  )
}