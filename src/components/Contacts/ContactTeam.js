import ContactSelector from './ContactSelector';
import ApplicationSvg from './ApplicationSvg';
import s from './ContactTeam.module.css';
const ContactTeam = () => {
  return (
    <div className={s.wrap}>
      <ul className={s.list}>
        {ContactSelector.map(({ id, image, name, role, linkedin, gitHub }) => (
          <li key={id} className={s.item}>
            <div className={s.wrapImg}>
              <img src={image} alt={name} className={s.img} />
              <div className={s.hoverImg}>
                <ApplicationSvg linkedin={linkedin} gitHub={gitHub} />
              </div>
            </div>
            <div className={s.info}>
              <h2 className={s.title}>{name}</h2>
              <p className={s.role}> {role}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactTeam;
