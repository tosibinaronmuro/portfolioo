import { Tabs } from 'antd';
import Framework from './Framework';
import Languages from './Languages';
import Tools from './Tools';
const { TabPane } = Tabs;

const TabSection = () => (
  
  <Tabs  style={{
    'marginLeft': '32',
    'backgroundColor':'black',
    'color':'white',
    'padding':5,
      

  }} className="bg-black text-white h-80 w-full lg:w-full rounded-lg p-4 hover:border-2 hover:border-t-0  font-raleway   hover:border-yellow-500" defaultActiveKey="1"  centered   
 >
    <TabPane className="   text-white h-auto w-full lg:w-full rounded-lg p-4   "
                     tab="Languages" key="1">
      <Languages/>
    </TabPane>
    <TabPane className="  text-white h-auto w-full lg:w-full rounded-lg p-4  "
                     tab="Libraries" key="2">
      <Framework/>
    </TabPane>
    <TabPane tab="Tools and services" key="3">
     <Tools/>
    </TabPane>
  </Tabs>
);


export default TabSection;