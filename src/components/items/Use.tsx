import { useContext, ReactNode } from "react";
import { ThemeContext } from "../BasicPage";

// useはあまり使わない？？サンプルではuseContextを使った。
const Use = () => {
  return (
    <>
      <h2>use</h2>
      <Panel title="Welcome">
        <Button show={true}>Sign in</Button>
        <Button show={false}>Log in</Button>
      </Panel>
      <hr />
    </>
  );
}

export default Use;

const Panel = ({ title, children } : { title: string; children: ReactNode }) => {
  const theme = useContext(ThemeContext);
  const className = 'panel-' + theme;
  
  return (
    <section className={className}>
      <p>{title}</p>
      {children}
    </section>
  )
}

const Button = ({ show, children } : { show: boolean; children: ReactNode }) => {
  const theme = useContext(ThemeContext);
  const className = 'button-' + theme;
  if (show) {
    return  (
      <button className={className}>
        {children}
      </button>
    )
  }

  return null;
}