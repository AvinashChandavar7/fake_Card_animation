import './Card1.css';

const Card1 = () => {
  
  const summary = 'RESEARCH REPORT';
  const title = 'Strategy at the pace of technology';
  const image = `https://dynamicmedia.accenture.com/is/image/accenture/Accenture-StrategyTL-Feat-Img-OT-SKIM-640x425:rad-card-full?ts=1691719374599&fit=constrain&dpr=off`;
  const description = `Technology is increasing the complexity and speed of business strategy. Separating noise from relevance is hard. A cohort of leaders are outperforming their peers by using tech to both inform and execute on their strategy.`;

  const number = '21% ';
  const p = ` of companies are leveraging  technology to shape  business strategy`;

  return (
    <div style={{ display: 'flex', gap: '0', alignItems: 'center' }}>
      <figure className="card1__container">
        {/* outer card */}
        <div className="card1__outer">
          <div className="card1__info">
            <h4>{summary}</h4>
            <h2>{title}</h2>
          </div>
          <img src={image} alt="caseStudy" />
          <div className="card1__percentage">
            <h1>{number}</h1>
            <p>{p}</p>
          </div>
        </div>

        {/* inner card  */}
        <div className="card1__inner">
          <div className="card1__description">
            <h4>{description}</h4>
          </div>
          <div className="card1__Expand">{'Expand >'}</div>
        </div>
      </figure>
    </div>
  );
};

export default Card1;
