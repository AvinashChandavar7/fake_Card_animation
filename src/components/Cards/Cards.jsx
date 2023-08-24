import './Cards.css';

const Cards = () => {
  const summary = 'Case Study';
  const title = 'V360 Awards: Celebration innovation with clients';
  const image =
    'https://dynamicmedia.accenture.com/is/image/accenture/Accenture-Case-Study-V360-Awards-glance-image:16x9-hd?ts=1692154524485&fit=constrain&dpr=off';
  const description = `Our global V360 Awards showcase how we embrace change to deliver on the promise of technology and human ingenuity. See the winners.`;

  return (
    <div style={{ display: 'flex', gap: '0', alignItems: 'center' }}>
      <figure className="cards__container">
        {/* outer card */}
        <div className="cards__outer">
          <div className="cards__info">
            <h4>{summary}</h4>
            <h2>{title}</h2>
          </div>
          <div className="card__img">
            <img src={image} alt="caseStudy" />
          </div>
        </div>

        {/* inner card  */}
        <div className="cards__inner">
          <div className="cards__description">
            <h4>{description}</h4>
          </div>
          <div className="cards__Expand">{'Expand >'}</div>
        </div>
      </figure>
    </div>
  );
};

export default Cards;
