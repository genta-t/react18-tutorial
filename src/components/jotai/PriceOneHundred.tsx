import { useAtom } from 'jotai';
import { addPriceAtom } from './utils';

const PriceOneHundred = () => {
  const [ price, addPrice ] = useAtom(addPriceAtom);

  return(
    <>
      <p>{price} 円</p>
      <button
        type='button'
        onClick={() => addPrice(100)}
      >
        100円追加
      </button>
      <button
        type='button'
        onClick={() => addPrice(-100)}
      >
        100円減らす
      </button>
    </>
  )
}

export default PriceOneHundred;