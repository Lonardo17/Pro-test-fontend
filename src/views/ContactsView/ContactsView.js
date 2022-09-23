import ContactTeam from '../../components/Contacts/ContactTeam';
import s from './ContactsView.module.css';
const ContactsView = () => {
  return (
    <div className={s.container}>
      <h2 className={s.title}>Our team</h2>
      <span className={s.line}> </span>
      <ContactTeam />
    </div>
  );
};
export default ContactsView;
