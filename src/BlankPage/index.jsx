import { Link } from "react-router-dom";
import {
  Rectangle62 
 } from '../ui-components';
 import {
  Component1 
 } from '../ui-components';

const BlankPage = () => {
  return (
    <>
     <Component1 />
      空っぽのページです。
    




      <Rectangle62 />
      <div>
        <Link to="/blank">ブランクページへ</Link>
      </div>
      <div>
        <Link to="/my_page">マイページへ</Link>
      </div>
    </>
  );
};
export default BlankPage;
