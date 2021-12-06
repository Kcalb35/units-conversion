import 'antd/dist/antd.css';
import { Input } from 'antd';
import { Col, Row } from 'antd';
import { useState } from 'react';

function Units(prop) {
	const [value, setValue] = useState(prop.scale)

	return (
		<Row justify="start">
			{prop.suffixs.map((s, i) =>
				<Col span={6} key={s}>
					<Input suffix={s} value={value[i]} onChange={
						e => {
							const str = e.target.value;
							const parsed = Number(str);
							if (str.at(-1)==='.'  || isNaN(parsed)) {
								let newValue=[...value];
								newValue[i] = e.target.value;
								setValue(newValue);
							}
							else {
								let unifiedValue = parsed / prop.scale[i];
								let newValue = prop.scale.map(scale=>scale*unifiedValue);
								setValue(newValue);
							}
						}
					} />
				</Col>)}
		</Row>);
}

export default Units;