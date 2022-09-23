import s from './Materials.module.css';

const Literature = () => {
  return (
    <div className={s.literature}>
      <h2 className={s.title}> Useful literature </h2>
      <ul className={s.list}>
        <li>
          <a
            href="https://theqalead.com/tools/qa-automation-tools/"
            className={s.linkLiteratur}
          >
            1. The Best QA Automation Tools List
          </a>
        </li>
        <li>
          <a
            href="https://www.testim.io/blog/test-automation-frameworks"
            className={s.linkLiteratur}
          >
            2. Your Complete Guide to Test Automation Frameworks
          </a>
        </li>
        <li>
          <a
            href="https://go.testim.io/qalead-best-qa-automation-tools?utm_campaign=QA%2520Lead%2520Pages&utm_source=QA%2520Lead&utm_medium=Best%2520QA%2520Automation%2520Tools"
            className={s.linkLiteratur}
          >
            3. Testim Automate
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Literature;
