import { useNavigate } from 'react-router-dom';
import InputFormItem from '../form/InputFormItem';
import { textRule } from '../form/rules';
import PartPageLinks from './PartPageLinks';
import { useFormPartContext, onSubmit } from './utils';
import PullDownItem from '../form/PullDownItem';

const Part2Page = () => {
  const { formPartData, register, handleSubmit, formState: { errors } } = useFormPartContext();
  const navigate = useNavigate();
  
  return (
    <>
      <PartPageLinks link={"/react-hook-form-3/2"}/>
      <p>Part2Page</p>
      <form onSubmit={handleSubmit(formPartData ? onSubmit(formPartData, "/react-hook-form-3/3", navigate) : () => {})}>
        <InputFormItem 
          title={"都道府県"}
          labelName={"prefectures"}
          type={"text"}
          inputRegister={register}
          errorMessage={errors.prefectures?.message}
          rule={textRule("都道府県")}
          placeholder={"鹿児島"}
        />
        {/* <PullDownItem
          title={"都道府県"}
          labelName={"address.prefectures"}
          pullDownRegister={register}
          array={prefectures}
        />
        <PullDownItem
          title={"市町村"}
          labelName={"address.city"}
          pullDownRegister={register}
          array={prefectures}
        /> */}
        <button type='submit'>次へ</button>
      </form>
    </>
  );
}

export default Part2Page;

const prefectures = [
  { id: 1, text: '東京都' },
  { id: 2, text: '鹿児島' },
  // 他の都道府県データ...
];

const cities = {
  1: ['新宿区', '渋谷区', '台東区'],
  2: ['南九州市', '鹿児島市', '指宿市'],
  // 他の市町村データ...
};