import ContactTeam from '../../components/Contacts/ContactTeam';
import s from './ContactsView.module.css';
import { useDispatch, } from 'react-redux';
import { resetHuman } from 'redux/human/humanSlices';
const ContactsView = () => {
  const dispatch = useDispatch();
  dispatch(resetHuman())

  return (
    <div className={s.container}>
      <h2 className={s.title}>Our team</h2>
      <span className={s.line}> </span>
      <ContactTeam />
    </div>
  );
};
export default ContactsView;
