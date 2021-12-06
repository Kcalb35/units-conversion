import 'antd/dist/antd.css';
import Units from './units';
import { Space } from 'antd';


function App() {
  return (
    <div className="App">
      <Space direction="vertical">
        <Units suffixs={["au(Energy)", "Hartee", "eV", "J", "cm^-1"]} scale={[1, 1, 27.2114, 4.35981e-18, 2.194746317e5]} />
        <Units suffixs={["au(Length)", "Å"]} scale={[1, 0.5291772083]} />
        <Units suffixs={["au(Mass)", "kg", "amu"]} scale={[1, 9.109534e-31, 5.4858e-4]} />
        <Units suffixs={["au(Time)", "fs", "ps"]} scale={[1, 2.418884326505e-2, 2.418884326505e-5]} />
        <Units suffixs={["k", "cm^-1", "meV", "au(Energy)"]} scale={[300, 208.58676, 25.86, 9.5033e-4]} />
      </Space>
    </div>
  );
}

export default App;
