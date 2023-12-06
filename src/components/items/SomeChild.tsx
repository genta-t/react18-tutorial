
const SomeChild = ({ showCount }: { showCount: () => void }) => {
  return (
    <button onClick={showCount}>SomeChild</button>
  );
}
export default SomeChild;