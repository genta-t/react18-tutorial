import { useAtom } from 'jotai';
import { filterAtom } from './utils';
import { Radio, RadioChangeEvent } from 'antd';

const Filter = () => {
  const [ filter, setFilter ] = useAtom(filterAtom);

  const handleChange = (e: RadioChangeEvent) => {
    setFilter(e.target.value as string);
  }

  return(
    <>
      <Radio.Group
        onChange={handleChange}
        value={filter}
      >
        <Radio value="all">All</Radio>
        <Radio value="completed">Completed</Radio>
        <Radio value="inCompleted">InCompleted</Radio>
      </Radio.Group>
    </>
  )
}

export default Filter;