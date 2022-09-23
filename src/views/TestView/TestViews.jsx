import { useSelector } from 'react-redux';
import { testTypeSelector } from 'redux/testType/testTypeSelector';
import {
  getTechTestQuestionsQuery,
  getTheoryTestQuestionsQuery,
} from 'services/testAPI';
import { techTest } from 'utils/constants';

export default function TestView() {
  const testType = useSelector(testTypeSelector);
  const [testQuestions, setTestQuestions] = useState(null);

  useEffect(async () => {
    if (!testType) return;

    try {
      const newTest =
        testType === techTest
          ? await getTechTestQuestionsQuery()
          : await getTheoryTestQuestionsQuery();

      setTestQuestions(newTest);
    } catch (error) {
      console.log(error.message);
    }
  }, [testType]);

  return (
    <>
      <p>{testType}</p>
      <p>{testQuestions.length}</p>
    </>
  );
}
