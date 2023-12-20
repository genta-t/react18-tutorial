const Hello = ({name} : {name?: string}) => {
  if (name) {
    return <h1>Hello, {name}!</h1>;
  } else {
    return <span>Hey, stranger</span>;
  }
}

export default Hello;