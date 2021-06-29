import React, {useState} from 'react'
import styled from 'styled-components';
import ColorPickerItem from './ColorPickerItem';

const ColorPickerWrapper = styled.div`
  display: flex;
`;

const ColorPicker = ({colors,className, callback}) => {
  const [active, setActive] = useState(0);
  const updateActive = (value) => {
    setActive(value);
    callback(colors[value])
  };

  return(
    <ColorPickerWrapper className={className}>
      {colors.map((color, index) => 
        <ColorPickerItem 
          key={index}
          color={color.code}
          isSelected={ index === active ? "isSelected" : "" } 
          onClick={() => updateActive(index)}
        />)
      }
    </ColorPickerWrapper>
  )
}

export default ColorPicker;